// import React, { useState } from "react";

// const DeliverySlides = () => {
//   const [isHovered, setIsHovered] = useState(true);
//   const [card2IsHovered, setCard2IsHovered] = useState(true);
//   const [card3IsHovered, setCard3IsHovered] = useState(true);
//   const [card4IsHovered, setCard4IsHovered] = useState(true);

//   return (
//     <>
//       <div className="md:flex grid  sm:grid-cols-2 gap-4 my-5 md:mx-10 mx-5">
//         <div
//           className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
//           onMouseEnter={() => setIsHovered(false)}
//           onMouseLeave={() => setIsHovered(true)}
//         >
//           <div
//             className={`absolute inset-0 transition-transform duration-300 ${
//               isHovered ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <figure className="w-full">
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Forder_anything.svg?alt=media&token=fda50c9f-df55-4cc5-a867-00d8b15554f2"
//                 className="w-full"
//                 alt="Order Anything"
//               />
//             </figure>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
//               !isHovered ? "translate-x-full" : "translate-x-0"
//             }`}
//           >
//             <div className="text-[28px] text-white">Order Anything</div>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
//               isHovered ? "opacity-0" : "opacity-100"
//             } bg-white border border-gray-300 rounded-lg`}
//           >
//             <div
//               className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
//                 isHovered ? "translate-x-full" : "translate-x-0"
//               }`}
//             >
//               Order food, grocery, cake, meat, fish, stationery, and any item
//               from anywhere in the city that is legally permitted.
//               <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
//                 Order Anything
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
//           onMouseEnter={() => setCard2IsHovered(false)}
//           onMouseLeave={() => setCard2IsHovered(true)}
//         >
//           <div
//             className={`absolute inset-0 transition-transform duration-300 ${
//               card2IsHovered ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <figure className="w-full">
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fcustomer-order.svg?alt=media&token=edfdae38-58ef-45e1-9a48-1b621bf53ee0"
//                 className="w-full"
//                 alt="Custom Order"
//               />
//             </figure>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
//               !card2IsHovered ? "translate-x-full" : "translate-x-0"
//             }`}
//           >
//             <div className="text-[28px] text-white">Custom Order</div>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
//               card2IsHovered ? "opacity-0" : "opacity-100"
//             } bg-white border border-gray-300 rounded-lg`}
//           >
//             <div
//               className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
//                 card2IsHovered ? "translate-x-full" : "translate-x-0"
//               }`}
//             >
//               Order anything from any nearby Store. the Delivery boy will shop
//               for you and deliver to your door steps.
//               <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
//                 Custom Order
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
//           onMouseEnter={() => setCard3IsHovered(false)}
//           onMouseLeave={() => setCard3IsHovered(true)}
//         >
//           <div
//             className={`absolute inset-0 transition-transform duration-300 ${
//               card3IsHovered ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <figure className="w-full">
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fpickanddrop.svg?alt=media&token=6b817bff-124a-499f-a882-8f29d7e6da78"
//                 className="w-full"
//                 alt="Custom Order"
//               />
//             </figure>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
//               !card3IsHovered ? "translate-x-full" : "translate-x-0"
//             }`}
//           >
//             <div className="text-[28px] text-white">Pick & drop</div>
//           </div>
//           <div
//             className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
//               card3IsHovered ? "opacity-0" : "opacity-100"
//             } bg-white border border-gray-300 rounded-lg`}
//           >
//             <div
//               className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
//                 card3IsHovered ? "translate-x-full" : "translate-x-0"
//               }`}
//             >
//               Hire a delivery boy that will do your errand jobs of Pickup & Drop
//               in your nearby area.
//               <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
//                 Pick & drop
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
//           onMouseEnter={() => setCard4IsHovered(false)}
//           onMouseLeave={() => setCard4IsHovered(true)}
//         >
//           {card4IsHovered ? (
//             <div className="relative rounded-xl bg-red-500">
//               <figure className="w-full rounded-xl">
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FscheduledOrder.svg?alt=media&token=bce66bb0-63a7-469d-b3dd-a1e94cc52e8b"
//                   className="w-full rounded-xl"
//                 />
//               </figure>
//               <div className="absolute inset-0 flex items-end ps-5 py-5 w-42 text-[28px] text-white">
//                 Schedule Order
//               </div>
//             </div>
//           ) : (
//             <div className="absolute inset-0 flex items-start py-5 px-5 text-[18px] rounded-lg border border-gray-300 bg-blue-700">
//               Order anything from any nearby Store. the Delivery boy will shop
//               for you and deliver to your door steps.
//               <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
//                 Schedule Order
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DeliverySlides;

