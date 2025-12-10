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
  isTestLoggedIn: boolean;
}

interface Actions {
  setUser: (userInfo: User) => void;
  clearUser: () => void;
}

type UserStore = State & Actions;

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      isTestLoggedIn: false,
      setUser: (userInfo) => set({ user: userInfo, isTestLoggedIn: true }),
      clearUser: () => set({ user: null, isTestLoggedIn: false }),
    }),
    { name: 'user-storage' },
  ),
);
