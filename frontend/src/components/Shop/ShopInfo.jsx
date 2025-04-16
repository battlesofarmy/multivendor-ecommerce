// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { server } from "../../server";
// import styles from "../../styles/styles";
// import Loader from "../Layout/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProductsShop } from "../../redux/actions/product";

// const ShopInfo = ({ isOwner }) => {
//   const [data,setData] = useState({});
//   const {products} = useSelector((state) => state.products);
//   const [isLoading,setIsLoading] = useState(false);
//   const {id} = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProductsShop(id));
//     setIsLoading(true);
//     axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
//      setData(res.data.shop);
//      setIsLoading(false);
//     }).catch((error) => {
//       console.log(error);
//       setIsLoading(false);
//     })
//   }, [])
  

//   const logoutHandler = async () => {
//     axios.get(`${server}/shop/logout`,{
//       withCredentials: true,
//     });
//     window.location.reload();
//   };

//   const totalReviewsLength =
//     products &&
//     products.reduce((acc, product) => acc + product.reviews.length, 0);

//   const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

//   const averageRating = totalRatings / totalReviewsLength || 0;

//   return (
//    <>
//    {
//     isLoading  ? (
//       <Loader />
//     ) : (
//       <div>
//       <div className="w-full py-5">
//         <div className="w-full flex item-center justify-center">
//           <img
//             src={`${data.avatar?.url}`}
//             alt=""
//             className="w-[150px] h-[150px] object-cover rounded-full"
//           />
//         </div>
//         <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {data.description}
//         </p>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{data.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Products</h5>
//         <h4 className="text-[#000000a6]">{products && products.length}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Shop Ratings</h5>
//         <h4 className="text-[#000000b0]">{averageRating}/5</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined On</h5>
//         <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
//       </div>
//       {isOwner && (
//         <div className="py-3 px-4">
//            <Link to="/settings">
//            <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
//             <span className="text-white">Edit Shop</span>
//           </div>
//            </Link>
//           <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
//           onClick={logoutHandler}
//           >
//             <span className="text-white">Log Out</span>
//           </div>
//         </div>
//       )}
//     </div>
//     )
//    }
//    </>
//   );
// };

// export default ShopInfo;



import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]); // Hardcoded product data
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    // Hardcoded shop data
    const mockShopData = {
      avatar: { url: "https://avatars.githubusercontent.com/u/155252694?v=4" },
      name: "TechZone",
      description: "Best electronics shop in town.",
      address: "123 Tech Street, Silicon Valley",
      phoneNumber: "+1234567890",
      createdAt: "2022-01-01T00:00:00Z"
    };

    // Hardcoded products data
    const mockProductsData = [
      {
        id: "1",
        name: "Wireless Bluetooth Headphones",
        reviews: [
          { rating: 5, comment: "Great sound quality!" },
          { rating: 4, comment: "Very comfortable." }
        ]
      },
      {
        id: "2",
        name: "Smartphone",
        reviews: [
          { rating: 4, comment: "Good battery life." },
          { rating: 3, comment: "Average camera quality." }
        ]
      }
    ];

    setData(mockShopData);
    setProducts(mockProductsData);
    setIsLoading(false);
  }, []);

  const logoutHandler = async () => {
    // Simulate logout
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar?.url}`}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{data.address}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000a6]">{products && products.length}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className="text-[#000000b0]">{averageRating}/5</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                  <span className="text-white">Edit Shop</span>
                </div>
              </Link>
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
