import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderAction = "SELL" | "BUY" | null;

export type OrderPayload = {
  quantity: number;
  currentPrice: number;
  symbol: string;
} | null;

export type AddOrderPayload = {
  payload: OrderPayload;
  action: OrderAction;
};

type OrderStore = {
  action: OrderAction;
  payload: OrderPayload;
  addOrderPayload: ({ payload, action }: AddOrderPayload) => void;
  deleteOrderPayload: () => void;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      action: null,
      payload: null,
      addOrderPayload: ({ payload, action }) => set({ payload, action }),
      deleteOrderPayload: () => set({ payload: null, action: null }),
    }),
    { name: "order-store" }
  )
);
