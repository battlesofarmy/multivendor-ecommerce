import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useCartStore from "../../store/cartStore";
import api from "../../utils/axiosCongif";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PaymentPage = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState([]);
  const nagivate = useNavigate()
  const { user } = useSelector((state)=> state.auth);


    const totalPrice = cart?.reduce(
    (acc, item) => acc + item.discountPrice * item.count,
    0
  );

  useEffect(()=>{
    api.get('/cart')
    .then((res)=> setCart(res.data))
    .catch((err)=> console.log(err))


    const storedCart = JSON.parse(localStorage.getItem("latestOrder") || "[]");
    setAddress(storedCart.shippingAddress)

  },[])



  const handlePayment = () => {

    if (cart?.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }
    const payInfo = {
      cart, address, user, totalPrice
    }

    api.post('/order', payInfo)
    .then(()=>{
        api.delete('/cart/all')
        .then(()=>{
          toast.success("Payment successful!");
          localStorage.removeItem("latestOrder");
          setTimeout(() => {
            nagivate('/thank-you')
          }, 1000);
        })
        .catch((err)=> toast.error(err.message || "Payment Error"))
    })
    .catch((err)=> toast.error(err))

    

  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

      {/* Shipping Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
        <div className="bg-gray-100 p-4 rounded">
          <p>Address: {address?.address1}</p>
          <p>City: {address?.city}</p>
          <p>ZipCode: {address?.zipCode}</p>
          <p>Country: {address?.country}</p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-5 gap-6">
        <div className="mb-6 col-span-3">
        <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
        {cart?.length > 0 ? (
          cart?.map((item, index) => (
            <div key={index} className="grid grid-cols-5 mb-2 shadow p-2 px-5 my-2">
              <span className={'col-span-2'}>
                {item.name} x {item.count}
              </span>
              <span  className={'col-span-2'}>
                <img className="w-[40px] h-[40px]" src={item?.images[0]?.url} alt="cart image" />
              </span>
              <span  className={'col-span-1'}>${item.discountPrice * item.count}</span>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="col-span-2 bg-gray-100">
          {/* // add cash on delevery  */}
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="bg-green-100 rounded-full p-4 mb-3">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-700 mb-1">Cash on Delivery</h3>
          <p className="text-sm text-gray-600 text-center">
            You will pay when the product is delivered to your address.
          </p>
        </div>

      </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-lg font-medium mb-4">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button
        onClick={handlePayment}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;


