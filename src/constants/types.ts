export type Headers = { label: string; key: string };

export type Holding = {
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  investedAmount: number;
  currentValue: number;
  pnl: number;
};

export type OrderAction = "BUY" | "SELL";
export type OrderStatus = "FILLED" | "PARTIAL" | "PENDING" | "CANCELLED";

export type OrderbookEntry = {
  broker: "NSE" | "BSE";
  orderId: string;
  symbol: string;
  action: OrderAction;
  quantity: number;
  price: number;
  status: OrderStatus;
  time: string; // ISO string or formatted date string
};

export type PositionType = "LONG" | "SHORT";

export type Position = {
  symbol: string;
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  type: PositionType;
  pnl: number;
};
