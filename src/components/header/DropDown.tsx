'use client';

import defaultUserImage from '@/assets/images/default-user.png';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import * as styles from './DropDown.css';

export const Dropdown: React.FC = () => {
  const router = useRouter();

  const { user, clearUser } = useUserStore();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    if (option === '내 정보') {
      router.push('/profile/mypage');
    } else if (option === '예약 내역') {
      router.push('/profile/my-reservations');
    } else if (option === '내 체험 관리') {
      router.push('/profile/my-activities');
    } else if (option === '예약 현황') {
      router.push('/profile/my-activity-board');
    } else if (option === '로그아웃') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      if (clearUser) {
        clearUser();
        router.push('/login');
      }
    }
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.avatarContainer} ref={dropdownRef}>
      <div onClick={() => setDropdownOpen((prev) => !prev)}>
        <div className={styles.userGroup}>
          <Image
            src={user?.profileImageUrl || defaultUserImage}
            alt='사용자 프로필'
            className={styles.avatar}
            width={40}
            height={40}
          />
          {user?.nickname && <span className={styles.userName}>{user.nickname}</span>}
        </div>
      </div>
      {user?.nickname && isDropdownOpen && (
        <div className={styles.dropdown}>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('내 정보')}>
            내 정보
          </button>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('예약 내역')}>
            예약 내역
          </button>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('내 체험 관리')}>
            내 체험 관리
          </button>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('예약 현황')}>
            예약 현황
          </button>
          <button className={styles.dropdownItem} onClick={() => handleOptionClick('로그아웃')}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};
