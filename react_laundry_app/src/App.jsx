import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import "./App.css";
import Orders from "./pages/Orders/Orders";
import ProfileUsers from "./pages/Profile/ProfileUsers";
import NewOrder from "./pages/NewOrder/NewOrder"; // Import NewOrder component
import { AuthProvider } from "./context/auth";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="/orders" element={<ProtectedRoutes><Orders /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><ProfileUsers /></ProtectedRoutes>} />
          <Route path="/orders/new" element={<ProtectedRoutes><NewOrder /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
