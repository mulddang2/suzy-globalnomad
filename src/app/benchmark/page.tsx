'use client';

import MyActivitiesCreateRHFWrapper from '@/components/profile/my-activities-create/MyActivitiesCreateRHFWrapper';
import MyActivitiesCreateUseState from '@/components/profile/my-activities-create/MyActivitiesCreateUseState';
import { StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ko';
import { Profiler, useEffect, useReducer, useState } from 'react';
import { loadPostcode } from 'react-daum-postcode';
import { FormKey, markInput, markKeydown, recordRender, resetStats, summarize } from './stats-store';

const CATEGORIES = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

function useTick(intervalMs: number) {
  const [, force] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    const id = setInterval(force, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
}

function fmt(n: number, digits = 2) {
  return n.toFixed(digits);
}

function StatsPanel({ formVersionKey }: { formVersionKey: number }) {
  useTick(300);
  const rhf = summarize('rhf');
  const us = summarize('us');

  const diff = (a: number, b: number) => {
    if (b === 0) return 'n/a';
    const ratio = a / b;
    return `${ratio.toFixed(2)}x`;
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: '#0B3B2D',
        color: '#fff',
        padding: '12px 16px',
        fontSize: 13,
        fontFamily: 'monospace',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 8 }}>
        <strong>Benchmark Stats</strong>
        <button
          onClick={() => {
            resetStats();
          }}
          style={{ padding: '4px 10px', background: '#fff', color: '#0B3B2D', border: 'none', borderRadius: 4 }}
        >
          Reset stats
        </button>
        <button
          onClick={() => {
            const data = { rhf, us, formVersionKey };
            console.log('[benchmark]', data);
            navigator.clipboard?.writeText(JSON.stringify(data, null, 2));
          }}
          style={{ padding: '4px 10px', background: '#fff', color: '#0B3B2D', border: 'none', borderRadius: 4 }}
        >
          Copy JSON
        </button>
        <span style={{ opacity: 0.7 }}>auto-refresh 300ms</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
            <th style={{ padding: 4 }}>Metric</th>
            <th style={{ padding: 4 }}>React Hook Form</th>
            <th style={{ padding: 4 }}>useState</th>
            <th style={{ padding: 4 }}>useState / RHF</th>
          </tr>
        </thead>
        <tbody>
          <Row
            label='Total renders'
            rhf={rhf.renderCount}
            us={us.renderCount}
            diff={diff(us.renderCount, rhf.renderCount)}
          />
          <Row
            label='Update renders'
            rhf={rhf.updateRenderCount}
            us={us.updateRenderCount}
            diff={diff(us.updateRenderCount, rhf.updateRenderCount)}
          />
          <Row
            label='Mount actual (ms)'
            rhf={fmt(rhf.mountActualDuration)}
            us={fmt(us.mountActualDuration)}
            diff={diff(us.mountActualDuration, rhf.mountActualDuration)}
          />
          <Row
            label='Total actual (ms)'
            rhf={fmt(rhf.totalActualDuration)}
            us={fmt(us.totalActualDuration)}
            diff={diff(us.totalActualDuration, rhf.totalActualDuration)}
          />
          <Row
            label='Avg actual / render (ms)'
            rhf={fmt(rhf.avgActualDuration)}
            us={fmt(us.avgActualDuration)}
            diff={diff(us.avgActualDuration, rhf.avgActualDuration)}
          />
          <Row
            label='Avg base / render (ms)'
            rhf={fmt(rhf.avgBaseDuration)}
            us={fmt(us.avgBaseDuration)}
            diff={diff(us.avgBaseDuration, rhf.avgBaseDuration)}
          />
          <Row
            label='Last actual (ms)'
            rhf={fmt(rhf.lastActualDuration)}
            us={fmt(us.lastActualDuration)}
            diff={diff(us.lastActualDuration, rhf.lastActualDuration)}
          />
          <Row label='Input lag samples' rhf={rhf.inputLagSamples} us={us.inputLagSamples} diff='—' />
          <Row
            label='Avg input lag (ms)'
            rhf={fmt(rhf.avgInputLag)}
            us={fmt(us.avgInputLag)}
            diff={diff(us.avgInputLag, rhf.avgInputLag)}
          />
          <Row
            label='Max input lag (ms)'
            rhf={fmt(rhf.maxInputLag)}
            us={fmt(us.maxInputLag)}
            diff={diff(us.maxInputLag, rhf.maxInputLag)}
          />
          <Row
            label='Min input lag (ms)'
            rhf={fmt(rhf.minInputLag)}
            us={fmt(us.minInputLag)}
            diff={diff(us.minInputLag, rhf.minInputLag)}
          />
          <Row label='Paint lag samples' rhf={rhf.paintLagSamples} us={us.paintLagSamples} diff='—' />
          <Row
            label='Avg paint lag (ms)'
            rhf={fmt(rhf.avgPaintLag)}
            us={fmt(us.avgPaintLag)}
            diff={diff(us.avgPaintLag, rhf.avgPaintLag)}
          />
          <Row
            label='P50 paint lag (ms)'
            rhf={fmt(rhf.p50PaintLag)}
            us={fmt(us.p50PaintLag)}
            diff={diff(us.p50PaintLag, rhf.p50PaintLag)}
          />
          <Row
            label='Max paint lag (ms)'
            rhf={fmt(rhf.maxPaintLag)}
            us={fmt(us.maxPaintLag)}
            diff={diff(us.maxPaintLag, rhf.maxPaintLag)}
          />
          <Row
            label='Min paint lag (ms)'
            rhf={fmt(rhf.minPaintLag)}
            us={fmt(us.minPaintLag)}
            diff={diff(us.minPaintLag, rhf.minPaintLag)}
          />
        </tbody>
      </table>
      <p style={{ marginTop: 6, opacity: 0.8, fontSize: 11 }}>
        측정 방법: 두 폼이 동시에 마운트되어 있습니다. 양 폼의 input/textarea에 동일한 텍스트를 타이핑한 뒤 비교하세요.
        <br />
        <strong>input lag</strong>: keydown → React 렌더 커밋. 리렌더가 없는 비제어 입력(RHF)에서는 0으로 남습니다.
        <br />
        <strong>paint lag</strong>: input 이벤트 → 다음 프레임(rAF). 리렌더 발생 여부와 무관하게 양쪽 모두 측정되는 공정
        지표입니다. 프레임 대기(0~16.7ms)가 포함되므로 절대값보다 두 폼의 차이로 해석하세요.
      </p>
    </div>
  );
}

