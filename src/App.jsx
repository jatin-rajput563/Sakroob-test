import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoginUp from "./components/LoginUp";
import SignUp from "./components/SignUp";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Addtocart from "./components/Addtocart";
import ProductDetail from "./components/ProductDetail";
import CheckOut from "./pages/CheckOut";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loginTime", new Date().toLocaleTimeString());
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/home" /> : <LoginUp onLogin={handleLogin} />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/home" /> : <SignUp />}
      />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/addtocart"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <Addtocart />
              <Footer />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/checkout"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <CheckOut />
              <Footer />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/product/:id"
        element={
          isLoggedIn ? (
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
