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

export const positions = [
  {
    symbol: "SBIN",
    quantity: 25,
    entryPrice: 570,
    currentPrice: 580,
    pnl: 250,
    type: "LONG",
  },
  {
    symbol: "ITC",
    quantity: 10,
    entryPrice: 450,
    currentPrice: 440,
    pnl: -100,
    type: "SHORT",
  },
];
