import React, { useEffect, useState } from "react";
import Marque from "../components/Marque";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Bestseller from "../components/Bestseller";
import Blog from "../components/Blog";
import OurClients from "../components/OurClients";
import SakroobCircle from "../components/SakroobCircle";
import Products from "../components/Products";
import Header from "../components/Header";

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
      <div className="text-center text-sm bg-[#e6f2f1] py-2 text-[#112D49] font-medium">
        {loginTime && `🕒 Logged in at: ${loginTime}`}
      </div>
      <Header />
      <Marque />
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      <Blog />
      <OurClients />
      <SakroobCircle />
    </div>
  );
};

export default HomePage;
