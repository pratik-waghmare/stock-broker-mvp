// @ts-nocheck
import { brokers } from "../../constants/data";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import {
  loginMockApi,
  loginUserSchema,
  type LoginUser,
} from "../../services/authService";
import { useEffect } from "react";

const LoginPage = () => {
  const { login, setBroker, broker, userData } = useAuthStore();
  const navigate = useNavigate();

  const isLoggedIn = userData;

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/holdings");
    }
  }, []);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const loginMutation = useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: (data: LoginUser) => loginMockApi(data),
    onSuccess: (res) => {
      login(res?.data);

      toast.success(`Logged in successfully!`);
      navigate("/holdings");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to login!");
    },
  });

  const { isPending } = loginMutation;

  const onLogin = (data: LoginUser) => {
    // console.log("data: ", data);
    loginMutation.mutate(data);
  };

  //   console.log("errors: ", errors);

  const selectedBroker = brokers.find((item) => item.id === broker);

  return (
    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center">
      {!broker ? (
        <Card className="w-[300px] h-[300px]">
          <label className="font-bold mb-4 inline-block">
            Login with broker
          </label>
          <div className="grid gap-3 grid-cols-3">
            {brokers.map((broker) => (
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
            ))}
          </div>
        </Card>
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
            <Button disabled={isPending} label={"Login"} />
          </form>
        </Card>
      )}
    </div>
  );
};

export default LoginPage;
