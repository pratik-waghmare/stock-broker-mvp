import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import HoldingsPage from "./pages/Holdings";
import PositionsPage from "./pages/Positions";
import OrderbookPage from "./pages/Orderbook";
import BottomNavbar from "./components/BottomNavbar";

// Create a client
const queryClient = new QueryClient();

function App() {
  const { userData } = useAuthStore();

  console.log("🚀 ~ App ~ userData:", userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      // loggedin user
      navigate("/holdings");
    } else {
      navigate("/login");
    }
  }, [userData]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/holdings" element={<HoldingsPage />}></Route>
        <Route path="/positions" element={<PositionsPage />}></Route>
        <Route path="/orderbook" element={<OrderbookPage />}></Route>
      </Routes>
      <BottomNavbar />
    </QueryClientProvider>
  );
}

export default App;
