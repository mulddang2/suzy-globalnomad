import { useActivitiesReservations } from '@/hooks/useActivitiesReservations';
import { useAvailableSchedule } from '@/hooks/useAvailableSchedule';
import { AxiosError } from 'axios';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import * as styles from './ReservationSidebar.css';

interface ReservationSidebarProps {
  price: number;
  activityId: number;
}

export default function ReservationSidebar({ price, activityId }: ReservationSidebarProps) {
  const [headcount, setHeadcount] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const today = dayjs();
  const minDate = today.startOf('day').toDate();
  const [viewDate, setViewDate] = useState({
    year: today.year(),
    month: today.format('MM'),
  });

  const { data } = useAvailableSchedule({
    activityId,
    year: viewDate.year, // 2026
    month: viewDate.month, // 01
  });

  const reservationMutation = useActivitiesReservations();

  const selectedDateStr = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null;
  const availableTimes = data?.find((schedule) => schedule.date === selectedDateStr)?.times || [];

  const totalPrice = price * headcount;

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleMonthChange = (date: Date) => {
    const newDate = dayjs(date);
    setViewDate({
      year: newDate.year(),
      month: newDate.format('MM'),
    });
  };

  const isPastDate = (date: Date) => {
    return dayjs(date).isBefore(minDate);
  };

  const hasSchedule = (date: Date) => {
    const dateStr = dayjs(date).format('YYYY-MM-DD');
    const schedule = data?.find((item) => item.date === dateStr);

    return !!schedule && !isPastDate(date);
  };

  const handleReservation = () => {
    if (!selectedTimeId) return;

    reservationMutation.mutate(
      {
        activityId,
        scheduleId: selectedTimeId,
        headCount: headcount,
      },
      {
        onSuccess: () => {
          alert('예약이 완료되었습니다.');
          setIsSidebarVisible(false);
          setSelectedDate(undefined);
          setSelectedTimeId(null);
          setHeadcount(1);
        },
        onError: (error) => {
          const axiosError = error as AxiosError;
          const errorMessage =
            (axiosError.response?.data as { message: string })?.message ?? '예약에 실패했습니다. 다시 시도해주세요.';
          console.error('Reservation failed:', error);
          alert(errorMessage);
        },
      },
    );
  };

  return (
    <div className={`${styles.sidebarContainer} ${!isSidebarVisible ? styles.sidebarClosed : ''}`}>
      <div className={styles.toggleHandle} onClick={toggleSidebar} />

      <div className={styles.priceLayout}>
        <span className={styles.price}>₩ {price.toLocaleString()}</span>
        <span className={styles.priceUnit}>/ 인</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.divider} />

        <div>
          <h3 className={styles.sectionTitle}>날짜 선택</h3>
          <div className={styles.calendarContainer}>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
              onMonthChange={handleMonthChange}
              disabled={[isPastDate]}
              modifiers={{ hasSchedule }}
              modifiersClassNames={{ hasSchedule: styles.hasSchedule }}
              locale={ko}
            />
          </div>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>예약 가능한 시간</h3>
          <div>
            {selectedDate ? (
              availableTimes.length > 0 ? (
                <div className={styles.timeSlotContainer}>
                  {availableTimes.map((time) => (
                    <button
                      key={time.id}
                      className={`${styles.timeSlotButton} ${selectedTimeId === time.id ? styles.selected : ''}`}
                      onClick={() => {
                        setSelectedTimeId((prev) => (prev === time.id ? null : time.id));
                      }}
                    >
                      {time.startTime} ~ {time.endTime}
                    </button>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '10px 0', color: '#666' }}>예약 가능한 시간이 없습니다.</div>
              )
            ) : (
              <div style={{ padding: '10px 0', color: '#666' }}>날짜를 선택해주세요.</div>
            )}
          </div>
          <div className={styles.divider} />
        </div>

        <div>
          <h3 className={styles.sectionTitle}>인원 선택</h3>
          <div
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <button onClick={() => setHeadcount(Math.max(1, headcount - 1))}>-</button>
            <span>{headcount}명</span>
            <button onClick={() => setHeadcount(headcount + 1)}>+</button>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.totalPriceLayout}>
          <span className={styles.totalPriceLabel}>총 합계</span>
          <span className={styles.totalPrice}>₩ {totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <button
        className={styles.reserveButton}
        disabled={!selectedDate || !selectedTimeId || reservationMutation.isPending}
        onClick={handleReservation}
      >
        예약하기
      </button>
    </div>
  );
}
