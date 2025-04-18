// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
// import styles from "../../styles/styles";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart, removeFromCart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";

// const Cart = ({ setOpenCart }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const removeFromCartHandler = (data) => {
//     dispatch(removeFromCart(data));
//   };

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.qty * item.discountPrice,
//     0
//   );

//   const quantityChangeHandler = (data) => {
//     dispatch(addTocart(data));
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
//       <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
//         {cart && cart.length === 0 ? (
//           <div className="w-full h-screen flex items-center justify-center">
//             <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
//               <RxCross1
//                 size={25}
//                 className="cursor-pointer"
//                 onClick={() => setOpenCart(false)}
//               />
//             </div>
//             <h5>Cart Items is empty!</h5>
//           </div>
//         ) : (
//           <>
//             <div>
//               <div className="flex w-full justify-end pt-5 pr-5">
//                 <RxCross1
//                   size={25}
//                   className="cursor-pointer"
//                   onClick={() => setOpenCart(false)}
//                 />
//               </div>
//               {/* Item length */}
//               <div className={`${styles.noramlFlex} p-4`}>
//                 <IoBagHandleOutline size={25} />
//                 <h5 className="pl-2 text-[20px] font-[500]">
//                   {cart && cart.length} items
//                 </h5>
//               </div>

//               {/* cart Single Items */}
//               <br />
//               <div className="w-full border-t">
//                 {cart &&
//                   cart.map((i, index) => (
//                     <CartSingle
//                       key={index}
//                       data={i}
//                       quantityChangeHandler={quantityChangeHandler}
//                       removeFromCartHandler={removeFromCartHandler}
//                     />
//                   ))}
//               </div>
//             </div>

//             <div className="px-5 mb-3">
//               {/* checkout buttons */}
//               <Link to="/checkout">
//                 <div
//                   className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
//                 >
//                   <h1 className="text-[#fff] text-[18px] font-[600]">
//                     Checkout Now (USD${totalPrice})
//                   </h1>
//                 </div>
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
//   const [value, setValue] = useState(data.qty);
//   const totalPrice = data.discountPrice * value;

//   const increment = (data) => {
//     if (data.stock < value) {
//       toast.error("Product stock limited!");
//     } else {
//       setValue(value + 1);
//       const updateCartData = { ...data, qty: value + 1 };
//       quantityChangeHandler(updateCartData);
//     }
//   };

//   const decrement = (data) => {
//     setValue(value === 1 ? 1 : value - 1);
//     const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
//     quantityChangeHandler(updateCartData);
//   };

//   return (
//     <div className="border-b p-4">
//       <div className="w-full flex items-center">
//         <div>
//           <div
//             className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
//             onClick={() => increment(data)}
//           >
//             <HiPlus size={18} color="#fff" />
//           </div>
//           <span className="pl-[10px]">{data.qty}</span>
//           <div
//             className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
//             onClick={() => decrement(data)}
//           >
//             <HiOutlineMinus size={16} color="#7d879c" />
//           </div>
//         </div>
//         <img
//           src={`${data?.images[0]?.url}`}
//           alt=""
//           className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
//         />
//         <div className="pl-[5px]">
//           <h1>{data.name}</h1>
//           <h4 className="font-[400] text-[15px] text-[#00000082]">
//             ${data.discountPrice} * {value}
//           </h4>
//           <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
//             US${totalPrice}
//           </h4>
//         </div>
//         <RxCross1
//           className="cursor-pointer"
//           onClick={() => removeFromCartHandler(data)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Cart;




import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
  // ✅ Local hardcoded cart data
  const [cart, setCart] = useState([
    {
      _id: "1",
      name: "Demo Product",
      qty: 1,
      discountPrice: 100,
      stock: 5,
      images: [{ url: "https://via.placeholder.com/130" }],
    },
  ]);

  const removeFromCartHandler = (data) => {
    const filteredCart = cart.filter((item) => item._id !== data._id);
    setCart(filteredCart);
  };

  const quantityChangeHandler = (data) => {
    const updatedCart = cart.map((item) =>
      item._id === data._id ? { ...item, qty: data.qty } : item
    );
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cart.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>

              <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {cart.length} items
                </h5>
              </div>

              <br />
              <div className="w-full border-t">
                {cart.map((i, index) => (
                  <CartSingle
                    key={index}
                    data={i}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
              </div>
            </div>

            <div className="px-5 mb-3">
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (USD${totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value + 1) {
      toast.error("Product stock limited!");
    } else {
      const newQty = value + 1;
      setValue(newQty);
      quantityChangeHandler({ ...data, qty: newQty });
    }
  };

  const decrement = (data) => {
    const newQty = value === 1 ? 1 : value - 1;
    setValue(newQty);
    quantityChangeHandler({ ...data, qty: newQty });
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`${data?.images[0]?.url}`}
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.discountPrice} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
