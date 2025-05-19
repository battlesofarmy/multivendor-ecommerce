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
import api from "../../utils/axiosCongif";

const ShopInfo = ({ isOwner, id }) => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]); // Hardcoded product data
  const [isLoading, setIsLoading] = useState(false);


   const [shopDetails, setShopDetails] = useState([]);


  useEffect(() => {
    setIsLoading(true);

    // Hardcoded shop data
    // const mockShopData = {
    //   avatar: { url: "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A" },
    //   name: "TechZone",
    //   description: "Best electronics shop in town.",
    //   address: "123 Tech Street, Silicon Valley",
    //   phoneNumber: "+1234567890",
    //   createdAt: "2022-01-01T00:00:00Z"
    // };

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

     api.get(`/user/${id}`)
    .then((res)=>{
      setShopDetails(res.data)
      console.log(res.data)
    })
    .catch((err)=> console.log(err));

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
