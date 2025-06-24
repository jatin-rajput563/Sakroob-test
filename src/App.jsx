import "./App.css";
import Lenis from "lenis";
import Bestseller from "./components/Bestseller";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import PopularProduct from "./components/PopularProduct";
// import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import RoutingTabs from "./components/RoutingTabs";
import Services from "./components/Services";
import SakroobCircle from "./components/SakroobCircle";

const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      {/* <ProductDetail /> */}
      {/* <RoutingTabs /> */}
      {/* <PopularProduct /> */}
      <SakroobCircle />
      <Footer />
    </>
  );
}

export default App;
