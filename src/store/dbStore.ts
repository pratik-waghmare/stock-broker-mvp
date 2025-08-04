import { orderbook } from "@/constants/data";
import type { OrderbookEntry } from "@/constants/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type DbStore = {
  orderbook: OrderbookEntry[];
  addToOrderbook: (order: OrderbookEntry) => void;
};

export const useDbStore = create<DbStore>()(
  persist(
    (set) => ({
      orderbook: orderbook,
      addToOrderbook: (order) =>
        set((state) => ({ ...state, orderbook: [...state.orderbook, order] })),
    }),
    { name: "db-store" }
  )
);