function Row({ label, rhf, us, diff }: { label: string; rhf: number | string; us: number | string; diff: string }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <td style={{ padding: 4 }}>{label}</td>
      <td style={{ padding: 4 }}>{rhf}</td>
      <td style={{ padding: 4 }}>{us}</td>
      <td style={{ padding: 4, opacity: 0.8 }}>{diff}</td>
    </tr>
  );
}

function FormPane({ title, formKey, children }: { title: string; formKey: FormKey; children: React.ReactNode }) {
  return (
    <div style={{ flex: 1, minWidth: 0, border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
      <h2 style={{ marginTop: 0, marginBottom: 12 }}>{title}</h2>
      <div
        onKeyDownCapture={(e) => {
          const t = e.target as HTMLElement;
          if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') {
            markKeydown(formKey);
          }
        }}
        onInputCapture={(e) => {
          const t = e.target as HTMLElement;
          if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') {
            markInput(formKey);
          }
        }}
      >
        <Profiler
          id={formKey}
          onRender={(_id, phase, actualDuration, baseDuration, _startTime, commitTime) => {
            recordRender(formKey, phase, actualDuration, baseDuration, commitTime);
          }}
        >
          {children}
        </Profiler>
      </div>
    </div>
  );
}

export default function BenchmarkPage() {
  const [versionKey, setVersionKey] = useState(0);

  // 주소 검색 팝업 스크립트를 미리 로드해 둔다.
  // 로드 전에 검색 버튼을 누르면 팝업이 .then() 콜백(다음 태스크)에서 열려
  // 브라우저 팝업 차단에 걸리므로, 마운트 직후 미리 받아 둔다.
  useEffect(() => {
    loadPostcode().catch((e) => {
      console.error('[benchmark] Daum 우편번호 스크립트 로드 실패', e);
    });
  }, []);

  return (
    <div style={{ padding: 24, maxWidth: 1600, margin: '0 auto' }}>
      <StatsPanel formVersionKey={versionKey} />
      <div style={{ display: 'flex', gap: 12, margin: '16px 0' }}>
        <button
          onClick={() => {
            resetStats();
            setVersionKey((v) => v + 1);
          }}
          style={{ padding: '8px 14px', background: '#0B3B2D', color: '#fff', border: 'none', borderRadius: 4 }}
        >
          Remount both forms (hard reset)
        </button>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
        <StyledEngineProvider injectFirst>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <FormPane key={`rhf-${versionKey}`} title='React Hook Form' formKey='rhf'>
              <MyActivitiesCreateRHFWrapper options={CATEGORIES} />
            </FormPane>
            <FormPane key={`us-${versionKey}`} title='useState (controlled)' formKey='us'>
              <MyActivitiesCreateUseState options={CATEGORIES} />
            </FormPane>
          </div>
        </StyledEngineProvider>
      </LocalizationProvider>
    </div>
  );
}
