import Home from "./components/home/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import Nav from "./components/nav/nav";
import { useState,useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("https://back-jade-eight.vercel.app/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Nav user={user}/>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={user?<Navigate to={"/"}/>:<Login />} />
          <Route path="/sign-up" element={user?<Navigate to={"/"}/>:<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
