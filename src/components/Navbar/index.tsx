import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Button from "../Button";

const Navbar = () => {
  const { logout, userData } = useAuthStore();
  const navigate = useNavigate();

  return userData ? (
    <div className="fixed h-[60px] top-0 left-0 flex justify-between items-center w-[100dvw] px-4 shadow-md bg-white">
      <div>Hello, {userData?.name}</div>
      <div className="flex items-center">
        <Button
          label="Logout"
          className=" bg-red-400 m-0 p-0 py-2 px-3 text-[12px]"
          onClick={() => {
            logout();
            navigate('/');
          }}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Navbar;
