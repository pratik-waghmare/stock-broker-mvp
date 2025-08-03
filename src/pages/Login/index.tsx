import { brokers } from "../../constants/data";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";
import Button from "../../components/Button";
import Card from "../../components/Card";

const LoginUser = z.object({
  username: z.email(),
  password: z.string().nonempty("Password is required"),
});

type LoginUser = z.infer<typeof LoginUser>;

const loginMockApi = async (payload: LoginUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        payload.username === "admin@liquide.com" &&
        payload.password === "liquide-pass"
      ) {
        resolve({
          status: 200,
          data: {
            username: payload.username,
            name: payload.username.split("@")[0],
          },
          message: "Logged in successfully!",
        });
      } else if (payload.username === "scam-admin@liquide.com") {
        reject({ status: 400, message: "Unauthorised" });
      } else {
        reject({ status: 500, message: "Internal server error" });
      }
    }, 1000);
  });
};

const LoginPage = () => {
  const { login, setBroker, broker } = useAuthStore();

  //   const [selectedBroker, setSelectedBroker] = useState("");
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(LoginUser),
  });

  const loginMutation = useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: (data: LoginUser) => loginMockApi(data),
    onSuccess: (res) => {
      login(res?.data);
      console.log(res);

      toast.success(`Logged in successfully!`);
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
    <div className="flex justify-center items-center">
      {!broker ? (
        <Card className="w-[300px] h-[300px]">
          <label className="font-bold mb-4 inline-block">
            Login with broker
          </label>
          <div className="grid grid-cols-3">
            {brokers.map((broker) => (
              <div
                key={broker.id}
                className="flex gap-3 flex-col justify-center items-center h-[100px] w-[100px] cursor-pointer hover:bg-gray-100"
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
            <div className="flex gap-2 items-center">
              <p className="font-semibold text-gray-500">Selected Broker: </p>
              <div className="flex gap-1 items-center">
                <img src={selectedBroker?.logo} className="w-[16px] h-[16px]" />
                <span className="text-[14px] font-semibold text-gray-700">
                  {selectedBroker?.name}
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
