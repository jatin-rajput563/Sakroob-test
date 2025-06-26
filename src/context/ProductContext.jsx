import React, { createContext, useState } from "react";
import RouterImg from "../assets/images/png/product-router-img.png"; // your router image

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "D-Link ADSL Wireless Router DSL2790U",
      description:
        "High-speed ADSL2+ wireless router with up to 300 Mbps speed. Includes 4 Ethernet ports, strong security, and guest network support.",
      price: 1495,
      image: RouterImg,
    },
    {
      id: 2,
      name: "TP-Link Archer C6 Gigabit Router",
      description:
        "Dual-band Wi-Fi with MU-MIMO, four Gigabit LAN ports, and good coverage — ideal for HD streaming and online gaming.",
      price: 2199,
      image: RouterImg,
    },
    {
      id: 3,
      name: "Netgear Nighthawk R7000",
      description:
        "Dual-core processor, Beamforming+, Dynamic QoS — best for advanced users needing stable and fast connections.",
      price: 4999,
      image: RouterImg,
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
