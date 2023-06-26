import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpPage from "./pages/OtpPage";
import ConfirmPay from "./pages/ConfirmPay";
import Validate from "./pages/Validate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/confirmpay" element={<ConfirmPay />} />
          <Route path="/validate" element={<Validate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
