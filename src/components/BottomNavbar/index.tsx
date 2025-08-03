import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const routes = [
    { path: "/holdings", title: "Holdings" },
    { path: "/orderbook", title: "Order Book" },
    { path: "/positions", title: "Positions" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-[100dvw] flex inset-shadow-sm">
      {routes.map((route) => (
        <div
          key={route.path}
          className={cn(
            "text-[14px] md:text-[16px] flex-1 h-[50px] md:h-[50px] flex justify-center items-center cursor-pointer font-normal",
            `${pathname === route.path ? "font-semibold" : "bg-gray-50"}`
          )}
          onClick={() => {
            navigate(route.path);
          }}
        >
          {route.title}
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;
