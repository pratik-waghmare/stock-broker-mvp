import { brokers } from "@/constants/data";
import { useAuthStore } from "@/store/authStore";
import { useMemo } from "react";

const useBroker = () => {
  const { setBroker, broker } = useAuthStore();

  const selectedBroker = useMemo(
    () => brokers.find((item) => item.id === broker),
    [broker]
  );

  return { broker, setBroker, selectedBroker };
};

export default useBroker;
