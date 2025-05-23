// import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { useEffect, useState } from "react";
import api from "../utils/axiosCongif";
import { useLocation } from "react-router-dom";

const ProductsPage = () => { 
  const location = useLocation();

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    api.get(`/products${location.search}`)
    .then(res=> setProducts(res.data))
    .catch(err=> console.log(err.message));
  },[location])


  // const [searchParams] = useSearchParams();
  // const categoryData = searchParams.get("category");
  // const {allProducts,isLoading} = useSelector((state) => state.products);
  const {isLoading} = useSelector((state) => state.products);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (categoryData === null) {
  //     const d = allProducts;
  //     setData(d);
  //   } else {
  //     const d =
  //     allProducts && allProducts.filter((i) => i.category === categoryData);
  //     setData(d);
  //   }
  //   //    window.scrollTo(0,0);
  // }, [allProducts]);

  return (
  <>
  {
    // isLoading ? (
    //   <Loader />
    // ) : (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {products?.map((ele, i) => <ProductCard data={ele} key={i} />)}
        </div>
        {products?.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
    // )
  }
  </>
  );
};

export default ProductsPage;
