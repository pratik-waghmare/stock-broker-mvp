import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
