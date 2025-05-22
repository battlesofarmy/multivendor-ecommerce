import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWishlistThunk, removeFromWishlistThunk } from "../../redux/actions/wishlist";
import useCartStore from "../../store/cartStore";
import api from "../../utils/axiosCongif";

// Mock styles module
const styles = {
  section: "max-w-[1200px] mx-auto",
  productTitle: "text-2xl font-semibold mb-2",
  productDiscountPrice: "text-lg font-bold text-green-600 mr-2",
  price: "line-through text-gray-500",
  shop_name: "text-xl font-bold",
  button: "bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-4",
  active_indicator: "absolute bottom-[-2px] left-0 w-full h-[2px] bg-blue-500",
};


const ProductDetails = ({data}) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state)=> state.wishlist);
   const addToCart = useCartStore((state) => state.addToCart);



  useEffect(()=>{
    wishlist?.map(ele=>{
      if(ele) setClick(true);
    });
    console.log(data);
  },[wishlist])
  const increaseCartCount = useCartStore((state)=> state.increaseCartCount);
  const decreaseCartCount = useCartStore((state)=> state.decreaseCartCount);
  const {user} = useSelector((state)=> state.auth);

  

  const incrementCount = () => increaseCartCount(data);
  const decrementCount = () => decreaseCartCount(data);

  const toggleWishlist = () =>{
    if(click){
      dispatch(removeFromWishlistThunk(data._id))
    }else{
      dispatch(addToWishlistThunk(data))
    }
    setClick(!click);
  }
  
  const addToCartHandler = async(data) => {
    if(!user){
      toast.error("Login to add a product to cart");
      return;
    }

      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
          const {_id, ...cardData} = data;
          cardData.email = user?.email;
          cardData.productId = data._id;
          cardData.count = 1;

          await api.post('/cart', cardData)
          .then((res)=>toast.success("Item added to cart successfully!"))
          .catch((err)=> toast.error(err.message));
          addToCart(cardData);
      }
  };

  const handleMessageSubmit = () => toast.info("Chat started with seller!");

  return (
    <div className="bg-white">
      <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
        <div className="w-full py-5">
          <div className="block w-full 800px:flex">
            {/* Images */}
            <div className="w-full 800px:w-[50%]">
              <img
                src={data?.images[select].url}
                alt=""
                className="w-[80%]"
              />
              <div className="w-full flex">
                {data?.images.map((img, index) => (
                  <div
                    key={index}
                    className={`${select === index ? "border" : ""} cursor-pointer`}
                  >
                    <img
                      src={img.url}
                      alt=""
                      className="h-[100px] mr-3 mt-3"
                      onClick={() => setSelect(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full 800px:w-[50%] pt-5">
              <h1 className={styles.productTitle}>{data?.name}</h1>
              <p>{data?.description}</p>
              <div className="flex pt-3">
                <h4 className={styles.productDiscountPrice}>
                  ${data?.discountPrice}
                </h4>
                <h3 className={styles.price}>${data?.originalPrice}</h3>
              </div>

              <div className="flex items-center mt-12 justify-between pr-3">
                <div>
                  <button
                    className="bg-gray-200 px-3 py-1"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-2">{count}</span>
                  <button
                    className="bg-gray-200 px-3 py-1"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div onClick={toggleWishlist}>
                  {click ? (
                    <AiFillHeart size={30} color="red" />
                  ) : (
                    <AiOutlineHeart size={30} />
                  )}
                </div>
              </div>

              <div className={styles.button} onClick={addToCartHandler}>
                <span className="flex items-center">
                  Add to cart <AiOutlineShoppingCart className="ml-2" />
                </span>
              </div>

              <div className="flex items-center pt-8">
                <Link to={`/shop/preview/${data?.shop?.shopId}`}>
                  <img
                    src={data?.shop.avatar.url}
                    className="w-[50px] h-[50px] rounded-full mr-2"
                    alt=""
                  />
                </Link>
                <div className="pr-8">
                  <h3 className={styles.shop_name}>{data?.shop.name}</h3>
                  <h5 className="text-sm">({data?.ratings}/5) Ratings</h5>
                </div>
                <div
                  className={`${styles.button} bg-purple-600`}
                  onClick={handleMessageSubmit}
                >
                  <span className="flex items-center">
                    Message <AiOutlineMessage className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-[#f5f6fb] px-5 py-6 rounded mt-10">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Product Reviews
          </h2>
          {data?.reviews.map((review, index) => (
            <div key={index} className="flex items-start mb-4">
              <img
                src={review.user.avatar.url}
                alt=""
                className="w-[50px] h-[50px] rounded-full mr-3"
              />
              <div>
                <h4 className="font-medium">{review.user.name}</h4>
                <p className="text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
          {data?.reviews.length === 0 && (
            <p className="text-center">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
