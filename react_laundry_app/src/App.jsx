import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import "./App.css";
import Orders from "./pages/Orders/Orders";
import ProfileUsers from "./pages/Profile/ProfileUsers";
import NewOrder from "./pages/NewOrder/NewOrder"; // Import NewOrder component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/new' element={<NewOrder />} />
          <Route path='/profile' element={<ProfileUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
