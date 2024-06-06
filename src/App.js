import Home from "./components/home/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import About from "./components/about-us/about";
import Profile from "./components/profile/profile";
import Nav from "./components/nav/nav";
import HouseDatils from "./components/cards/houseDatils";
import CarsDatils from "./components/cards/carDatils";
import { useState, useEffect } from "react";
import Loding from "./components/loding/loding";
import axios from "axios";

function App() {
  const [user, setUser] = useState({ user: null, isLoding: true });
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://back-jade-eight.vercel.app/auth/login/success",
          { withCredentials: true }
        );

        if (response.status === 200) {
          const resObject = await response.json();
          setUser({ user: resObject.user, isLoding: false });
        } else {
          throw new Error("Authentication has failed!");
        }
      } catch (err) {
        console.log(err);
        setUser({ user: null, isLoding: false });
      }
    };

    getUser();
  }, []);
  console.log(user);
  return (
    <BrowserRouter>
      <div>
        <Nav user={user.user} />
        <Routes>
          <Route path="/" element={<Home user={user.user} />} />
          <Route path="/about-us" element={<About user={user.user} />} />
          <Route
            path="/login"
            element={user.user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/house/:id"
            element={user.user ? <HouseDatils /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/car/:id"
            element={user.user ? <CarsDatils /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile"
            element={
              user.isLoding ? (
                <Loding />
              ) : user.user ? (
                <Profile user={user.user} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/sign-up"
            element={user ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
