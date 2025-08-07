// @ts-nocheck
import {
  loginMockApi,
  loginUserSchema,
  type LoginUser,
} from "@/services/authService";
import { useAuthStore } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const { login, userData } = useAuthStore();

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
    loginMutation.mutate(data);
  };

  return { errors, register, handleSubmit, isPending, userData, onLogin };
};

export default useLogin;
