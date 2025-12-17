'use client';

import { login } from '@/apis/auth';
import { fetchUserInfo } from '@/apis/users';
import AlarmIcon from '@/assets/icons/alarm.svg';
import { useAuthStore } from '@/stores/useAuthStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AlarmModal } from '../alarm/AlarmModal';
import { Dropdown } from './DropDown';
import * as styles from './Header.css';

const TEST_EMAIL = process.env.NEXT_PUBLIC_TEST_EMAIL;
const TEST_PASSWORD = process.env.NEXT_PUBLIC_TEST_PASSWORD;

export function Header() {
  const { user, setAuth, setUser, setAuthInitialized, isAuthInitialized, clearAuth, accessToken } = useAuthStore();
  const isLoggedIn = Boolean(user);

  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const testLoggedIn = async () => {
    if (!TEST_EMAIL || !TEST_PASSWORD) {
      console.warn('테스트 계정 정보가 설정되지 않았습니다.');
      return;
    }

    try {
      const { accessToken, refreshToken, userData } = await login(TEST_EMAIL, TEST_PASSWORD);
      setAuth(userData, accessToken, refreshToken);

      if (userData) {
        router.push('/');
      }
    } catch (error) {
      console.error('테스트 로그인 실패:', error);
    }
  };

  useEffect(() => {
    const restoreUser = async () => {
      if (!user && accessToken) {
        try {
          const userData = await fetchUserInfo();
          setUser(userData);
        } catch (error) {
          console.error('토큰이 유효하지 않아 로그아웃 처리합니다.', error);
          clearAuth();
        }
      }
      setAuthInitialized(true);
    };
    restoreUser();
  }, [user, setAuth, setAuthInitialized, accessToken]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Image
              src='/icons/logo.svg'
              priority
              alt='GlobalNomad 로고'
              className={styles.logoImage}
              width={172}
              height={30}
            />
          </Link>
        </div>

        {!isAuthInitialized ? (
          <div className={styles.authButtons}></div>
        ) : (
          <>
            {isLoggedIn ? (
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
          </>
        )}
      </div>
    </header>
  );
}
