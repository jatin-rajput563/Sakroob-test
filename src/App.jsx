import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoginUp from "./components/LoginUp";
import SignUp from "./components/SignUp";
import HomePage from "./pages/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
      />

      <Route path="/login" element={<LoginUp onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <>
              <HomePage />
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
