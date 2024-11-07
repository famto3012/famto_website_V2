import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Apps from "../components/Apps";
import useMeasure from "react-use-measure";
import Footer from "../components/Footer";
import { homeServicesData } from "../data";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import Button from "../components/button";
import emailjs from "@emailjs/browser";
import ScrollToTop from "../components/ScrollToTop";
import { useToast } from "@chakra-ui/react";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider1.svg?alt=media&token=8eb852f2-3ef8-4548-a553-4a5e89bf7eb7",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider2.svg?alt=media&token=199768c0-e023-438b-9b12-762f7591144c",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider3.svg?alt=media&token=b17048b9-276d-4588-9c00-73d83f1a3544",
  "https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Fheroslider4.svg?alt=media&token=5a1cc6b0-0ac0-4a9b-9acb-166badf4f1d2",
];

const HomePage = React.memo(() => {
  const form = useRef();
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  let [ref, { width }] = useMeasure();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const toast = useToast();

  const isActive = (pathname) => location.pathname === pathname;

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

  const [showFirst, setShowFirst] = useState(true);

  // Toggle between two texts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.name ||
      !formData.description ||
      !formData.phoneNumber ||
      !formData.subject ||
      !formData.email
    ) {
      toast({
        title: "Error",
        description: "Please fill in all the fields before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_7nbtc5s",
        "template_ebje7y8",
        form.current,
        "BCksrsi3-GXimg3ZR" // Replace with your public key
      );

      setEmailSuccess(true);
    } catch (err) {
      setEmailSuccess(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          <nav className="absolute lg:top-[15px] md:top-[61px] right-0 flex items-center pe-12">
            <div className="hidden md:flex items-center gap-[20px] lg:gap-[70px] lg:mt-[45px] text-white">
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
              className="block md:hidden focus:outline-none mt-[-250px]"
              onClick={toggleMenu}
            >
              <IoMenu className="text-white text-[28px]" />
            </button>

            {(menuOpen || menuClosing) && (
              <div
                className={`absolute right-[5vh] w-[200px] z-30 bg-white flex flex-col items-center gap-[20px] p-4 rounded-md md:hidden ${
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
          <img
            className="m-[45px] w-[140px] h-35"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FWhite.svg?alt=media&token=3d91a036-029f-4d67-816e-19b1f8dd3f6e"
            alt="Logo"
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] grid justify-center">
        <div className="bg-gray-100 md:p-14 md:mt-5 py-5 md:flex grid md:px-20 pb-5 justify-center">
          <div className="flex flex-col justify-center items-center md:order-3 order-1 md:px-0 md:py-0">
            <p className="font-semibold text-[16px]">We are Famto</p>

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
                    <h1 className="font-[500] text-[#00ced1] text-[14px] md:text-[26px] bg-gradient-to-r from-[#00CED1] to-[#006369] bg-clip-text text-transparent">
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
                    <h1 className="font-[500] text-[#00ced1] text-[14px] md:text-[26px] bg-gradient-to-r from-[#00CED1] to-[#006369] bg-clip-text text-transparent">
                      One-Stop Solution for Everything you need
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="md:w-[55rem] flex justify-center">
          <p className="text-center md:text-[15px] text-[13px] px-4 text-[#000000]">
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
        <Link to={"/about-us"}>
          <div className="flex justify-center p-14">
            <Button value="Learn More" />
          </div>
        </Link>
      </div>
      <div className="pb-10 md:mt-8 md:8">
        <div className="p-10">
          <p>Overview of</p>
          <h1 className="text-[32px] text-[#00CED1]">Our Services</h1>
        </div>

        <div className="lg:flex grid md:grid-cols-2 gap-5 md:mx-10 mx-8">
          {homeServicesData.map((service) => (
            <div className="lg:w-1/4 border border-gray-300 rounded-lg p-8 space-y-3 hover:cursor-pointer transition-all duration-500 md:h-[400px] ease-out hover:bg-gradient-to-b from-[#00CED1] via-[#00CED1] to-[#003435] group relative">
              <h1 className="text-[#00CED1] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 group-hover:underline underline-offset-2 transition transform after:transition-all duration-500 ease-out after:ease-out group-hover:after:w-full group-hover:text-white">
                {service.service}
              </h1>
              <h2 className="font-[500] pb-14 group-hover:pb-10 transition-all duration-300 ease-out text-[20px] group-hover:text-white">
                {service.head}
              </h2>
              <p className="text-[14px] md:block pb-10 transition-all duration-500 ease-out group-hover:text-white">
                {service.content}
              </p>
              <Link to={service.path}>
                <div
                  className="flex justify-center items-center rounded-full transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 w-12 absolute bottom-8 pt-20 left-1/2 transform -translate-x-1/2"
                  onMouseEnter={() => setIsHovered(false)}
                  onMouseLeave={() => setIsHovered(true)}
                >
                  {isHovered ? (
                    <MdArrowForward className="text-white text-[38px] ease-in rounded-full transform border-4 transition-all duration-700" />
                  ) : (
                    <MdArrowOutward className="text-white text-[38px] ease-out transform transition-transform rounded-full border-4 duration-700" />
                  )}
                </div>
              </Link>
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
            <h1 className="md:text-[32px] text-[#00CED1]">Get in touch</h1>
          </div>
        </div>
        <div className="md:w-2/3">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-[2rem] md:px-[3rem] md:text-[14px]"
          >
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                required
                placeholder="Enter your phone number"
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Mail</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Enter your mail address"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                onChange={handleInputChange}
                placeholder="Give us a brief description on the matter"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
              />
            </div>

            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                placeholder="Describe the matter"
                className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                rows="4"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              {!emailSuccess && (
                <Button
                  click={sendEmail}
                  value={isLoading ? "Sending..." : "Send  Us"}
                />
              )}

              {emailSuccess && (
                <p className="text-center text-[#21958f]">
                  We have received your message and will get back to you
                  shortly!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex grid justify-between pt-10 lg:gap-5 lg:mb-0 mt-20 bg-[#F6F6F6] h-auto md:h-[30rem]">
        <div className="md:w-1/2 flex md:items-end xl:items-start mx-auto justify-center">
          <figure className="w-full lg:ps-40">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fhome-app.png?alt=media&token=dd07156a-19a0-4f36-98ab-53bbcf59531b"
              className="md:h-[27.5rem] h-[20rem] w-auto"
              alt="Famto app"
            />
          </figure>
        </div>
        <div className="md:mt-[3%] md:w-1/2 pb-10 bg-gray-100">
          <h2 className="font-semibold text-lg md:text-2xl text-center md:text-left mt-4 md:mt-0 md:pl-8">
            Download the Famto app!
          </h2>
          <div className="flex justify-center md:justify-start md:pl-8 mt-4">
            <Apps />
          </div>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto overflow-hidden mt-4 md:mt-20">
        <div className="grid md:justify-center md:text-center">
          <p className="font-[500] text-[14px] md:text-[16px]">
            These are some of our
          </p>
          <h1 className="md:text-[32px] text-[22px] text-[#00CED1]">
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

      <ScrollToTop />
    </>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
