// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import styles from "../../styles/styles";
// import ProductCard from "../Route/ProductCard/ProductCard";
// import Ratings from "../Products/Ratings";
// import { getAllEventsShop } from "../../redux/actions/event";

// const ShopProfileData = ({ isOwner }) => {
//   const { products } = useSelector((state) => state.products);
//   const { events } = useSelector((state) => state.events);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProductsShop(id));
//     dispatch(getAllEventsShop(id));
//   }, [dispatch]);

//   const [active, setActive] = useState(1);

//   const allReviews =
//     products && products.map((product) => product.reviews).flat();

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <div className="w-full flex">
//           <div className="flex items-center" onClick={() => setActive(1)}>
//             <h5
//               className={`font-[600] text-[20px] ${
//                 active === 1 ? "text-red-500" : "text-[#333]"
//               } cursor-pointer pr-[20px]`}
//             >
//               Shop Products
//             </h5>
//           </div>
//           <div className="flex items-center" onClick={() => setActive(2)}>
//             <h5
//               className={`font-[600] text-[20px] ${
//                 active === 2 ? "text-red-500" : "text-[#333]"
//               } cursor-pointer pr-[20px]`}
//             >
//               Running Events
//             </h5>
//           </div>

//           <div className="flex items-center" onClick={() => setActive(3)}>
//             <h5
//               className={`font-[600] text-[20px] ${
//                 active === 3 ? "text-red-500" : "text-[#333]"
//               } cursor-pointer pr-[20px]`}
//             >
//               Shop Reviews
//             </h5>
//           </div>
//         </div>
//         <div>
//           {isOwner && (
//             <div>
//               <Link to="/dashboard">
//                 <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
//                   <span className="text-[#fff]">Go Dashboard</span>
//                 </div>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       <br />
//       {active === 1 && (
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
//           {products &&
//             products.map((i, index) => (
//               <ProductCard data={i} key={index} isShop={true} />
//             ))}
//         </div>
//       )}

//       {active === 2 && (
//         <div className="w-full">
//           <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
//             {events &&
//               events.map((i, index) => (
//                 <ProductCard
//                   data={i}
//                   key={index}
//                   isShop={true}
//                   isEvent={true}
//                 />
//               ))}
//           </div>
//           {events && events.length === 0 && (
//             <h5 className="w-full text-center py-5 text-[18px]">
//               No Events have for this shop!
//             </h5>
//           )}
//         </div>
//       )}

//       {active === 3 && (
//         <div className="w-full">
//           {allReviews &&
//             allReviews.map((item, index) => (
//               <div className="w-full flex my-4">
//                 <img
//                   src={`${item.user.avatar?.url}`}
//                   className="w-[50px] h-[50px] rounded-full"
//                   alt=""
//                 />
//                 <div className="pl-2">
//                   <div className="flex w-full items-center">
//                     <h1 className="font-[600] pr-2">{item.user.name}</h1>
//                     <Ratings rating={item.rating} />
//                   </div>
//                   <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
//                   <p className="text-[#000000a7] text-[14px]">{"2days ago"}</p>
//                 </div>
//               </div>
//             ))}
//           {allReviews && allReviews.length === 0 && (
//             <h5 className="w-full text-center py-5 text-[18px]">
//               No Reviews have for this shop!
//             </h5>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopProfileData;



import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import Ratings from "../Products/Ratings";

