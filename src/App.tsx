import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpPage from "./pages/OtpPage";
import ConfirmPay from "./pages/ConfirmPay";
import Validate from "./pages/Validate";
import DetailVenue from "./pages/DetailVenue";
import MyVenue from "./pages/MyVenue";
import AddVenue from "./pages/AddVenue";
import MyTransaction from "./pages/MyTransaction";

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
          <Route path="/mytransaction" element={<MyTransaction />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/detail" element={<DetailVenue />} />
          <Route path="/myvenue" element={<MyVenue />} />
          <Route path="/addvenue" element={<AddVenue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
