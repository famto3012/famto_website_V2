import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import Footer from "../components/Footer";
import Button from "../components/button";
import ScrollToTop from "../components/ScrollToTop";

const ITService = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const location = useLocation();

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

  const services = [
    "UI/UX Design",
    "Android Apps",
    "iOS Apps",
    "web Development",
    "Frontend Developent",
    "Backend Development",
    "App updates",
    "Testing",
    "Bug Fixing",
    "Annual Maintenance",
  ];

  return (
    <main className="relative">
      <div className="relative w-full">
        <div className="relative">
          <figure className="h-[20rem] md:h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FIT-service%20Banner.svg?alt=media&token=3d312e53-9c70-4141-96e8-b6442f758184"
              alt="IT-service Banner"
            />
          </figure>
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"></div>
        </div>

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

          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative inline-block p-4 border border-white text-white bg-opacity-50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 translate-y-1/2"></div>
              <span>Advance Innovative</span>
            </div>
            <h1 className="text-white text-[1.5rem] font-light sm:text-[2rem] md:text-[3rem] lg:text-[4rem] mt-2 lg:mt-[-10px]">
              IT SOLUTION
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="grid justify-center md:mt-20 mt-8">
          <p className="flex justify-center text-[16px] font-medium">
            Our Services include
          </p>
          <h1 className="text-[#00CED1]  md:text-[32px] font-normal text-[20px]">
            Design & Development
          </h1>
        </div>
        <div className="md:flex grid gap-10 md:mx-5 xl:mx-0 justify-center py-10 mx-6">
          <div className="relative flex items-end justify-end md:justify-start">
            <figure className="md:h-[15rem] h-[10rem]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmobile_application.svg?alt=media&token=b93e7ff7-8282-4f93-a8af-808f6c5be7d5"
                alt="mobile-application"
              />
            </figure>
            <p className="absolute p-2 px-5 m-5 rounded-3xl bg-gray-50">
              Mobile Applications
            </p>
          </div>
          <div className="relative flex items-end justify-end md:justify-start">
            <figure className="md:h-[15rem] h-[10rem]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fweb-application.svg?alt=media&token=1a512533-6f6d-42ee-b068-dae1e00245be"
                alt="websites"
              />
            </figure>
            <p className="absolute p-2 px-5 m-5 rounded-3xl bg-gray-50">
              Websites
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mx-5 py-10 md:py-0">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-2 w-fit px-4 py-2 bg-gray-100 rounded-3xl text-[12px] sm:text-[14px] md:text-[16px]"
            >
              <SiTicktick className="text-green-600 text-[14px] font-normal" />
              <p>{service}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:my-10  md:mb-0">
          <Link to="/contact-us">
            {" "}
            <Button value="Contact Us" />
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 mt-14 md:flex grid md:px-20  justify-between">
        <div className="flex flex-col justify-center items-end md:order-3 order-1 px-5 py-5 md:px-0 md:py-0">
          <p className="font-semibold">Why Famto</p>
          <p className="text-[#00CED1] text-[32px]">IT Services?</p>
        </div>

        <p className="md:w-1/2 px-5 md:py-10 py-5 text-[14px] md:order-1 order-2">
          Welcome to Famto IT Services, your go-to solution for innovative
          website and mobile application development. We specialize in crafting
          bespoke digital experiences that elevate brands and drive success. Our
          expert team of designers, developers, and strategists work
          collaboratively to bring your vision to life with cutting-edge
          technology and creativity.
        </p>

        <img
          className="hidden md:block md:order-2"
          src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FVector.svg?alt=media&token=e8ad9498-ea74-471f-bd94-a646d258a60e"
          alt="vector"
        />
      </div>
      <div className="grid items-center text-center justify-center md:mt-20 mt-10">
        <p className="font-[500]">Our </p>
        <p className="text-[#00CED1] text-[28px] font-[500]">Process</p>
      </div>
      <div className=" mt-10 md:gap-5 md:flex">
        <div className="md:w-1/2 w-full h-full relative">
          <figure className="w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fit%20service.svg?alt=media&token=6da1923d-2519-448a-8a2c-88abb68f6c24"
              alt="process"
            />
          </figure>
        </div>

        <div class="flex flex-col mx-auto px-5">
          <div class="flex items-center md:mt-0 mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">01</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Consultation</span>
                Understanding your business needs and objectives.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">02</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Planning</span>
                Crafting a strategic plan to achieve your goals.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">03</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Design</span>
                Creating visually appealing and user-friendly designs.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">04</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Development</span>
                Building robust and scalable websites and apps.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">05</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Testing</span>
                Conducting thorough testing to ensure flawless performance.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">06</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Launch</span>
                Deploying your project and ensuring a smooth launch.
              </p>
            </div>
          </div>
          <div class="flex items-center mt-5">
            <div class="relative">
              <div class="w-10 h-10 bg-white border-2 border-[#00CED1] rounded-full flex items-center justify-center">
                <span class="text-[#00CED1] font-semibold">07</span>
              </div>
            </div>
            <div class="pl-6 flex gap-2">
              <p>
                <span class="font-semibold mr-1">Support</span>
                Providing ongoing maintenance and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-20 my-10">
        <div className="grid justify-center md:mt-14 m-8">
          <p className="flex justify-center font-semibold">FAMTO</p>
          <h1 className="text-[#00CED1]  md:text-[34px] text-[20px]">
            Our Advantages
          </h1>
        </div>
        <div className="lg:flex grid sm:grid-cols-2 gap-5 md:mx-20 mx-5">
          <div className="border border-gray-300 rounded-lg md:p-7 p-4 lg:w-1/4">
            <h1 className="font-semibold mb-3">Expertise and Experience</h1>
            <p className="text-[14px] font-normal">
              Whether it's through advanced technology, skilled professionals,
              or innovative solutions, emphasize how your services deliver
              superior results.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg md:p-7 p-4 lg:w-1/4">
            <h1 className="font-semibold mb-3">Client-Centric Approach</h1>
            <p className="text-[14px] font-normal">
              We prioritize understanding your needs and delivering solutions
              that exceed your expectations.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg md:p-7 p-4 lg:w-1/4">
            <h1 className="font-semibold mb-3">Innovative Solutions</h1>
            <p className="text-[14px] font-normal">
              We stay ahead of the curve by adopting the latest technologies and
              trends in web and mobile app development.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg md:p-7 p-4 lg:w-1/4">
            <h1 className="font-semibold mb-3">Reliable Support</h1>
            <p className="text-[14px] font-normal">
              Our commitment doesn't end with project delivery; we provide
              continuous support to keep your digital assets running smoothly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
});

ITService.displayName = "ITService"

export default ITService;
