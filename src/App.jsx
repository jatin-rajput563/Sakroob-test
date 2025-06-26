import "./App.css";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const lenis = new Lenis({ autoRaf: true });
lenis.on("scroll", (e) => {
  console.log(e);
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Function to be passed to Login component
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLoginSuccess} />
      ) : (
        <>
          <HomePage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
