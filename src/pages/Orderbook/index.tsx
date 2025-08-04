import { useDbStore } from "@/store/dbStore";
import Table from "../../components/Table";
import { orderbookHeaders } from "../../constants/data";

const OrderbookPage = () => {
  const { orderbook } = useDbStore();
  
  return (
    <div className="p-4 md:p-6 w-full max-w-[100dvw] h-[100dvh]">
      <h3 className="text-xl font-semibold mb-4">Order Book</h3>

      <div className="overflow-x-auto">
        <Table headers={orderbookHeaders} data={orderbook} />
      </div>
    </div>
  );
};

export default OrderbookPage;
