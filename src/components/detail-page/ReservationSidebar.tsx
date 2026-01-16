import { useState } from 'react';
import * as styles from './ReservationSidebar.css';

interface ReservationSidebarProps {
  price: number;
  activityId: number;
}

export default function ReservationSidebar({ price, activityId }: ReservationSidebarProps) {
  const [headcount, setHeadcount] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = price * headcount;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.toggleHandle} onClick={toggleSidebar} />

      <div className={styles.priceLayout}>
        <span className={styles.price}>₩ {price.toLocaleString()}</span>
        <span className={styles.priceUnit}>/ 인</span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.divider} />

        <div>
          <h3 className={styles.sectionTitle}>날짜 선택</h3>
          <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '16px' }}>
            날짜를 선택해주세요 (Calendar Placeholder)
          </div>
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
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
      >
        {isOpen ? '예약하기' : '예약하기 (날짜 선택)'}
      </button>
    </div>
  );
}
