import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
// import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar/NavBar";

const Router = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} index />
        </Routes>
      </main>
    </>
  );
};

export default Router;
