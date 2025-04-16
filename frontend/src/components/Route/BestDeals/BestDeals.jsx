// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// const BestDeals = () => {
//   const [data, setData] = useState([]);
//   const { allProducts } = useSelector((state) => state.products);
//   useEffect(() => {
//     const allProductsData = allProducts ? [...allProducts] : [];
//     const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
//     const firstFive = sortedData && sortedData.slice(0, 5);
//     setData(firstFive);
//   }, [allProducts]);
  

//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Best Deals</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//            {
//             data && data.length !== 0 &&(
//               <>
//                {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
//               </>
//             )
//            }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestDeals;




import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {

  // Hardcoded product data
  const data = [
    { _id: "prod-001", name: "Smartphone A1", image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg", ratings: 4.8, originalPrice: 1000, discountPrice: 850, sold_out: 300, stock: 50, shop: { name: "Tech Store", _id: "shop-001" } },
    { _id: "prod-002", name: "Laptop X1", image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg", ratings: 4.6, originalPrice: 1200, discountPrice: 950, sold_out: 200, stock: 40, shop: { name: "Gadget World", _id: "shop-002" } },
    { _id: "prod-003", name: "Wireless Headphones", image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg", ratings: 4.7, originalPrice: 150, discountPrice: 120, sold_out: 500, stock: 100, shop: { name: "Audio Shop", _id: "shop-003" } },
    { _id: "prod-004", name: "Smartwatch Pro", image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg", ratings: 4.5, originalPrice: 350, discountPrice: 250, sold_out: 400, stock: 60, shop: { name: "Wearable Store", _id: "shop-004" } },
    { _id: "prod-005", name: "Gaming Headset", image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg", ratings: 4.9, originalPrice: 100, discountPrice: 80, sold_out: 600, stock: 80, shop: { name: "Gaming Gear", _id: "shop-005" } }
  ];


  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {
            data && data.length !== 0 && (
              <>
                {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
