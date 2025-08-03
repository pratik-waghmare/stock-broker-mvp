import Table from "../../components/Table";
import { positions, positionsHeaders } from "../../constants/data";

const PositionsPage = () => {
  return (
    <div className="p-4 md:p-6 w-full max-w-[100dvw] h-[100dvh]">
      <h3 className="text-xl font-semibold mb-4">Positions</h3>

      <div className="overflow-x-auto">
        <Table headers={positionsHeaders} data={positions} />
      </div>
    </div>
  );
};

export default PositionsPage;
