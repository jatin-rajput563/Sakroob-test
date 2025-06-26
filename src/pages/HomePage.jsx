import React from 'react'
import Marque from '../components/Marque'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Bestseller from '../components/Bestseller'
import Blog from '../components/Blog'
import OurClients from '../components/OurClients'
import ProductDetail from '../components/ProductDetail'
import RoutingTabs from '../components/RoutingTabs'
import PopularProduct from '../components/PopularProduct'
import SakroobCircle from '../components/SakroobCircle'
import Products from '../components/Products'

const HomePage = () => {
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
    </div>
  )
}

export default HomePage
