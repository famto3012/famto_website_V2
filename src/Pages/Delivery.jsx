import React, { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsEmojiGrin } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { MdOutlineVerifiedUser, MdSpeed } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import DeliverySlides from "../components/DeliverySlides";
import { LuIndianRupee } from "react-icons/lu";
import Button from "../components/button";
import ScrollToTop from "../components/ScrollToTop";

const Delivery = React.memo(() => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const isActive = (pathname) => location.pathname === pathname;

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 100);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <main className="relative">
        <div className="relative w-full">
          <figure className="h-[20rem] md:h-[70vh]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FDelivery.svg?alt=media&token=68ca57aa-1fa9-457f-9562-f5c36bb535f3"
              className="w-full h-full object-cover"
            ></img>
          </figure>
        </div>
        <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30"></div>
        <div className="absolute top-0 inset-0">
          <nav className="flex items-center justify-between h-[80px] p-5 md:mt-[34px] lg:mt-[24px]">
            <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
              <img
                className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FWhite.svg?alt=media&token=3d91a036-029f-4d67-816e-19b1f8dd3f6e"
                alt="Logo"
              />
            </Link>

            <div className="hidden md:flex items-center gap-[18px] lg:gap-[70px] mt-4 lg:mt-[35px] mx-8 text-white">
              <Link
                to="/"
                className={`text-white/75 hover:text-white hover:underline underline-offset-4 ${
                  isActive("/") ? "text-white underline" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/delivery"
                className={`text-white/75 hover:text-white hover:underline underline-offset-4 ${
                  isActive("/delivery") ? "text-white underline" : ""
                }`}
              >
                Delivery
              </Link>
              <Link
                to="/it-service"
                className={`text-white/75 hover:text-white hover:underline underline-offset-4 ${
                  isActive("/it-service") ? "text-white underline" : ""
                }`}
              >
                IT Services
              </Link>
              <Link
                to="https://dashboard.famto.in/auth/login"
                className="border rounded-md border-white py-2 px-7 hover:bg-white hover:text-black"
              >
                Login
              </Link>
            </div>

            <button
              className="block md:hidden focus:outline-none mr-[30px]"
              onClick={toggleMenu}
            >
              <IoMenu className="text-white text-[28px]" />
            </button>

            {(menuOpen || menuClosing) && (
              <div
                className={`absolute top-[10vh] right-[5vh] w-[200px] z-30 bg-white flex flex-col items-center gap-[20px] p-4 rounded-md md:hidden ${
                  menuOpen
                    ? "animate-slideInFromTopRight"
                    : "animate-slideOutToBottomLeft"
                }`}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className={`border-b-2 border-gray-200 w-full flex justify-center p-3 ${
                    isActive("/") ? "font-bold" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/delivery"
                  onClick={toggleMenu}
                  className={`border-b-2 border-gray-200 w-full flex justify-center pb-3 ${
                    isActive("/delivery") ? "font-bold" : ""
                  }`}
                >
                  Delivery
                </Link>
                <Link
                  to="/it-service"
                  onClick={toggleMenu}
                  className={`border-b-2 border-gray-200 w-full flex justify-center rounded-md pb-3 hover:bg-white hover:text-black ${
                    isActive("/it-service") ? "font-bold" : ""
                  }`}
                >
                  IT Services
                </Link>
                <Link
                  to="https://dashboard.famto.in/auth/login"
                  className="border rounded-md border-white px-5 hover:bg-white hover:text-black"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            )}
          </nav>

          <div className="absolute top-[30%] md:ps-12 left-8">
            <p className="text-white text-[14px] sm:text-[20px] md:text-[25px] w-fit">
              Reliable & Fast
            </p>
            <h1 className="text-white text-[1.5rem] font-light sm:text-[2rem] md:text-[3rem] lg:text-[4rem] mt-2 lg:mt-[-10px]">
              Delivery Services
            </h1>
          </div>
        </div>
      </main>
      <div className="grid justify-center md:mb-10 md:mt-20 mt-8">
        <p className="flex justify-center text-[16px] font-medium">We offer</p>
        <h1 className="text-[#00CED1]  md:text-[32px] font-[400] text-[20px]">
          Various Delivery Services
        </h1>
      </div>

      <DeliverySlides />

      <div className="bg-gray-100 pb-16 mt-14">
        <div className="p-10">
          <p className="font-[600]">Why Famto</p>
          <h1 className="text-[32px] text-[#00CED1]">Delivery Services</h1>
        </div>
        <div className="lg:flex grid sm:grid-cols-2 gap-5 md:mx-10 mx-5">
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] text-[16px] my-3">Exceptional Quality</h1>
            <p className="font-normal text-[14px]">
              Our products are sourced from top-tier suppliers, ensuring premium
              quality and freshness with every delivery. We prioritize
              maintaining the highest standards in all our offerings.
            </p>
            <div className="flex justify-end mt-6">
              <MdOutlineVerifiedUser className="text-[42px] bg-gray-100 p-2 rounded-lg items-end text-[#00CED1] " />
            </div>
          </div>
          <div className="bg-white grid rounded-lg p-5 justify-between">
            <h1 className="font-[500] text-[16px] my-3">
              Fast and Reliable Delivery
            </h1>
            <p className="font-normal text-[14px]">
              We guarantee swift and reliable delivery services, ensuring your
              products arrive on time, every time. Our efficient logistics
              minimize waiting time, providing a seamless experience.
            </p>
            <div className="flex justify-end ">
              <MdSpeed className="text-[42px] items-end bg-gray-100 p-2 rounded-lg text-[#00CED1] " />
            </div>
          </div>
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] text-[16px] my-3">Competitve Pricing</h1>
            <p className="font-normal text-[14px]">
              We offer competitive prices without compromising on quality,
              making our products an excellent value for money. Our customers
              get the best deals, ensuring satisfaction and repeat business.
            </p>
            <div className="flex justify-end">
              <LuIndianRupee className="text-[42px] items-end bg-gray-100 p-2 rounded-lg text-[#00CED1]" />
            </div>
          </div>
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] text-[16px] my-3">
              Customer Satisfication
            </h1>
            <p className="font-normal text-[14px]">
              We are committed to customer satisfaction, offering responsive
              customer service and hassle-free returns. Our focus is on building
              long-term relationships with our customers.
            </p>
            <div className="flex justify-end">
              <BsEmojiGrin className="text-[42px] items-end bg-gray-100 p-2 rounded-lg text-[#00CED1] " />
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center md:mt-20 mt-8">
        <p className="flex justify-center text-[16px] font-medium">Come</p>
        <h1 className="text-[#00CED1]  md:text-[32px] font-[400] text-[20px]">
          Work with us
        </h1>
      </div>

      <div className="w-full mb-10">
        <div className="grid md:flex mt-10 gap-20 md:gap-10 relative">
          <figure className="w-full md:w-1/2 h-[15rem] relative">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmerchant.svg?alt=media&token=c12c453c-0bf0-45c4-8e22-a40753a11c8f"
              className="h-full w-full rounded-r-lg object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col justify-center md:hidden p-4 text-white bg-black bg-opacity-50">
              <p>
                Become a <span className="font-bold text-[20px]">Merchant</span>
              </p>
              <p>
                Start Selling Online with us. Register or signup on FAMTO with
                your store details. Be Your Own Boss.
              </p>
              <Link to="/merchant">
                <button className="mt-4 underline flex items-center ps-[61%] w-fit">
                  Know More <BiLinkExternal className="ml-2" />
                </button>
              </Link>
            </div>
          </figure>
          <div className="hidden md:flex w-full md:w-1/2 h-20 items-center gap-32 ps-8 py-20 border-l-4 mt-10 border-gray-200">
            <div className="w-1/2 grid gap-3">
              <p className="text-[17px] font-normal">
                Become a{" "}
                <span className="font-semibold text-[20px]">Merchant</span>
              </p>
              <p className="text-[14px] font-normal">
                Start Selling Online with us. Register or signup on FAMTO with
                your store details. Be Your Own Boss.
              </p>
            </div>
            <Link to="/merchant">
              <Button value="Know More" />
            </Link>
          </div>
        </div>

        <div className="grid md:flex mt-10 gap-20 md:gap-10 relative">
          <figure className="w-full md:w-1/2 h-[15rem] relative">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fdelivery-partner.svg?alt=media&token=f1124faa-30b8-4529-b97a-11379f1e126a"
              className="h-full w-full rounded-r-lg object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/40 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col justify-center md:hidden p-4 text-white bg-black bg-opacity-50">
              <p>
                Become a{" "}
                <span className="font-bold text-[20px]">Delivery Partner</span>
              </p>
              <p>
                As a delivery driver, you'll make reliable money working
                anytime, anywhere.
              </p>
              <Link to="/delivery-agent">
                <button className="mt-4 underline flex items-center ps-[61%]">
                  Know More <BiLinkExternal className="ml-2" />
                </button>
              </Link>
            </div>
          </figure>
          <div className="hidden md:flex w-full md:w-1/2 h-20 items-center gap-32 ps-8 py-20 border-l-4 mt-10 border-gray-200">
            <div className="w-1/2 grid gap-3">
              <p className="text-[17px] font-medium">
                Become a{" "}
                <span className="font-semibold text-[20px] ">
                  Delivery Partner
                </span>
              </p>
              <p className="text-[14px] font-normal">
                As a delivery driver, you'll make reliable money working
                anytime, anywhere.
              </p>
            </div>
            <Link to="/delivery-agent">
              <Button value="Know More" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <ScrollToTop />
    </>
  );
});

Delivery.displayName = "Delivery";

export default Delivery;
