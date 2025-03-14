import Error from "./Error";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import Login from "./Login";
import Page from "./Page";
import Resetpassword from "./Resetpassword";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/page" element={<Page />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
