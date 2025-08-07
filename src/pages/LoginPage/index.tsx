import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const { userData } = useAuthStore();

  const isLoggedIn = userData;

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/holdings");
    }
  }, []);

  return <LoginForm />;
};

export default LoginPage;
