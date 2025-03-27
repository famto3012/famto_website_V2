import React, { useState } from "react";

const DeliverySlides = React.memo(() => {
  const [isHovered, setIsHovered] = useState(true);
  const [card2IsHovered, setCard2IsHovered] = useState(true);
  const [card3IsHovered, setCard3IsHovered] = useState(true);
  const [card4IsHovered, setCard4IsHovered] = useState(true);

  return (
    <div className="grid grid-cols-1 gap-4 my-5 md:grid-cols-2 lg:grid-cols-4 md:mx-10 mx-5">
      {/* Card 1 */}
      <div
        className="relative rounded-lg w-full overflow-hidden transition-all duration-300 z-10"
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(true)}
      >
        <div
          className={`relative inset-0 transition-transform duration-300 ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <figure className="w-full">
            <img
              src="/other/order_anything.jpg"
              className="w-full opacity-95"
              alt="Order Anything"
            />
          </figure>
        </div>
        <div
          className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
            !isHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-[20px] md:text-[28px] text-white">
            Order Anything
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          } bg-white border border-gray-300 rounded-lg`}
        >
          <div
            className={`absolute inset-0 flex items-start py-5 px-5 text-[14px] transition-transform duration-300 ${
              isHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            Order food, grocery, cake, meat, fish, stationery, and any item from
            anywhere in the city that is legally permitted.
            <div className="absolute inset-0 flex items-end p-8 ps-36 font-medium text-[16px] md:text-[22px]">
              Order Anything
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="relative rounded-lg w-full overflow-hidden transition-all duration-300 z-10"
        onMouseEnter={() => setCard2IsHovered(false)}
        onMouseLeave={() => setCard2IsHovered(true)}
      >
        <div
          className={`relative inset-0 transition-transform duration-300 ${
            card2IsHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <figure className="w-full">
            <img
              src="/other/customer-order.jpg"
              className="w-full opacity-90"
              alt="Custom Order"
            />
          </figure>
        </div>
        <div
          className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
            !card2IsHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-[20px] md:text-[28px] text-white">
            Custom Order
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
            card2IsHovered ? "opacity-0" : "opacity-100"
          } bg-white border border-gray-300 rounded-lg`}
        >
          <div
            className={`absolute inset-0 flex items-start py-5 px-5 text-[14px] transition-transform duration-300 ${
              card2IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            Order anything from any nearby Store. The Delivery boy will shop for
            you and deliver to your doorsteps.
            <div className="absolute inset-0 flex items-end p-8 ps-40 font-medium text-[16px] md:text-[22px]">
              Custom Order
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="relative rounded-lg w-full overflow-hidden transition-all duration-300 z-10"
        onMouseEnter={() => setCard3IsHovered(false)}
        onMouseLeave={() => setCard3IsHovered(true)}
      >
        <div
          className={`relative inset-0 transition-transform duration-300 ${
            card3IsHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <figure className="w-full">
            <img
              src="/other/pickanddrop.jpg"
              className="w-full opacity-90"
              alt="Pick & Drop"
            />
          </figure>
        </div>
        <div
          className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
            !card3IsHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-[20px] md:text-[28px] text-white">
            Pick & Drop
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
            card3IsHovered ? "opacity-0" : "opacity-100"
          } bg-white border border-gray-300 rounded-lg`}
        >
          <div
            className={`absolute inset-0 flex items-start py-5 px-5 text-[14px] transition-transform duration-300 ${
              card3IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            Hire a delivery boy that will do your errand jobs of Pickup & Drop
            in your nearby area.
            <div className="absolute inset-0 flex items-end p-8 text-center ps-44 font-medium text-[16px] md:text-[22px]">
              Pick & Drop
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}

      <div
        className="relative rounded-lg w-full overflow-hidden transition-all duration-300 z-10"
        onMouseEnter={() => setCard4IsHovered(false)}
        onMouseLeave={() => setCard4IsHovered(true)}
      >
        <div
          className={`relative inset-0 transition-transform duration-300 ${
            card4IsHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <figure className="w-full">
            <img
              src="/other/scheduledOrder.jpg"
              className="w-full opacity-95"
              alt="Pick & Drop"
            />
          </figure>
        </div>
        <div
          className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
            !card4IsHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="text-[20px] md:text-[28px] text-white">
            Schedule Order
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
            card4IsHovered ? "opacity-0" : "opacity-100"
          } bg-white border border-gray-300 rounded-lg`}
        >
          <div
            className={`absolute inset-0 flex items-start py-5 px-5 text-[14px] transition-transform duration-300 ${
              card4IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            Order anything from any nearby Store. the Delivery boy will shop for
            you and deliver to your door steps.
            <div className="absolute inset-0 flex items-end p-8 text-center ps-36 font-medium text-[16px] md:text-[22px]">
              Schedule Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

DeliverySlides.displayName = "DeliverySlides";

export default DeliverySlides;
