// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import Table, { TableSkeleton } from "../../components/Table";
import { holdingsTableHeaders } from "../../constants/data";
import { holdingsMockApi } from "@/services/authService";

const HoldingsPage = () => {
  const fetchHoldings = useQuery({
    queryKey: ["FETCH_HOLDINGS"],
    queryFn: () => holdingsMockApi(),
  });

  const { isLoading, data } = fetchHoldings;

  return (
    <div className="p-4 md:p-6 w-full max-w-[100dvw] h-[100dvh]">
      <h3 className="text-xl font-semibold mb-4">Holdings</h3>

      <div className="overflow-x-auto">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table headers={holdingsTableHeaders} data={data?.data?.holdings} />
        )}
      </div>
    </div>
  );
};

export default HoldingsPage;
