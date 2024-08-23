import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Apps from "../components/Apps";
import useMeasure from "react-use-measure";
import Footer from "../components/Footer";
import { homeServicesData } from "../data";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import Button from "../components/button";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider1.svg?alt=media&token=8eb852f2-3ef8-4548-a553-4a5e89bf7eb7",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider2.svg?alt=media&token=199768c0-e023-438b-9b12-762f7591144c",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider3.svg?alt=media&token=b17048b9-276d-4588-9c00-73d83f1a3544",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider4.svg?alt=media&token=5a1cc6b0-0ac0-4a9b-9acb-166badf4f1d2",
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const XTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const smallDeviceWidthThreshold = 400; // Example threshold for small devices
    const screenWidth = window.innerWidth;

    // Calculate finalPosition based on screenWidth
    let finalPosition;
    if (screenWidth <= smallDeviceWidthThreshold) {
      finalPosition = -screenWidth - 1300; // Adjust as needed for small devices
    } else {
      finalPosition = -width - 500; // Default value for larger devices
    }

    controls = animate(XTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [XTranslation, width]);

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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [showFirst, setShowFirst] = React.useState(true);

  // Toggle between two texts every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const text1Variants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  const text2Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
  };

  return (
    <>
      <div className="relative flex w-full">
        <div className="relative flex overflow-hidden h-[50vh] md:h-[70vh]">
          {images.map((src, index) => {
            return (
              <motion.img
                key={index}
                src={src}
                alt="Slider image"
                className="relative object-cover transition-all duration-500 ease-in-out m-0"
                initial={{ width: "20%", height: "100%" }} // Initial opacity set to 0
                animate={{
                  width: currentIndex === index ? "40%" : "20%",
                  height: "100%",
                  // Adjust opacity for active and inactive images
                }}
                style={{
                  left: `${index * 0}%`, // Spread images evenly
                }}
              />
            );
          })}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/25 flex flex-col items-center justify-center">
          <nav className="absolute top-[3vh] md:top-0 right-0 flex items-center pe-[30px]">
            <div className="text-white md:flex items-center gap-[70px] hidden md:mt-[35px]">
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
              <a
                href="/it-service"
                className="text-white/75 hover:text-white hover:underline underline-offset-4"
              >
                IT Services
              </a>
            </div>

            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <IoMenu className="text-white text-[28px]" />
            </button>

            {(menuOpen || menuClosing) && (
              <div
                className={`absolute top-[5vh] right-[5vh] w-[200px] z-30 bg-white flex flex-col items-center gap-[20px] p-4 rounded-md md:hidden ${
                  menuOpen
                    ? "animate-slideInFromTopRight"
                    : "animate-slideOutToBottomLeft"
                }`}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="border-b-2 border-gray-200 w-full flex justify-center p-3"
                >
                  Home
                </Link>
                <Link
                  to="/delivery"
                  onClick={toggleMenu}
                  className="border-b-2 border-gray-200 w-full flex justify-center pb-3"
                >
                  Delivery
                </Link>
                <Link
                  to="/it-service"
                  className="rounded-md pb-3 hover:bg-white hover:text-black"
                  onClick={toggleMenu}
                >
                  IT Services
                </Link>
              </div>
            )}
          </nav>
          <img
            className="m-[45px] w-[140px] h-35"
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
            alt="Logo"
          />
        </div>
      </div>

      <div className="bg-[#F3F3F3] grid justify-center">
        <div className="bg-gray-100 md:p-10 py-5 md:flex grid md:px-20 pb-5 justify-center">
          <div className="flex flex-col justify-center items-center md:order-3 order-1 md:px-0 md:py-0">
            <p className="font-semibold">We are Famto</p>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <AnimatePresence mode="wait">
                {showFirst ? (
                  <motion.div
                    key="text1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={text1Variants}
                    transition={{ duration: 0.1 }}
                  >
                    <h1 className="font-[500] text-[#00ced1] md:text-[26px] bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                      The Complete App
                    </h1>
                  </motion.div>
                ) : (
                  <motion.div
                    key="text2"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={text2Variants}
                    transition={{ duration: 0.1 }}
                  >
                    <h1 className="font-[500] text-[#00ced1] md:text-[26px] text-[14px] bg-gradient-to-r from-[#00CED1] to-[#006369] bg-clip-text text-transparent">
                      One-Stop Solution for Everything you need
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="md:w-[55rem] flex justify-center">
          <p className="text-center md:text-[15px] text-[13px] px-4">
            Introducing Famto, the ultimate all-in-one app designed to simplify
            your life! Whether you need a quick delivery, a reliable taxi,
            expert online consultation, or a skilled handyman, we've got you
            covered. Our app brings a world of convenience right to your
            fingertips, offering a wide range of services tailored to your
            needs. Say goodbye to juggling multiple apps—now, everything you
            need is just a tap away. Experience seamless service, unparalleled
            flexibility, and the peace of mind that comes with knowing help is
            always within reach
          </p>
        </div>
        <div className="flex justify-center p-8">
          <Button value="Learn More" />
        </div>
      </div>
      <div className="pb-10 md:mt-8 md:8">
        <div className="p-10">
          <p>Overview of</p>
          <h1 className="text-[32px] text-cyan-500">Our Services</h1>
        </div>

        <div className="lg:flex grid md:grid-cols-2 gap-5 mx-10">
          {homeServicesData.map((service) => (
            <div className="lg:w-1/4 border border-gray-300 rounded-lg p-8 space-y-3 hover:cursor-pointer transition-all hover:bg-gradient-to-b from-[#00CED1] via-[#00CED1] to-black/90 group">
              <h1 className="text-[#00CED1] relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:text-white">
                {service.service}
              </h1>
              <h2 className="font-[500] pb-14 group-hover:pb-8 hover:transition-all hover:ease-in-out text-[20px] group-hover:text-white">
                {service.head}
              </h2>
              <p className="text-[14px] pb-8 group-hover:text-white">
                {service.content}
              </p>
              <div
                className="flex justify-center right-2 rounded-full hover:ease-in-out opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onMouseEnter={() => setIsHovered(false)}
                onMouseLeave={() => setIsHovered(true)}
              >
                {isHovered ? (
                  <MdArrowForward className="text-white text-[46px] ease-in-out rounded-full border-4" />
                ) : (
                  <MdArrowOutward className="text-white text-[46px] ease-in-out rounded-full border-4" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex grid md:border md:mt-10 border-gray-300 rounded-lg md:mx-10 md:p-10">
        <div className="md:w-1/3">
          <figure className="ps-8">
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fwaving-hand.svg?alt=media&token=a7133b52-0416-41b9-a9f2-d5c69b998a27" />
          </figure>
          <div className="md:p-10 px-10 py-5 md:mt-10">
            <p>Let's</p>
            <h1 className="md:text-[32px] text-cyan-500">Get in touch</h1>
          </div>
        </div>
        <div className="md:w-2/3">
          <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-[2rem] md:px-[3rem] md:text-[14px]">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Mail</label>
              <input
                type="email"
                placeholder="Enter your mail address"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Give us a brief description on the matter"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-gray-700">Description</label>
              <textarea
                placeholder="Describe the matter"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                rows="4"
              ></textarea>
            </div>
            <div>
              <Button value="Send Us" />
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex grid justify-between pt-10 lg:gap-5 lg:mb-0 mt-14 bg-[#F6F6F6] h-[30rem]">
        <div className="md:w-1/2 flex md:items-end xl:items-start mx-auto justify-center">
          <figure className="w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fhome-app.png?alt=media&token=dd07156a-19a0-4f36-98ab-53bbcf59531b"
              className="md:h-[28rem] h-[26rem] w-fit"
            />
          </figure>
        </div>
        <div className="md:mt-[3%] pb-10 bg-gray-100">
          <h2 className="font-[600] md:text-[28px] text-center md:text-start mt-4 md:mt-0 md:ps-8">
            Download the Famto app!
          </h2>
          <Apps />
        </div>
      </div>

      <div className="max-w-[90%] mx-auto overflow-hidden mt-[400px] md:mt-8">
        <div className="grid md:justify-center md:text-center">
          <p className="font-[500] text-[14px] md:text-[18px]">
            These are some of our
          </p>
          <h1 className="md:text-[32px] text-[22px] text-cyan-500">
            Esteemed Clients
          </h1>
        </div>

        <motion.div
          className="flex mb-[50px]"
          ref={ref}
          style={{ x: XTranslation }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim1.svg?alt=media&token=3481a4b4-1800-499c-a020-f8c0e22ab12d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fnewclientanim.svg?alt=media&token=11521e91-307c-4171-856b-f4ce8371467c"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim3.svg?alt=media&token=c1dedae9-9e6c-477c-97ab-165230b73457"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim4.svg?alt=media&token=4953922b-9935-4e2c-8a2a-e970d6c1f7a6"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim5.svg?alt=media&token=708f08a2-c504-479b-a152-70311fdc9c7d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fnewerlogo.svg?alt=media&token=3f77029c-efe9-4249-90bf-faf43755db6f"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim7.svg?alt=media&token=d9e255e8-26bf-479f-884f-987ff6a17b61"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim8.svg?alt=media&token=15f0655d-4328-40f5-95c1-dedb13ae6232"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim9.svg?alt=media&token=07942576-1496-4120-a761-a01958cabb2d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim10.svg?alt=media&token=9173dd0b-aec9-4ae7-af36-0bfb172d9f51"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim1.svg?alt=media&token=3481a4b4-1800-499c-a020-f8c0e22ab12d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fnewclientanim.svg?alt=media&token=11521e91-307c-4171-856b-f4ce8371467c"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim3.svg?alt=media&token=c1dedae9-9e6c-477c-97ab-165230b73457"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim4.svg?alt=media&token=4953922b-9935-4e2c-8a2a-e970d6c1f7a6"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim5.svg?alt=media&token=708f08a2-c504-479b-a152-70311fdc9c7d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fnewerlogo.svg?alt=media&token=3f77029c-efe9-4249-90bf-faf43755db6f"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim7.svg?alt=media&token=d9e255e8-26bf-479f-884f-987ff6a17b61"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim8.svg?alt=media&token=15f0655d-4328-40f5-95c1-dedb13ae6232"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim9.svg?alt=media&token=07942576-1496-4120-a761-a01958cabb2d"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fanim10.svg?alt=media&token=9173dd0b-aec9-4ae7-af36-0bfb172d9f51"
            alt=""
          />
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