const ShopProfileData = ({ isOwner }) => {
  const { id } = useParams();
  const [active, setActive] = useState(1);

  // ✅ Hardcoded Demo Products
  
  // const products = [
  //   {
  //     "_id": "67fe85f1dd7d979664b98272",
  //     "soldOut": "0",
  //     "createdAt": "2025-04-15T15:57:52.465Z",
  //     "name": "Wireless Bluetooth Headphones",
  //     "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
  //     "originalPrice": "150",
  //     "discountPrice": "99",
  //     "stock": 25,
  //     "ratings": 4.6,
  //     "images": [
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afc",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afd",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
  //       }
  //     ],
  //     "reviews": [
  //       {
  //         "user": {
  //           "avatar": {
  //             "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //           },
  //           "name": "Alice"
  //         },
  //         "_id": "67fe84fa73b64d5ed0d00afe",
  //         "rating": 5,
  //         "comment": "Absolutely love these!"
  //       }
  //     ],
  //     "shop": {
  //       "_id": "shop123",
  //       "name": "TechZone",
  //       "avatar": {
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       "description": "Selling high-tech electronics since 2020.",
  //       "createdAt": "2022-01-01T00:00:00Z"
  //     }
  //   },{
  //     "_id": "67fe85f1dd7d979664b98272",
  //     "soldOut": "0",
  //     "createdAt": "2025-04-15T15:57:52.465Z",
  //     "name": "Wireless Bluetooth Headphones",
  //     "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
  //     "originalPrice": "150",
  //     "discountPrice": "99",
  //     "stock": 25,
  //     "ratings": 4.6,
  //     "images": [
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afc",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afd",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
  //       }
  //     ],
  //     "reviews": [
  //       {
  //         "user": {
  //           "avatar": {
  //             "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //           },
  //           "name": "Alice"
  //         },
  //         "_id": "67fe84fa73b64d5ed0d00afe",
  //         "rating": 5,
  //         "comment": "Absolutely love these!"
  //       }
  //     ],
  //     "shop": {
  //       "_id": "shop123",
  //       "name": "TechZone",
  //       "avatar": {
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       "description": "Selling high-tech electronics since 2020.",
  //       "createdAt": "2022-01-01T00:00:00Z"
  //     }
  //   },{
  //     "_id": "67fe85f1dd7d979664b98272",
  //     "soldOut": "0",
  //     "createdAt": "2025-04-15T15:57:52.465Z",
  //     "name": "Wireless Bluetooth Headphones",
  //     "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
  //     "originalPrice": "150",
  //     "discountPrice": "99",
  //     "stock": 25,
  //     "ratings": 4.6,
  //     "images": [
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afc",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afd",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
  //       }
  //     ],
  //     "reviews": [
  //       {
  //         "user": {
  //           "avatar": {
  //             "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //           },
  //           "name": "Alice"
  //         },
  //         "_id": "67fe84fa73b64d5ed0d00afe",
  //         "rating": 5,
  //         "comment": "Absolutely love these!"
  //       }
  //     ],
  //     "shop": {
  //       "_id": "shop123",
  //       "name": "TechZone",
  //       "avatar": {
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       "description": "Selling high-tech electronics since 2020.",
  //       "createdAt": "2022-01-01T00:00:00Z"
  //     }
  //   },{
  //     "_id": "67fe85f1dd7d979664b98272",
  //     "soldOut": "0",
  //     "createdAt": "2025-04-15T15:57:52.465Z",
  //     "name": "Wireless Bluetooth Headphones",
  //     "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
  //     "originalPrice": "150",
  //     "discountPrice": "99",
  //     "stock": 25,
  //     "ratings": 4.6,
  //     "images": [
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afc",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       {
  //         "_id": "67fe84fa73b64d5ed0d00afd",
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
  //       }
  //     ],
  //     "reviews": [
  //       {
  //         "user": {
  //           "avatar": {
  //             "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //           },
  //           "name": "Alice"
  //         },
  //         "_id": "67fe84fa73b64d5ed0d00afe",
  //         "rating": 5,
  //         "comment": "Absolutely love these!"
  //       }
  //     ],
  //     "shop": {
  //       "_id": "shop123",
  //       "name": "TechZone",
  //       "avatar": {
  //         "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
  //       },
  //       "description": "Selling high-tech electronics since 2020.",
  //       "createdAt": "2022-01-01T00:00:00Z"
  //     }
  //   }
  // ]
  const products = [
    {
      "_id": "67fe85f1dd7d979664b98272",
      "soldOut": "0",
      "createdAt": "2025-04-15T15:57:52.465Z",
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
      "originalPrice": "150",
      "discountPrice": "99",
      "stock": 25,
      "ratings": 4.6,
      "images": [
        {
          "_id": "67fe84fa73b64d5ed0d00afc",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        {
          "_id": "67fe84fa73b64d5ed0d00afd",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
        }
      ],
      "reviews": [
        {
          "user": {
            "avatar": {
              "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
            },
            "name": "Alice"
          },
          "_id": "67fe84fa73b64d5ed0d00afe",
          "rating": 5,
          "comment": "Absolutely love these!"
        }
      ],
      "shop": {
        "_id": "shop123",
        "name": "TechZone",
        "avatar": {
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        "description": "Selling high-tech electronics since 2020.",
        "createdAt": "2022-01-01T00:00:00Z"
      }
    },{
      "_id": "67fe85f1dd7d979664b98272",
      "soldOut": "0",
      "createdAt": "2025-04-15T15:57:52.465Z",
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
      "originalPrice": "150",
      "discountPrice": "99",
      "stock": 25,
      "ratings": 4.6,
      "images": [
        {
          "_id": "67fe84fa73b64d5ed0d00afc",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        {
          "_id": "67fe84fa73b64d5ed0d00afd",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
        }
      ],
      "reviews": [
        {
          "user": {
            "avatar": {
              "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
            },
            "name": "Alice"
          },
          "_id": "67fe84fa73b64d5ed0d00afe",
          "rating": 5,
          "comment": "Absolutely love these!"
        }
      ],
      "shop": {
        "_id": "shop123",
        "name": "TechZone",
        "avatar": {
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        "description": "Selling high-tech electronics since 2020.",
        "createdAt": "2022-01-01T00:00:00Z"
      }
    },{
      "_id": "67fe85f1dd7d979664b98272",
      "soldOut": "0",
      "createdAt": "2025-04-15T15:57:52.465Z",
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality sound with comfortable design. Long battery life and premium materials.",
      "originalPrice": "150",
      "discountPrice": "99",
      "stock": 25,
      "ratings": 4.6,
      "images": [
        {
          "_id": "67fe84fa73b64d5ed0d00afc",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        {
          "_id": "67fe84fa73b64d5ed0d00afd",
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-1/488037890_122206616690084611_3045940387322381312_n.jpg?stp=c0.0.810.810a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHSBotjlb9v-ZuSK7rv89nZHhMQjSAWNpQeExCNIBY2lEb8JsqUsiep3qyN9qiNa5CfkSWg_yjEl2TNHM-F1ztV&_nc_ohc=mnYi-x9__zgQ7kNvwHrNm4I&_nc_oc=AdnzXvoFtbhU3aD1mfC-esM2rL-DlKuigExrHfJ2G9C_SoKShe9bSVF_8GQkGe0KxzU&_nc_zt=24&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=wD_s38mGMX4QkqKzMIyPlg&oh=00_AfGttFRYJWewGp9jBFvYx_xLAB4V5APOFsGsUdMDKdLr6w&oe=680444A3"
        }
      ],
      "reviews": [
        {
          "user": {
            "avatar": {
              "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
            },
            "name": "Alice"
          },
          "_id": "67fe84fa73b64d5ed0d00afe",
          "rating": 5,
          "comment": "Absolutely love these!"
        }
      ],
      "shop": {
        "_id": "shop123",
        "name": "TechZone",
        "avatar": {
          "url": "https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/394505936_1576807036186512_5237267306121855677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFntHUygYjTdrQN8hb42n0b1QAv9Th7_N3VAC_1OHv83TdjhTNNBaW7JNOlklaCWw6S5SwniPIGMZuSpSJP4M7z&_nc_ohc=OAqoqm9RxA4Q7kNvwHrbovP&_nc_oc=AdmS_Yr4KmzQZetIFq7Tv9sguWEF7eivO7rn8509S8PCh48BAxLvCWnA8YJFDJ--b5k&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=D3e-bjT8kPMavbHzxU97_A&oh=00_AfJp8l4qFNIUStib9hh7u2vq7-fmCbMKd08u9lGQY7b0mQ&oe=6829A71A"
        },
        "description": "Selling high-tech electronics since 2020.",
        "createdAt": "2022-01-01T00:00:00Z"
      }
    }
  ]

  // ✅ Hardcoded Demo Events
  const events = [
    {
      _id: "3",
      name: "Event Product 1",
      price: 79,
      images: [{ url: "https://via.placeholder.com/150" }],
    },
  ];

  const allReviews = products.map((product) => product.reviews).flat();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Running Events
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {products.map((i, index) => (
            <ProductCard data={i} key={index} isShop={true} />
          ))}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {events.map((i, index) => (
              <ProductCard
                data={i}
                key={index}
                isShop={true}
                isEvent={true}
              />
            ))}
          </div>
          {events.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Events have for this shop!
            </h5>
          )}
        </div>
      )}

      {active === 3 && (
        <div className="w-full">
          {allReviews.map((item, index) => (
            <div className="w-full flex my-4" key={index}>
              <img
                src={item.user.avatar?.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
              <div className="pl-2">
                <div className="flex w-full items-center">
                  <h1 className="font-[600] pr-2">{item.user.name}</h1>
                  <Ratings rating={item.rating} />
                </div>
                <p className="font-[400] text-[#000000a7]">{item.comment}</p>
                <p className="text-[#000000a7] text-[14px]">{"2days ago"}</p>
              </div>
            </div>
          ))}
          {allReviews.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Reviews have for this shop!
            </h5>
          )}
        </div>
      )}
      
    </div>
  );
};

export default ShopProfileData;
