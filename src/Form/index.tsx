// @ts-nocheck
import Draggable from "react-draggable";
import { useEffect, useRef } from "react";
import Card from "@/components/Card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useOrderStore, type AddOrderPayload } from "@/store/orderStore";
import { useDbStore } from "@/store/dbStore";
import { useNavigate } from "react-router-dom";

const orderFormSchema = z.object({
  symbol: z.string(),
  broker: z.enum(["NSE", "BSE"]).default("NSE"),
  quantity: z.coerce.number().positive(),
  currentPrice: z.coerce.number().positive(),
});

type OrderForm = z.infer<typeof orderFormSchema>;

const DraggableForm = ({ action, payload }: AddOrderPayload) => {
  const navigate = useNavigate();

  const nodeRef = useRef(null);

  const { addToOrderbook } = useDbStore();
  const { deleteOrderPayload } = useOrderStore();

  const isSellOrder = action === "SELL";

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderFormSchema),
  });

  const requiredAmount = getValues("quantity") * getValues("currentPrice");

  useEffect(() => {
    if (payload) {
      reset(payload);
    }
  }, [payload]);

  const onSubmitOrder = (data: OrderForm) => {
    if (action) {
      const payload = {
        ...data,
        action,
        orderId: "ORD" + Date.now().toString(),
        price: data.currentPrice,
        status: "PENDING",
        time: new Date().toLocaleString(),
      };

      addToOrderbook(payload);
      deleteOrderPayload();
      navigate("/orderbook");
    }
  };

  if (action === null) {
    return <></>;
  }

  return (
    <Draggable handle=".drag-handle" nodeRef={nodeRef}>
      <div ref={nodeRef} className="fixed bottom-0 right-0 md:right-20 z-50">
        <Card className="p-0 bg-white rounded-[8px] overflow-auto">
          <form onSubmit={handleSubmit(onSubmitOrder)} className="w-[100dvw] md:w-auto md:min-w-[300px]">
            <div
              className={cn(
                "drag-handle cursor-move w-full py-2 px-5 border-[1px] rounded-t-[8px] bg-gray-50",
                `${
                  isSellOrder
                    ? "border-red-300 bg-red-50"
                    : "border-green-300 bg-green-50"
                }`
              )}
            >
              <p>{payload?.symbol}</p>
              <RadioGroup
                defaultValue="NSE"
                className="flex gap-4 text-[14px] mt-3"
                {...register("broker")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NSE" id="nse" />
                  <Label htmlFor="nse">NSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="BSE" id="bse" />
                  <Label htmlFor="bse">BSE</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="p-4 flex flex-col gap-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="number" id="quantity" {...register("quantity")} />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label htmlFor="market-price">Market Price</Label>
                <Input
                  type="number"
                  id="market-price"
                  {...register("currentPrice")}
                />
              </div>
              <div className="text-[12px]">
                <span>Req. </span>
                <span className="text-blue-500">{requiredAmount}</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <Button
                  className={cn(
                    "w-full",
                    `${
                      isSellOrder
                        ? "bg-red-400 hover:bg-red-500"
                        : "bg-green-600 hover:bg-green-700"
                    }`
                  )}
                  type="submit"
                >
                  {isSellOrder ? "Sell" : "Buy"}
                </Button>
                <Button
                  className="w-full"
                  variant={"outline"}
                  type="button"
                  onClick={() => {
                    deleteOrderPayload();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </Draggable>
  );
};

export default DraggableForm;
