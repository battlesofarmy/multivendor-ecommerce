import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";
import api from "../utils/axiosCongif";

const ProductDetailsPage = () => {
  // const { allProducts } = useSelector((state) => state.products);
  // const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(()=>{
    api.get(`/products/${id}`)
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])




  // const [searchParams] = useSearchParams();
  // const eventData = searchParams.get("isEvent");

  // useEffect(() => {
  //   if (eventData !== null) {
  //     const data = allEvents && allEvents.find((i) => i._id === id);
  //     setData(data);
  //   } else {
  //     const data = allProducts && allProducts.find((i) => i._id === id);
  //     setData(data);
  //   }
  // }, [allProducts, allEvents]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
        {/* {
          !eventData && (
            <>
            {data && <SuggestedProduct data={data} />}
            </>
          )
        } */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;



