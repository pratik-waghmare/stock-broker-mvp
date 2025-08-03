import Table from "../../components/Table";
import { holdings, holdingsTableHeaders } from "../../constants/data";

const HoldingsPage = () => {
  return (
    <div className="p-4 md:p-6 w-full max-w-[100dvw] h-[100dvh]">
      <h3 className="text-xl font-semibold mb-4">Holdings</h3>

      <div className="overflow-x-auto">
        <Table headers={holdingsTableHeaders} data={holdings} />
      </div>
    </div>
  );
};

export default HoldingsPage;
