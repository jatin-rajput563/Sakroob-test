import "./App.css";
import Lenis from "lenis";
import Bestseller from "./components/Bestseller";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
// import PopularProduct from "./components/PopularProduct";
// import ProductDetail from "./components/ProductDetail";
// import RoutingTabs from "./components/RoutingTabs";

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
      <Footer />
      {/* <ProductDetail /> */}
      {/* <RoutingTabs /> */}
      {/* <PopularProduct /> */}
    </>
  );
}

export default App;
