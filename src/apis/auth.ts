import { useAuthStore } from '@/stores/useAuthStore';
import axios from 'axios';
import { axiosInstance } from './axios-instance';
import { BASE_URL } from './constants';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userData: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('로그인 실패: 서버 에러');
    } else {
      throw new Error('로그인 실패: 예상치 못한 에러');
    }
  }
};

export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = useAuthStore.getState().refreshToken;
  if (!refreshToken) {
    throw new Error('Refresh Token이 없습니다.');
  }

  try {
    const response = await axios.post<{ accessToken: string }>(
      `${BASE_URL}/auth/tokens`,
      {},
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    return response.data.accessToken;
  } catch (error) {
    console.error('토큰 갱신 실패:', error);
    throw new Error('토큰 갱신 실패');
  }
};
