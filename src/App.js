import Home from "./components/home/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import About from "./components/about-us/about";
import Profile from "./components/profile/profile";
import Nav from "./components/nav/nav";
import HouseDatils from "./components/cards/houseDatils";
import CarsDatils from "./components/cards/carDatils";
import { useState, useEffect, } from "react";
import Footer from "./components/footer/footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/auth/login/success",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );

        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
        } else {
          throw new Error("Authentication has failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);
console.log(user)
  return (
    <BrowserRouter>
      <div>
        <Nav user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about-us" element={<About user={user} />} />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/house/:id"
            element={user ? <HouseDatils /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/car/:id"
            element={user ? <CarsDatils /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile"
            element={
              user ? <Profile user={user} /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/sign-up"
            element={user ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
