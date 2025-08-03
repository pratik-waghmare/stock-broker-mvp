import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import HoldingsPage from "./pages/Holdings";
import PositionsPage from "./pages/Positions";
import OrderbookPage from "./pages/Orderbook";
import BottomNavbar from "./components/BottomNavbar";
import Navbar from "./components/Navbar";

// Create a client
const queryClient = new QueryClient();

function App() {
  const { userData } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = userData;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      // loggedin user
      // navigate("/holdings");
    }
  }, [location.pathname]);

  return (
    <div className="mt-[60px]">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/"></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/holdings" element={<HoldingsPage />}></Route>
          <Route path="/positions" element={<PositionsPage />}></Route>
          <Route path="/orderbook" element={<OrderbookPage />}></Route>
        </Routes>
        {isLoggedIn ? (
          <>
            <Navbar />
            <BottomNavbar />
          </>
        ) : (
          <> </>
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
