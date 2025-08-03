import { holdings } from "../../constants/data";

const HoldingsPage = () => {
  const holdingsTableHeaders: { label: string; key: string }[] = [
    { label: "Symbol", key: "symbol" },
    { label: "Quantity", key: "quantity" },
    { label: "Avg Buy Price", key: "avgBuyPrice" },
    { label: "Current Price", key: "currentPrice" },
    { label: "Current Value", key: "currentValue" },
    { label: "Invested Amount", key: "investedAmount" },
    { label: "P&L", key: "pnl" },
  ];

  return (
    <div className="p-4 md:p-6 w-full max-w-[100dvw] h-[100dvh]">
      <h3 className="text-xl font-semibold mb-4">Holdings</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-500 font-semibold">
            <tr>
              {holdingsTableHeaders.map((header) => (
                <th
                  key={header.key}
                  className="px-4 py-3 border-b border-gray-200"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <tr
                key={holding.symbol}
                className="hover:bg-gray-50 transition-colors border-b"
              >
                <td className="px-4 py-2">{holding.symbol}</td>
                <td className="px-4 py-2">{holding.quantity}</td>
                <td className="px-4 py-2">₹{holding.avgBuyPrice}</td>
                <td className="px-4 py-2">₹{holding.currentPrice}</td>
                <td className="px-4 py-2">₹{holding.currentValue}</td>
                <td className="px-4 py-2">
                  ₹{holding.investedAmount}
                </td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    holding.pnl >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{holding.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsPage;
