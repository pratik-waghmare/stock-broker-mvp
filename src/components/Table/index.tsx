// @ts-nocheck
import { useState } from "react";
import { cn } from "../../utils/cn";
import { MoveDown, MoveUp } from "lucide-react";
import type { Headers } from "../../constants/types";

const Table = ({ headers, data }: { headers: Headers[]; data: object[] }) => {
  const keys = Object.keys(data[0]);

  const [sortDirection, setSortDirection] = useState<string>("asc");
  const [sortKey, setSortKey] = useState<string>("");

  const currData = data.sort((a, b) => {
    if (!sortKey) return 0;

    return sortDirection === "asc"
      ? a[sortKey] - b[sortKey]
      : b[sortKey] - a[sortKey];
  });

  return (
    <table className="min-w-full border border-gray-200 text-sm text-left">
      <thead className="bg-gray-100 text-gray-500 font-semibold">
        <tr>
          {headers.map((header) => (
            <th
              key={header.key}
              className="px-2 py-3 md:px-4 md:py-3 border-b border-gray-200 cursor-pointer text-[12px] md:text-[14px]"
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
      <tbody>
        {currData.map((row) => {
          return (
            <tr
              key={row[0]}
              className="hover:bg-gray-50 transition-colors shadow-sm"
            >
              {keys.map((key) => {
                return (
                  <td
                    className={cn(
                      "w-max px-2 py-3 md:px-4 md:py-2 text-[12px] md:text-[14px]",
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
                    {row[key]}
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

export default Table;
