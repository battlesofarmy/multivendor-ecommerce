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
  {
    "_id": "68033bd678d08ebe0cecd328",
    "soldOut": "0",
    "createdAt": "2025-04-19T00:26:20.254Z",
    "name": "Dell XPS 13 Laptop",
    "category": "Accesories",
    "description": "Experience the power of the Dell XPS 13 with its sleek design and high-performance capabilities.",
    "originalPrice": "1200",
    "discountPrice": "999",
    "stock": 25,
    "ratings": 5,
    "images": [
      {
        "_id": "68033d8625ac685c51b86cc0",
        "url": "https://rang-bd.com/wp-content/uploads/2024/06/NKM-JWY-00060-3-595x595.webp"
      },
      {
        "_id": "68033d8625ac685c51b86cc1",
        "url": "https://rang-bd.com/wp-content/uploads/2024/06/NKM-JWY-00060-1-scaled.webp"
      }
    ],
    "reviews": [
      {
        "user": {
          "avatar": {
            "url": "https://avatars.githubusercontent.com/u/155252694?v=4"
          },
          "name": "Hank"
        },
        "_id": "680335c9ee728686f727812f",
        "rating": 5,
        "comment": "Exceptional performance and build quality."
      }
    ],
    "shop": {
      "_id": "shop123",
      "name": "NewMarket",
      "avatar": {
        "url": "https://avatars.githubusercontent.com/u/155252694?v=4"
      },
      "description": "Selling high-tech electronics since 2020.",
      "createdAt": "2022-01-01T00:00:00Z"
    }
  }
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
