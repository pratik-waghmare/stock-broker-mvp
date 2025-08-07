import React, { useEffect, useState } from "react";
import Card from "../Card";
import { type Broker } from "@/constants/data";
import { Skeleton } from "../ui/skeleton";

interface BrokerFormProps {
  brokers: Broker[];
  setBroker: (value: string) => void;
}

const BrokerForm: React.FC<BrokerFormProps> = React.memo(
  ({ brokers, setBroker }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      console.log("render");
      // delayed response this is like dummy api call
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <Card className="w-[300px] h-[300px]">
        <label className="font-bold mb-4 inline-block">Login with broker</label>
        <div className="grid gap-3 grid-cols-3">
          {!isLoading
            ? brokers.map((broker) => (
                <div
                  key={broker.id}
                  className="flex-1 flex gap-3 flex-col justify-center items-center h-[100px] cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setBroker(broker.id);
                  }}
                >
                  <div className="w-[40px] h-[40px] flex justify-center items-center">
                    <img
                      src={broker.logo}
                      alt={broker.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[14px] font-semibold text-gray-600">
                    {broker.name}
                  </p>
                </div>
              ))
            : Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex gap-3 flex-col justify-center items-center h-[100px] cursor-pointer"
                >
                  <Skeleton className="w-[40px] h-[40px] flex justify-center items-center">
                    <Skeleton className="w-full h-full object-contain" />
                  </Skeleton>
                  <Skeleton className="h-[10px] w-[60px] text-[14px] font-semibold text-gray-600" />
                </div>
              ))}
        </div>
      </Card>
    );
  }
);

export default BrokerForm;
