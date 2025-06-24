import "./App.css";
import Lenis from "lenis";
import Bestseller from "./components/Bestseller";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Marque from "./components/Marque";
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
      <Marque />
      <Hero />
      <Services />
      <Products />
      <Bestseller />
      <Blog />
      <Footer />
      {/* <ProductDetail />
      <RoutingTabs />
      <PopularProduct /> */}
    </>
  );
}

export default App;
