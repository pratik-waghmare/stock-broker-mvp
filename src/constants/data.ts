export const brokers = [
  {
    id: "1",
    name: "Zerodha",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/kite.svg",
  },
  {
    id: "2",
    name: "Groww",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/groww.svg",
  },
  {
    id: "3",
    name: "Upstocks",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/upstox.svg",
  },
  {
    id: "4",
    name: "Angel One",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/angelbroking.svg",
  },

  {
    id: "5",
    name: "Kotak Sec",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/kotak.svg",
  },
  {
    id: "6",
    name: "HDFC Sec",
    logo: "https://assets.smallcase.com/smallcase/assets/brokerLogo/small/hdfc.svg",
  },
];

export const holdingsTableHeaders: { label: string; key: string }[] = [
  { label: "Symbol", key: "symbol" },
  { label: "Quantity", key: "quantity" },
  { label: "Avg Buy Price", key: "avgBuyPrice" },
  { label: "Current Price", key: "currentPrice" },
  { label: "Current Value", key: "currentValue" },
  { label: "Invested Amount", key: "investedAmount" },
  { label: "P&L", key: "pnl" },
];

export const holdings = [
  {
    symbol: "TCS",
    quantity: 15,
    avgBuyPrice: 3450,
    currentPrice: 3500,
    investedAmount: 51750,
    currentValue: 52500,
    pnl: 750,
  },
  {
    symbol: "INFY",
    quantity: 20,
    avgBuyPrice: 1450,
    currentPrice: 1400,
    investedAmount: 29000,
    currentValue: 28000,
    pnl: -1000,
  },
  {
    symbol: "RELIANCE",
    quantity: 10,
    avgBuyPrice: 2450,
    currentPrice: 2500,
    investedAmount: 24500,
    currentValue: 25000,
    pnl: 500,
  },
  {
    symbol: "HDFCBANK",
    quantity: 12,
    avgBuyPrice: 1650,
    currentPrice: 1600,
    investedAmount: 19800,
    currentValue: 19200,
    pnl: -600,
  },
  {
    symbol: "SBIN",
    quantity: 30,
    avgBuyPrice: 600,
    currentPrice: 620,
    investedAmount: 18000,
    currentValue: 18600,
    pnl: 600,
  },
  {
    symbol: "ITC",
    quantity: 40,
    avgBuyPrice: 430,
    currentPrice: 425,
    investedAmount: 17200,
    currentValue: 17000,
    pnl: -200,
  },
  {
    symbol: "AXISBANK",
    quantity: 18,
    avgBuyPrice: 900,
    currentPrice: 910,
    investedAmount: 16200,
    currentValue: 16380,
    pnl: 180,
  },
  {
    symbol: "WIPRO",
    quantity: 25,
    avgBuyPrice: 480,
    currentPrice: 470,
    investedAmount: 12000,
    currentValue: 11750,
    pnl: -250,
  },
  {
    symbol: "HCLTECH",
    quantity: 22,
    avgBuyPrice: 1050,
    currentPrice: 1100,
    investedAmount: 23100,
    currentValue: 24200,
    pnl: 1100,
  },
  {
    symbol: "BAJFINANCE",
    quantity: 5,
    avgBuyPrice: 7000,
    currentPrice: 6900,
    investedAmount: 35000,
    currentValue: 34500,
    pnl: -500,
  },
];

export const orderbookHeaders = [
  { label: "Order ID", key: "orderId" },
  { label: "Symbol", key: "symbol" },
  { label: "Action", key: "action" },
  { label: "Quantity", key: "quantity" },
  { label: "Price", key: "price" },
  { label: "Status", key: "status" },
  { label: "Time", key: "time" },
];

export const orderbook = [
  {
    orderId: "ORD123",
    symbol: "RELIANCE",
    action: "BUY",
    quantity: 10,
    price: 2600,
    status: "FILLED",
    time: "2025-08-03 10:30",
  },
  {
    orderId: "ORD124",
    symbol: "HDFC",
    action: "SELL",
    quantity: 5,
    price: 1800,
    status: "PARTIAL",
    time: "2025-08-03 11:00",
  },
];

export const positionsHeaders = [
  { label: "Symbol", key: "symbol" },
  { label: "Quantity", key: "quantity" },
  { label: "Entry Price", key: "entryPrice" },
  { label: "Current Price", key: "currentPrice" },
  { label: "Type", key: "type" },
  {
    label: "P&L",
    key: "pnl",
    customStyle: (value: number) =>
      value < 0 ? "text-red-500" : "text-green-500",
  },
];

export const positions = [
  {
    symbol: "SBIN",
    quantity: 25,
    entryPrice: 570,
    currentPrice: 580,
    type: "LONG",
    pnl: 250,
  },
  {
    symbol: "ITC",
    quantity: 10,
    entryPrice: 450,
    currentPrice: 440,
    type: "SHORT",
    pnl: -100,
  },
];
