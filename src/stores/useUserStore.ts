import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
}

interface State {
  user: User | null;
  isAuthInitialized: boolean;
}

interface Actions {
  setUser: (userInfo: User) => void;
  clearUser: () => void;
  setAuthInitialized: (v: boolean) => void;
}

type UserStore = State & Actions;

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (userInfo) => set({ user: userInfo }),
      clearUser: () => set({ user: null }),
      isAuthInitialized: false,
      setAuthInitialized: (v) => set({ isAuthInitialized: v }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user }) as UserStore,
    },
  ),
);
