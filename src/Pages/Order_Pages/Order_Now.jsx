import React from "react";

import { Home, PhoneAndroid } from "@mui/icons-material";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router";

const Order_Now = React.memo(() => {
    const navigate = useNavigate();

  return (
    <main className="bg-gradient-to-b from-cyan-400 to-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Famto Logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl">FAMTO</h1>
        </div>
        <button className="px-4 py-2 rounded-lg bg-white text-black shadow-md hover:bg-gray-100">
          Login
        </button>
      </header>

      {/* Title */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Explore our fast and <br /> reliable delivery services
        </h2>
      </section>

      {/* Delivery Options */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div
        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl transition cursor-pointer"
        onClick={() => navigate("/home-delivery")}
      >
        <Home className="w-12 h-12 text-cyan-500 mb-4" />
        <h3 className="font-medium">HOME DELIVERY</h3>
      </div>

      <div
        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl transition cursor-pointer"
        onClick={() => navigate("/pick-drop")}
      >
        <FaTruck className="w-12 h-12 text-yellow-500 mb-4" />
        <h3 className="font-medium">PICK & DROP</h3>
      </div>

      <div
        className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl transition cursor-pointer"
        onClick={() => navigate("/custom-order")}
      >
        <PhoneAndroid className="w-12 h-12 text-pink-500 mb-4" />
        <h3 className="font-medium">CUSTOM ORDER</h3>
      </div>
    </section>

      {/* Download Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-teal-700 rounded-2xl p-6 text-white">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">
            Download the Famto app!
          </h3>
          <div className="flex gap-4">
            <img src="/appstore.png" alt="App Store" className="w-32" />
            <img src="/playstore.png" alt="Play Store" className="w-32" />
          </div>
        </div>
        <div>
          <img
            src="/mobile.png"
            alt="Famto App Preview"
            className="w-40 md:w-56"
          />
        </div>
      </section>
    </main>
  );
});

Order_Now.displayName = "Order_Now";

export default Order_Now;