import React, { useState } from "react";

const DeliverySlides = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [card2IsHovered, setCard2IsHovered] = useState(true);
  const [card3IsHovered, setCard3IsHovered] = useState(true);
  const [card4IsHovered, setCard4IsHovered] = useState(true);

  return (
    <>
      <div className="md:flex grid sm:grid-cols-2 gap-4 my-5 md:mx-10 mx-5">
        <div
          className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <div
            className={`absolute inset-0 transition-transform duration-300 ${
              isHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Forder_anything.svg?alt=media&token=fda50c9f-df55-4cc5-a867-00d8b15554f2"
                className="w-full"
                alt="Order Anything"
              />
            </figure>
          </div>
          <div
            className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
              !isHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-[28px] text-white">Order Anything</div>
          </div>
          <div
            className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            } bg-white border border-gray-300 rounded-lg`}
          >
            <div
              className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
                isHovered ? "translate-x-full" : "translate-x-0"
              }`}
            >
              Order food, grocery, cake, meat, fish, stationery, and any item
              from anywhere in the city that is legally permitted.
              <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
                Order Anything
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
          onMouseEnter={() => setCard2IsHovered(false)}
          onMouseLeave={() => setCard2IsHovered(true)}
        >
          <div
            className={`absolute inset-0 transition-transform duration-300 ${
              card2IsHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fcustomer-order.svg?alt=media&token=edfdae38-58ef-45e1-9a48-1b621bf53ee0"
                className="w-full"
                alt="Custom Order"
              />
            </figure>
          </div>
          <div
            className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
              !card2IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-[28px] text-white">Custom Order</div>
          </div>
          <div
            className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
              card2IsHovered ? "opacity-0" : "opacity-100"
            } bg-white border border-gray-300 rounded-lg`}
          >
            <div
              className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
                card2IsHovered ? "translate-x-full" : "translate-x-0"
              }`}
            >
              Order anything from any nearby Store. the Delivery boy will shop
              for you and deliver to your door steps.
              <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
                Custom Order
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
          onMouseEnter={() => setCard3IsHovered(false)}
          onMouseLeave={() => setCard3IsHovered(true)}
        >
          <div
            className={`absolute inset-0 transition-transform duration-300 ${
              card3IsHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fpickanddrop.svg?alt=media&token=6b817bff-124a-499f-a882-8f29d7e6da78"
                className="w-full"
                alt="Pick & drop"
              />
            </figure>
          </div>

          <div
            className={`absolute inset-0 flex items-end py-5 px-5 transition-transform duration-300 ${
              !card3IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-[28px] text-white">Pick & drop</div>
          </div>
          <div
            className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
              card3IsHovered ? "opacity-0" : "opacity-100"
            } bg-white border border-gray-300 rounded-lg`}
          >
            <div
              className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
                card3IsHovered ? "translate-x-full" : "translate-x-0"
              }`}
            >
              Hire a delivery boy that will do your errand jobs of Pickup & Drop
              in your nearby area.
              <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
                Pick & drop
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative rounded-lg md:w-1/4 overflow-hidden transition-all duration-300 z-10"
          onMouseEnter={() => setCard4IsHovered(false)}
          onMouseLeave={() => setCard4IsHovered(true)}
        >
          <div
            className={`absolute inset-0 transition-transform duration-300 ${
              card4IsHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FscheduledOrder.svg?alt=media&token=bce66bb0-63a7-469d-b3dd-a1e94cc52e8b"
                className="w-full"
                alt="Schedule Order"
              />
            </figure>
          </div>
          <div
            className={`absolute inset-0 flex items-end ps-5 py-5 w-42 text-[28px] text-white transition-opacity duration-300 ${
              !card4IsHovered ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="text-[28px] text-white">Schedule Order</div>
          </div>
          <div
            className={`absolute inset-0 flex items-start p-5 transition-opacity duration-300 ${
              card4IsHovered ? "opacity-0" : "opacity-100"
            } bg-white border border-gray-300 rounded-lg`}
          >
            <div
              className={`absolute inset-0 flex items-start py-5 px-5 transition-transform duration-300 ${
                card4IsHovered ? "translate-x-full" : "translate-x-0"
              }`}
            >
              Order anything from any nearby Store. The Delivery boy will shop
              for you and deliver to your doorsteps.
              <div className="absolute inset-0 flex items-end p-8 font-bold text-[28px]">
                Schedule Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverySlides;
