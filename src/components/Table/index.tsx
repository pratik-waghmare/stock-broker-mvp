// @ts-nocheck
import { useState } from "react";
import { cn } from "../../utils/cn";
import { MoveDown, MoveUp, EllipsisVertical } from "lucide-react";
import type { Headers } from "../../constants/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useOrderStore } from "@/store/orderStore";

const Table = ({ headers, data }: { headers: Headers[]; data: object[] }) => {
  const { addOrderPayload } = useOrderStore();

  const keys = Object.keys(data[0]);

  const [sortDirection, setSortDirection] = useState<string>("asc");
  const [sortKey, setSortKey] = useState<string>("");

  const currData = data.sort((a, b) => {
    if (!sortKey) return 0;

    return sortDirection === "asc"
      ? a[sortKey] - b[sortKey]
      : b[sortKey] - a[sortKey];
  });

  const TableButton = ({ children, className, onClick }) => {
    return (
      <div
        className={cn(
          "py-1 px-4 flex-1 flex justify-center items-center cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  };

  return (
    <table className="min-w-full border border-gray-200 text-sm text-left">
      <thead className="bg-gray-100 text-gray-500 font-semibold">
        <tr>
          {headers.map((header) => (
            <th
              key={header.key}
              className="px-2 py-3 md:px-3 md:py-3 border-b border-gray-200 cursor-pointer text-[12px] md:text-[14px]"
              onClick={() => {
                setSortKey(header.key);
                setSortDirection(sortDirection === "asc" ? "des" : "asc");
              }}
            >
              <div className="w-max flex items-center">
                <span>{header.label}</span>
                <span>
                  {header.key === sortKey ? (
                    sortDirection === "asc" ? (
                      <MoveDown className="h-[14px] w-[14px]" />
                    ) : (
                      <MoveUp className="h-[14px] w-[14px]" />
                    )
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-y-auto max-h-[calc(100dvh-150px)]">
        {currData.map((row) => {
          return (
            <tr
              key={row.id}
              className="hover:bg-gray-50 transition-colors shadow-sm"
            >
              {keys.map((key) => {
                return (
                  <td
                    className={cn(
                      "w-max px-2 py-3 md:px-3 md:py-2 text-[12px] md:text-[14px]",
                      `${
                        key === "pnl"
                          ? row[key] > 0
                            ? "text-green-500"
                            : "text-red-500"
                          : ""
                      }`
                    )}
                    key={key}
                  >
                    {key === "pnl" ? (
                      <div className="relative flex gap-x-2 justify-between">
                        <p>{row[key]}</p>
                        <DropdownMenu className="">
                          <DropdownMenuTrigger className="outline-none">
                            <EllipsisVertical className="h-[16px] text-gray-500 cursor-pointer" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="flex p-0 m-0"
                          >
                            <TableButton
                              className="hover:bg-red-100"
                              onClick={() =>
                                addOrderPayload({
                                  payload: {
                                    quantity: row["quantity"],
                                    symbol: row["symbol"],
                                    currentPrice: row["currentPrice"],
                                  },
                                  action: "SELL",
                                })
                              }
                            >
                              Sell
                            </TableButton>
                            <TableButton
                              className="hover:bg-green-100"
                              onClick={() =>
                                addOrderPayload({
                                  payload: {
                                    quantity: 1,
                                    symbol: row["symbol"],
                                    currentPrice: row["currentPrice"],
                                  },
                                  action: "BUY",
                                })
                              }
                            >
                              Buy
                            </TableButton>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ) : (
                      row[key]
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const TableSkeleton = ({
  rows = 10,
  columns = 7,
}: {
  rows?: number;
  columns?: number;
}) => {
  return (
    <div className="min-w-full border border-gray-200 text-sm text-left animate-pulse">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-500 font-semibold">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th
                key={i}
                className="px-2 py-3 md:px-3 md:py-3 border-b border-gray-200"
              >
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-gray-50 transition-colors shadow-sm"
            >
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="px-2 py-3 md:px-3 md:py-2 border-b">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
