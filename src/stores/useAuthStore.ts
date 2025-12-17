import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
}

interface State {
  user: User | null;
  isAuthInitialized?: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

interface Actions {
  setUser: (userInfo: User) => void;
  setAuthInitialized: (v: boolean) => void;
  setAuth: (user: User | null, accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
}

type UserStore = State & Actions;

export const useAuthStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthInitialized: false,

      setAuth: (user, accessToken, refreshToken) => set({ user, accessToken, refreshToken }),
      setUser: (user) => set({ user }),
      clearAuth: () => set({ user: null, accessToken: null, refreshToken: null }),
      setAuthInitialized: (v) => set({ isAuthInitialized: v }),
    }),
    {
      name: 'authStorage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, accessToken: state.accessToken, refreshToken: state.refreshToken }),
    },
  ),
);
