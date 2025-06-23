import "./App.css";
import Bestseller from "./components/Bestseller";
import Hero from "./components/Hero";
import PopularProduct from "./components/PopularProduct";
import ProductDetail from "./components/ProductDetail";
import RoutingTabs from "./components/RoutingTabs";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Bestseller />
      <ProductDetail />
      <RoutingTabs />
      <PopularProduct />
    </>
  );
}

export default App;
