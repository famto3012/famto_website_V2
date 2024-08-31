import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Button from "../components/button"; // Ensure Button component is correctly imported
import { Carousel } from "antd";
import { LuIndianRupee } from "react-icons/lu";

const Subscriptions = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[19rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fsubscription.svg?alt=media&token=030f9829-9023-48e7-9899-87ba68d83f1f"
            alt="Terms & Condition"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[2rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:ps-[4rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>

          <h1 className="text-white text-[16px] md:text-[20px] lg:text-[32px] text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Famto merchant
            <span className="italic font-thin md:px-3 px-1">subscriptions</span>
          </h1>
        </div>
      </div>
      <section className="md:mx-[4rem] m-8">
        {/* These card only visible on small screen */}
        <div className="block md:hidden">
          <Carousel
            effect="scrollx"
            draggable={true}
            arrows
            infinite={false}
            className="space-x-3 custom-carousel"
          >
            {/* CARD 1 */}
            <div className="flex-shrink-0 w-[300px] p-6 border border-gray-200 shadow-md rounded-3xl  flex flex-col h-[44rem] sm:h-[41rem]">
              <div className="flex flex-col justify-center items-center flex-grow">
                <div className="px-3 py-1 bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                  Best Value
                </div>
                <div className="text-[#00ced1] text-3xl font-bold mb-2 flex items-center">
                  <LuIndianRupee /> 16,419
                  <span className="text-black text-sm font-medium mx-1">
                    /Year
                  </span>
                </div>
                <div className="text-gray-500 mb-[2rem]">
                  <span className="text-gray-400 line-through">₹ 18249</span>{" "}
                  (10% off)
                </div>
              </div>
              <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2 flex-grow">
                <li>
                  3650 <span className="text-black/50">Orders</span>
                </li>
                <li>
                  10% Refund,{" "}
                  <span className="text-black/50">
                    If orders are below 1800
                  </span>
                </li>
                <li>Web Application</li>
                <li>Delivery Support</li>
                <li>Online Promotion</li>
                <li>Ad Banners</li>
                <li>Monthly Reports</li>
                <li>Zero Commissions</li>
                <li>
                  Order Tracking{" "}
                  <span className="text-black/50">Interface</span>
                </li>
                <li>Integration Assistance</li>
                <li>
                  Early Payouts,{" "}
                  <span className="text-black/50">Before t+1 days</span>
                </li>
                <li>
                  Seasonal Discount{" "}
                  <span className="text-black/50">Vouchers</span>
                </li>
                <li>
                  Free Sponsorship{" "}
                  <span className="text-black/50">for First Month</span>
                </li>
                <li>
                  Design Assistance{" "}
                  <span className="text-black/50">for Ad banner included</span>
                </li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="flex-shrink-0 w-[300px] p-6 border border-gray-200 shadow-md rounded-3xl bg-white flex flex-col h-[44rem] sm:h-[41rem]">
              <div className="flex flex-col justify-center items-center flex-grow">
                <div className="px-3 py-1 bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                  Most Popular
                </div>
                <div className="text-[#00ced1] text-3xl font-bold mb-2 flex items-center">
                  <LuIndianRupee /> 8,549
                  <span className="text-black text-sm font-medium mx-1">
                    /Six Months
                  </span>
                </div>
                <div className="text-gray-500 mb-[2rem]">
                  <span className="text-gray-400 line-through">₹ 8999</span> (5%
                  off)
                </div>
              </div>
              <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2 flex-grow">
                <li>
                  1800 <span className="text-black/50">Orders</span>
                </li>
                <li>
                  5% Refund,{" "}
                  <span className="text-black/50">If orders are below 900</span>
                </li>
                <li>Web Application</li>
                <li>Delivery Support</li>
                <li>Online Promotion</li>
                <li>Ad Banners</li>
                <li>Monthly Reports</li>
                <li>Zero Commissions</li>
                <li>
                  Order Tracking{" "}
                  <span className="text-black/50">Interface</span>
                </li>
                <li>Integration Assistance</li>
                <li>
                  Early Payouts,{" "}
                  <span className="text-black/50">Before t+1 days</span>
                </li>
                <li>
                  Seasonal Discount{" "}
                  <span className="text-black/50">Vouchers</span>
                </li>
                <li>
                  Free Sponsorship{" "}
                  <span className="text-black/50">for First Month</span>
                </li>
                <li>
                  Design Assistance{" "}
                  <span className="text-black/50">for Ad banner included</span>
                </li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="flex-shrink-0 w-[300px] p-6 border border-gray-200 shadow-md rounded-3xl bg-white flex flex-col h-[44rem] sm:h-[41rem]">
              <div className="flex flex-col justify-center items-center flex-grow">
                <div className="px-3 py-1 bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                  Basic
                </div>
                <div className="text-[#00ced1] text-3xl font-bold mb-2 flex items-center">
                  <LuIndianRupee /> 1,499
                  <span className="text-black text-sm font-medium mx-1">
                    /Month
                  </span>
                </div>
              </div>
              <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2 flex-grow mt-[55px]">
                <li>
                  300 <span className="text-black/50">Orders</span>
                </li>
                <li>Web Application</li>
                <li>Delivery Support</li>
                <li>Zero Commissions</li>
                <li>
                  Order Tracking{" "}
                  <span className="text-black/50">Interface</span>
                </li>
                <li>Integration Assistance</li>
                <li>
                  Payouts,{" "}
                  <span className="text-black/50">Before t+2 days</span>
                </li>
              </ul>
            </div>
          </Carousel>
        </div>

        {/* These cards only visible on large screen */}
        <div className="hidden md:block">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3  mb-[1rem] ">
            {/* CARD 1 */}
            <div className="flex flex-col p-6 border border-gray-200 shadow-md rounded-3xl bg-white ">
              <div className="grid ">
                <div className="flex flex-col justify-center items-center">
                  <div className="px-3 py-1  bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                    Best Value
                  </div>
                  <div className="text-[#00ced1] text-3xl font-bold mb-2 flex items-center ">
                    <LuIndianRupee /> 16,419
                    <span className="text-black text-sm font-medium mx-1">
                      /Year
                    </span>
                  </div>
                  <div className="text-gray-500 mb-[2rem] ">
                    <span className="text-gray-400 line-through"> ₹ 18249</span>{" "}
                    (10% off)
                  </div>
                </div>
                <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2">
                  <li>
                    3650 <span className="text-black/50">Orders</span>
                  </li>
                  <li>
                    10% Refund,{" "}
                    <span className="text-black/50">
                      {" "}
                      If orders are below 1800
                    </span>
                  </li>
                  <li>Web Application</li>
                  <li>Delivery Support</li>
                  <li>Online Promotion</li>
                  <li>Ad Banners</li>
                  <li>Monthly Reports</li>
                  <li>Zero Commissions</li>
                  <li>
                    Order Tracking{" "}
                    <span className="text-black/50">Interface</span>
                  </li>
                  <li>Integration Assistance</li>
                  <li>
                    Early Payouts,{" "}
                    <span className="text-black/50"> Before t+1 days</span>
                  </li>
                  <li>
                    Seasonal Discount{" "}
                    <span className="text-black/50">Vouchers</span>
                  </li>
                  <li>
                    Free Sponsorship{" "}
                    <span className="text-black/50">for First Month</span>
                  </li>
                  <li>
                    Design Assistance{" "}
                    <span className="text-black/50">
                      for Ad banner included
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col p-6 border border-gray-200 shadow-md rounded-3xl  bg-white">
              <div className="grid">
                <div className="flex flex-col justify-center items-center">
                  <div className="px-3 py-1 bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                    Most Popular
                  </div>
                  <div className="text-[#00ced1] text-3xl font-bold mb-2 flex items-center">
                    <LuIndianRupee /> 8,549
                    <span className="text-black text-sm font-medium mx-1">
                      /Six Months
                    </span>
                  </div>
                  <div className="text-gray-500 mb-[2rem] ">
                    <span className="text-gray-400 line-through">₹ 8999</span>{" "}
                    (5% off)
                  </div>
                </div>
                <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2">
                  <li>
                    1800 <span className="text-black/50">Orders</span>
                  </li>
                  <li>
                    5% Refund,
                    <span className="text-black/50">
                      {" "}
                      If orders are below 900
                    </span>
                  </li>
                  <li>Web Application</li>
                  <li>Delivery Support</li>
                  <li>Online Promotion</li>
                  <li>Ad Banners</li>
                  <li>Monthly Reports</li>
                  <li>Zero Commissions</li>
                  <li>
                    Order Tracking{" "}
                    <span className="text-black/50">Interface</span>
                  </li>
                  <li>Integration Assistance</li>
                  <li>
                    Early Payouts,{" "}
                    <span className="text-black/50"> Before t+1 days</span>
                  </li>
                  <li>
                    Seasonal Discount{" "}
                    <span className="text-black/50">Vouchers</span>
                  </li>
                  <li>
                    Free Sponsorship{" "}
                    <span className="text-black/50">for First Month</span>
                  </li>
                  <li>
                    Design Assistance{" "}
                    <span className="text-black/50">
                      for Ad banner included
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col p-6 border border-gray-200  shadow-md bg-white rounded-3xl">
              <div className="grid">
                <div className="flex flex-col justify-center items-center ">
                  <div className="px-3 py-1 bg-[#00ced1]/10 text-[#00ced1] rounded-full border border-[#00ced1] mb-[1rem]">
                    Basic
                  </div>
                  <div className="text-[#00ced1] text-3xl font-bold mb-[4rem] flex items-center">
                    <LuIndianRupee /> 1,499
                    <span className="text-black text-sm font-medium mx-1">
                      /Month
                    </span>
                  </div>
                </div>
                <ul className="list-disc ps-[1rem] md:ps-[20px] font-medium text-[14px] space-y-2 ">
                  <li>
                    300 <span className="text-black/50">Orders</span>
                  </li>
                  <li>Web Application</li>
                  <li>Delivery Support</li>
                  <li>Zero Commissions</li>
                  <li>
                    Order Tracking{" "}
                    <span className="text-black/50">Interface</span>
                  </li>
                  <li>Integration Assistance</li>
                  <li>
                    Payouts,{" "}
                    <span className="text-black/50"> Before t+2 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="flex justify-end items-end my-[1rem] text-black/50 text-[14px]">
          *T&C applied{" "}
        </h1>
        <div>
          <p className="text-black/50 mb-[1rem] text-[14px]">
            Additionally we charge excess order compensations respective to the
            plans chosen.{" "}
          </p>
          <ul className="list-disc ps-[1rem] md:ps-[20px] space-y-2 font-medium text-[13px]">
            <li>₹ 5 per order above 3650 orders for yearly plan</li>
            <li>₹ 5 per order above 1800 orders for six months plan</li>
            <li>₹ 5 per order above 300 orders for monthly plan</li>
          </ul>
        </div>
        <div className=" space-y-4 md:flex justify-between mt-10  ">
          <div className="md:w-2/3 font-medium">
            <h1 className="text-[16px]">For further assistance</h1>
            <h1 className="text-[20px] md:text-[32px] text-[#00CED1] ">
              Contact our team!
            </h1>
          </div>
          <div className="md:mt-0 mt-20">
            <Link to="/contact-us">
              <Button value="Contact Us" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Subscriptions;
