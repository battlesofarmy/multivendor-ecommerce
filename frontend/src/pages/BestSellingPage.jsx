import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";
import { useEffect, useState } from "react";
import api from "../utils/axiosCongif";

const BestSellingPage = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  
  useEffect(()=>{
     api.get("/products//best-selling")
     .then((res)=> setBestSellingProducts(res.data))
     .catch((err)=> console.log(err))
  },[])
  
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <div>
          <Header activeHeading={2} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {bestSellingProducts?.length === 0 ? (
                <p className="text-center w-full">No products found.</p>
              ) : (
                bestSellingProducts?.map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))
              )}
            </div>
          </div>
          <Footer />
        </div>
      {/* )} */}
    </>
  );
};

export default BestSellingPage;
