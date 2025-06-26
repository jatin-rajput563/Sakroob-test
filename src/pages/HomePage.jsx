import React, { useEffect, useState } from "react";
import Marque from "../components/Marque";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Bestseller from "../components/Bestseller";
import Blog from "../components/Blog";
import OurClients from "../components/OurClients";
import SakroobCircle from "../components/SakroobCircle";
import Products from "../components/Products";
import BackToTop from "../components/common/BackToTop";

const HomePage = () => {
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    const time = localStorage.getItem("loginTime");
    if (time) {
      setLoginTime(time);
    }
  }, []);

  return (
    <div>
      <Marque />
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      <Blog />
      <OurClients />
      <SakroobCircle />
      <BackToTop />
    </div>
  );
};

export default HomePage;
