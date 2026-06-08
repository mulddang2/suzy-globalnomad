export type FormKey = 'rhf' | 'us';

export interface FormStats {
  renderCount: number;
  totalActualDuration: number;
  totalBaseDuration: number;
  mountActualDuration: number;
  mountBaseDuration: number;
  updateRenderCount: number;
  lastActualDuration: number;
  /** keydown → React 렌더 커밋 지연. 리렌더가 없으면(예: RHF 비제어 입력) 쌓이지 않는다. */
  inputLags: number[];
  /** input 이벤트 → 다음 애니메이션 프레임 지연. 리렌더 발생 여부와 무관하게 양쪽 모두 측정된다. */
  paintLags: number[];
}

const emptyStats = (): FormStats => ({
  renderCount: 0,
  totalActualDuration: 0,
  totalBaseDuration: 0,
  mountActualDuration: 0,
  mountBaseDuration: 0,
  updateRenderCount: 0,
  lastActualDuration: 0,
  inputLags: [],
  paintLags: [],
});

export const statsStore: Record<FormKey, FormStats> = {
  rhf: emptyStats(),
  us: emptyStats(),
};

interface KeydownTracker {
  time: number | null;
  formKey: FormKey | null;
}

export const keydownTracker: KeydownTracker = {
  time: null,
  formKey: null,
};

export function recordRender(
  formKey: FormKey,
  phase: 'mount' | 'update' | 'nested-update',
  actualDuration: number,
  baseDuration: number,
  commitTime: number,
) {
  const s = statsStore[formKey];
  s.renderCount += 1;
  s.totalActualDuration += actualDuration;
  s.totalBaseDuration += baseDuration;
  s.lastActualDuration = actualDuration;
  if (phase === 'mount') {
    s.mountActualDuration += actualDuration;
    s.mountBaseDuration += baseDuration;
  } else {
    s.updateRenderCount += 1;
  }
  if (phase !== 'mount' && keydownTracker.formKey === formKey && keydownTracker.time !== null) {
    const lag = commitTime - keydownTracker.time;
    if (lag >= 0 && lag < 10_000) s.inputLags.push(lag);
    keydownTracker.formKey = null;
    keydownTracker.time = null;
  }
}

export function resetStats() {
  statsStore.rhf = emptyStats();
  statsStore.us = emptyStats();
  keydownTracker.formKey = null;
  keydownTracker.time = null;
}

export function markKeydown(formKey: FormKey) {
  keydownTracker.formKey = formKey;
  keydownTracker.time = performance.now();
}

/**
 * input 이벤트 시점부터 다음 페인트 직전(rAF 콜백)까지의 시간을 측정한다.
 * React 렌더 커밋에 의존하지 않으므로 제어(useState)·비제어(RHF) 입력 모두 동일하게 잡힌다.
 *
 * 주의: rAF는 다음 vsync까지 대기하므로, 측정값에는 작업 시간뿐 아니라
 * 프레임 대기 시간(0~16.7ms)도 포함된다. 두 폼이 공유하는 기준선이므로
 * 절대값보다 양쪽의 차이를 비교하는 용도로 본다.
 */
export function markInput(formKey: FormKey) {
  const start = performance.now();
  requestAnimationFrame(() => {
    const lag = performance.now() - start;
    if (lag >= 0 && lag < 10_000) statsStore[formKey].paintLags.push(lag);
  });
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
  return sorted[idx];
}

function lagSummary(lags: number[]) {
  const sorted = [...lags].sort((a, b) => a - b);
  const avg = lags.length > 0 ? lags.reduce((a, b) => a + b, 0) / lags.length : 0;
  return {
    samples: lags.length,
    avg,
    p50: percentile(sorted, 50),
    max: sorted.length > 0 ? sorted[sorted.length - 1] : 0,
    min: sorted.length > 0 ? sorted[0] : 0,
  };
}

export function summarize(formKey: FormKey) {
  const s = statsStore[formKey];
  const avgActual = s.renderCount > 0 ? s.totalActualDuration / s.renderCount : 0;
  const avgBase = s.renderCount > 0 ? s.totalBaseDuration / s.renderCount : 0;
  const inputLag = lagSummary(s.inputLags);
  const paintLag = lagSummary(s.paintLags);
  return {
    renderCount: s.renderCount,
    updateRenderCount: s.updateRenderCount,
    mountActualDuration: s.mountActualDuration,
    totalActualDuration: s.totalActualDuration,
    avgActualDuration: avgActual,
    avgBaseDuration: avgBase,
    lastActualDuration: s.lastActualDuration,
    inputLagSamples: inputLag.samples,
    avgInputLag: inputLag.avg,
    maxInputLag: inputLag.max,
    minInputLag: inputLag.min,
    paintLagSamples: paintLag.samples,
    avgPaintLag: paintLag.avg,
    p50PaintLag: paintLag.p50,
    maxPaintLag: paintLag.max,
    minPaintLag: paintLag.min,
  };
}
