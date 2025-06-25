import "./App.css";
import Lenis from "lenis";
import SignUp from "./components/SignUp";
import LoginUp from "./components/LoginUp";
// import CheckOut from "./components/pages/CheckOut";
// import Login from "./components/pages/Login";
// import Bestseller from "./components/Bestseller";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
// import Services from "./components/Services";
// import Blog from "./components/Blog";
// import OurClients from "./components/OurClients";
// import Marque from "./components/Marque";
// import PopularProduct from "./components/PopularProduct";
// import ProductDetail from "./components/ProductDetail";
// import RoutingTabs from "./components/RoutingTabs";
// import SakroobCircle from "./components/SakroobCircle";

const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});

function App() {
  return (
    <>
      <SignUp />
      <LoginUp />
      {/* <Login /> */}
      {/* <Marque />
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      <Blog />
      <OurClients />
      <ProductDetail />
      <RoutingTabs />
      <PopularProduct /> */}
      {/* <CheckOut /> */}
      {/* <SakroobCircle /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
