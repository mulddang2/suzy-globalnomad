'use client';

import { login } from '@/apis/auth';
import { fetchUserInfo } from '@/apis/users';
import AlarmIcon from '@/assets/icons/alarm.svg';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AlarmModal } from '../alarm/AlarmModal';
import { Button } from '../button/Button';
import { Dropdown } from './DropDown';
import * as styles from './Header.css';

const TEST_EMAIL = process.env.NEXT_PUBLIC_TEST_EMAIL;
const TEST_PASSWORD = process.env.NEXT_PUBLIC_TEST_PASSWORD;

export function Header() {
  const { user, isTestLoggedIn, setUser } = useUserStore();

  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const isLoggedIn = Boolean(user) || isTestLoggedIn;

  const testLoggedIn = async () => {
    if (!TEST_EMAIL || !TEST_PASSWORD) {
      console.warn('테스트 계정 정보가 설정되지 않았습니다.');
      return;
    }

    try {
      const { accessToken, refreshToken, user } = await login(TEST_EMAIL, TEST_PASSWORD);
      setUser(user);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      if (user) {
        router.push('/');
      }
    } catch (error) {
      console.error('테스트 로그인 실패:', error);
    }
  };

  useEffect(() => {
    const restoreUser = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken && !user) {
        try {
          const userData = await fetchUserInfo();
          setUser(userData);
        } catch (error) {
          console.error('토큰이 유효하지 않아 로그아웃 처리합니다.', error);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      }
    };
    restoreUser();
  }, [setUser, user]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <div className={styles.logoContainer} onClick={() => router.push('/')}>
          <Image
            src='/icons/logo.svg'
            priority
            alt='GlobalNomad 로고'
            className={styles.logoImage}
            width={172}
            height={30}
          />
        </div>

        {isLoggedIn || isTestLoggedIn ? (
          // 로그인
          <div className={styles.userInfo}>
            <div className={styles.notificationContainer}>
              <button className={styles.notificationButton} onClick={() => setModalOpen(true)}>
                <AlarmIcon />
              </button>
              {/* 알림 모달 */}
              {isModalOpen && (
                <div className={styles.alarmModalContainer}>
                  <AlarmModal onClose={() => setModalOpen(false)} />
                </div>
              )}
            </div>
            <div className={styles.divider}></div>
            <Dropdown />
          </div>
        ) : (
          // 비 로그인
          <div className={styles.authButtons}>
            <button onClick={testLoggedIn} className={styles.testLoginButton}>
              테스트 로그인
            </button>
            <button onClick={() => router.push('/login')} className={styles.authButton}>
              로그인
            </button>
            <button onClick={() => router.push('/signup')} className={styles.authButton}>
              회원가입
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
