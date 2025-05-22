import React from "react";
import { Link } from "react-router-dom";

const OrderThankYou = () => {
    const orderId = Math.floor(Math.random() * 1000000);
    const totalAmount = JSON.parse(localStorage.getItem("totalPrice") || "10491");
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {/* <CheckCircle size={64} className="mx-auto text-green-500" /> */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Thank You for Your Order!
        </h2>
        <p className="text-gray-600 mt-2">
          Your order has been placed successfully.
        </p>

        <div className="mt-6 text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-medium text-gray-800">#{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Total:</span>
            <span className="font-medium text-gray-800">${totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Delivery:</span>
            <span className="font-medium text-gray-800">3 Business Day</span>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default OrderThankYou;
