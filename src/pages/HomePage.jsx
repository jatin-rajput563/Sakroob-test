import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Bestseller from "../components/Bestseller";
import OurClients from "../components/OurClients";
import SakroobCircle from "../components/SakroobCircle";
import Products from "../components/Products";
import HeroTopSlider from "../components/HeroTopSlider";
import GuidesBlog from "../components/GuidesBlog";

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
      <HeroTopSlider />
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      <GuidesBlog />
      <OurClients />
      <SakroobCircle />
    </div>
  );
};

export default HomePage;
