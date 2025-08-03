import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  broker: string | null;
  userData: { name: string; username: string } | null;
  login: (payload: { username: string; name: string }) => void;
  logout: () => void;
  setBroker: (broker: string | null) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      broker: null,
      userData: null,
      login: (payload) => set((state) => ({ ...state, userData: payload })),
      logout: () => set({ userData: null, broker: null }),
      setBroker: (broker) => set((state) => ({ ...state, broker })),
    }),
    { name: "auth-store" }
  )
);
