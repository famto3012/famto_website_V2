import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsEmojiGrin } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdOutlineVerifiedUser, MdSpeed} from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Delivery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

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
          <figure className="h-[10rem] md:h-[70vh]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FDelivery.svg?alt=media&token=68ca57aa-1fa9-457f-9562-f5c36bb535f3"
              className="w-full h-full object-cover"
            ></img>
          </figure>
        </div>
        <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30"></div>
        <div className="absolute top-0 inset-0">
          <nav className="flex items-center justify-between h-[10vh] p-4">
            <Link to="/" className="mt-2 md:mt-8 md:ml-[40px]">
              <img
                className="w-[6rem] h-[3rem] md:w-[10rem] md:h-[4rem] pl-[1rem] md:pl-[2rem] transition-all"
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Flogo.svg?alt=media&token=08e766da-ec03-4d84-b665-212f06c23ff3"
                alt="Logo"
              />
            </Link>

            <div className="hidden md:flex items-center gap-[20px] lg:gap-[70px] mt-4 lg:mt-[35px] text-white">
              <Link
                to="/"
                className="text-white/75 hover:text-white hover:underline underline-offset-4"
              >
                Home
              </Link>
              <Link
                to="/delivery"
                className="text-white/75 hover:text-white hover:underline underline-offset-4"
              >
                Delivery
              </Link>
              <Link
                to="/it-service"
                className="text-white/75 hover:text-white hover:underline underline-offset-4"
              >
                IT Services
              </Link>
            </div>

            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <IoMenu className="text-white text-[24px] sm:text-[28px]" />
            </button>

            {(menuOpen || menuClosing) && (
              <div
                className={`absolute top-[10vh] right-[5vh] w-[150px] sm:w-[200px] z-30 backdrop-blur-lg text-white flex flex-col items-center gap-[10px] sm:gap-[20px] p-4 rounded-md md:hidden ${
                  menuOpen
                    ? "animate-slideInFromTopRight"
                    : "animate-slideOutToBottomLeft"
                }`}
              >
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/delivery" onClick={toggleMenu}>
                  Delivery
                </Link>
                <Link to="/it-service" onClick={toggleMenu}>
                  IT Services
                </Link>
              </div>
            )}
          </nav>

          <div className="absolute top-[25%] left-10">
            <p className="text-white text-[14px] sm:text-[20px] md:text-[25px] w-fit">
              Reliable & Fast
            </p>
            <h1 className="text-white text-[1.5rem] font-light sm:text-[2rem] md:text-[3rem] lg:text-[4rem] mt-2 lg:mt-[-10px]">
              Delivery Services
            </h1>
          </div>
        </div>
      </main>
      <div className="grid justify-center md:mt-14 mt-8">
        <p className="flex justify-center">we Offer</p>
        <h1 className="text-cyan-500  md:text-[34px] text-[20px]">
          Various Delivery Services
        </h1>
      </div>
      <div className="md:flex gap-4 grid my-5 md:mx-10 mx-5">
        <div className="relative rounded-lg">
          <figure>
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Forder_anything.svg?alt=media&token=fda50c9f-df55-4cc5-a867-00d8b15554f2" />
          </figure>
          <p className="absolute inset-0 flex items-end p-5 text-[28px] text-white">
            Order Anything
          </p>
        </div>
        <div className="relative">
          <figure>
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fcustomer-order.svg?alt=media&token=edfdae38-58ef-45e1-9a48-1b621bf53ee0" />
          </figure>
          <p className="absolute inset-0 flex items-end p-5 text-[28px] text-white">
            Custom Order
          </p>
        </div>
        <div className="relative rounded-lg">
          <figure className="rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fpickanddrop.svg?alt=media&token=6b817bff-124a-499f-a882-8f29d7e6da78"
              className="rounded-xl"
            />
          </figure>
          <p className="absolute inset-0 flex items-end p-5 text-[28px] text-white">
            Pick & Drop
          </p>
        </div>
        <div className="relative">
          <figure>
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FscheduledOrder.svg?alt=media&token=bce66bb0-63a7-469d-b3dd-a1e94cc52e8b" />
          </figure>
          <p className="absolute inset-0 flex items-end p-5 text-[28px] text-white">
            Schedule Order
          </p>
        </div>
      </div>
      <div className="bg-gray-100 pb-10 mt-14">
        <div className="p-10">
          <p>why Famto</p>
          <h1 className="text-[32px] text-cyan-500">Delivery Services</h1>
        </div>
        <div className="md:flex grid gap-5 md:mx-10 mx-5">
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] my-3">Exceptional Quality</h1>
            <p>
              Our products are sourced from top-tier suppliers, ensuring premium
              quality and freshness with every delivery. We prioritize
              maintaining the highest standards in all our offerings.
            </p>
            <div className="flex justify-end">
              <MdOutlineVerifiedUser className="text-[42px] items-end text-cyan-500 " />
            </div>
          </div>
          <div className="bg-white grid rounded-lg p-5 justify-between">
            <h1 className="font-[500] my-3">Fast and Reliable Delivery</h1>
            <p>
              We guarantee swift and reliable delivery services, ensuring your
              products arrive on time, every time. Our efficient logistics
              minimize waiting time, providing a seamless experience.
            </p>
            <div className="flex justify-end ">
              <MdSpeed className="text-[42px] items-end text-cyan-500 " />
            </div>
          </div>
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] my-3">Competitve Pricing</h1>
            <p>
              We offer competitive prices without compromising on quality,
              making our products an excellent value for money. Our customers
              get the best deals, ensuring satisfaction and repeat business.
            </p>
            <div className="flex justify-end">
              <FaIndianRupeeSign className="text-[42px] items-end text-cyan-500 " />
            </div>
          </div>
          <div className="bg-white grid justify-between rounded-lg p-5">
            <h1 className="font-[500] my-3">Customer Satisfication</h1>
            <p>
              We are committed to customer satisfaction, offering responsive
              customer service and hassle-free returns. Our focus is on building
              long-term relationships with our customers.
            </p>
            <div className="flex justify-end">
              <BsEmojiGrin className="text-[42px] items-end text-cyan-500 " />
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center md:mt-14 mt-8">
        <p className="flex justify-center">Come</p>
        <h1 className="text-cyan-500  md:text-[34px] text-[20px]">
          Work with us
        </h1>
      </div>
      <div className="w-full mb-10">
        <div className="md:flex grid mt-10 md:gap-10 gap-20">
          <figure className="md:w-[60rem]">
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmerchant.svg?alt=media&token=c12c453c-0bf0-45c4-8e22-a40753a11c8f" />
          </figure>
          <div className="flex h-20 items-center gap-24 ps-10 border-l-4 mt-10 border-gray-200">
            <div className="w-1/2 grid gap-3">
              <p>
                Become a <span className="font-bold">Merchant</span>
              </p>
              <p>
                Start Selling Online with us. Register or signup on FAMTO with
                your store details. Be Your Own Boss.
              </p>
            </div>
            <button className="text-cyan-500 underline flex justify-end items-end">
              Know More <BiLinkExternal />
            </button>
          </div>
        </div>
        <div className="md:flex grid mt-28 md:mt-10 pb-10 md:gap-10 gap-20">
          <figure className="md:w-[50rem]">
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fdelivery-partner.svg?alt=media&token=f1124faa-30b8-4529-b97a-11379f1e126a" />
          </figure>
          <div className="flex h-20 items-center gap-24 ps-10 border-l-4 mt-10 border-gray-200">
            <div className="w-1/2 grid gap-3">
              <p>
                Become a <span className="font-bold">Delivery Partner</span>
              </p>
              <p>
                As a delivery driver, you'll make reliable money working
                anytime, anywhere.
              </p>
            </div>
            <button className="text-cyan-500 underline flex justify-end items-end">
              Know More <BiLinkExternal />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;
