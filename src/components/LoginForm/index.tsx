import Card from "../Card";
import Input from "../Input/Input";
import useBroker from "@/hooks/useBroker";
import useLogin from "@/hooks/useLogin";
import { Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";
import BrokerForm from "./BrokerForm";
import { brokers } from "@/constants/data";

const LoginForm = () => {
  const { setBroker, selectedBroker, broker } = useBroker();
  const { handleSubmit, onLogin, register, isPending, errors } = useLogin();

  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      {!broker ? (
        <BrokerForm brokers={brokers} setBroker={setBroker} />
      ) : (
        <Card className="w-[300px] min-h-[300px]">
          <form className="w-full" onSubmit={handleSubmit(onLogin)}>
            <div className="flex gap-2 items-center my-2">
              <p className="font-semibold text-gray-500 text-[14px]">
                Selected Broker:{" "}
              </p>
              <div className="flex gap-1 items-center">
                <img src={selectedBroker?.logo} className="w-[16px] h-[16px]" />
                <span className="text-[14px] font-semibold text-gray-700">
                  {selectedBroker?.name}
                </span>
                <span
                  className="underline text-blue-500 hover:text-blue-800 text-[12px] cursor-pointer font-semibold"
                  onClick={() => {
                    setBroker(null);
                  }}
                >
                  Change
                </span>
              </div>
            </div>
            <Input
              type="text"
              id="username"
              label="Username or Email"
              register={register("username")}
              error={errors?.["username"]?.message}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              register={register("password")}
              error={errors?.["password"]?.message}
            />
            <Button
              disabled={isPending}
              className="w-full bg-indigo-950 text-white mt-3"
            >
              {isPending ? (
                <>
                  <Loader2Icon className="animate-spin" />
                  <>Logging in</>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default LoginForm;
