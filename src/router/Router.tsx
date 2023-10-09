import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import LayoutWithNavBar from "../components/Layouts/LayoutWithNavBar";
import Chats from "../components/Home/Chats/Chats";
import Rooms from "../components/Home/Rooms/Rooms";
import Friends from "../components/Home/Friends/Friends";
import { useAuth } from "../hooks/useAuth";

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/chats" />}
      />
      <Route
        path="/signup"
        element={!isAuthenticated ? <Signup /> : <Navigate to="/chats" />}
      />

      {/* protected routes */}
      <Route
        path="/*"
        element={
          isAuthenticated ? <LayoutWithNavBar /> : <Navigate to="/login" />
        }
      >
        <Route path="" element={<Home />}>
          <>
            <Route path="chats" element={<Chats />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="friends" element={<Friends />} />
          </>
        </Route>
        {/* Add other routes that should display the NavBar here */}
      </Route>
    </Routes>
  );
};

export default Router;
