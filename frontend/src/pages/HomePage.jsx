import React, { useEffect } from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";


const HomePage = () => {


  return (
    <div>

{/* <div className="p-5">
        <h2 className="text-2xl font-bold">Counter: {myCounter}</h2>
        <button
          onClick={() => dispatch(include())}
          className="px-4 py-2 bg-green-600 rounded-md mx-2"
        >
          +
        </button>
        <button
          onClick={() => dispatch(declude())}
          className="px-4 py-2 bg-red-600 rounded-md"
        >
          -
        </button>
      </div> */}

        <Header activeHeading={1} />
        <Hero /> 
        <Categories />
        <BestDeals />
        {/* <Events /> */}
        <h2>johfa</h2>
        {/* <FeaturedProduct /> */}
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage