import React, { useEffect } from "react";
import { FaArrowLeft, FaRegHeart, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import AgentForm from "../components/AgentForm";
import Footer from "../components/Footer";
import Apps from "../components/Apps";
import { LuCalendarCheck, LuHeart, LuIndianRupee } from "react-icons/lu";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const DeliveryAgent = () => {
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
    <>
      <div className="relative w-full">
        <figure className="h-[50rem] md:h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fdelivery-agent.svg?alt=media&token=247f8151-2725-4808-a421-8cdcd7853236"
            alt="Be A Merchant logo"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col items-start ">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-10">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
          <div className="text-white md:p-5 md:top-[50%] top-[10%] md:text-4xl absolute grid md:px-10 ps-8 order-1 md:mt-0 mt-8">
            <p className="grid md:px-8 mb-3 text-[20px] md:text-[40px] lg:text-[48px] font-medium">
              <span className="text-[14px] md:text-[24px] font-extralight">
                Come,
              </span>{" "}
              Work with us
            </p>

            <div className="relative flex items-center md:gap-4 gap-3">
              <Link to={"/"}>
                <button>
                  <FaArrowLeft className="md:text-[22px] text-[15px]" />
                </button>
              </Link>
              <div className="relative flex-grow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/30 via-[#00ced1]/10 to-transparent z-0"></div>
                <p className="relative text-[15px] md:text-[20px] border-l-4 border-[#00ced1] ps-2 z-10">
                  Famto Delivery Agent
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex justify-center md:justify-end items-center mt-28 md:mt-0 p-5">
            <AgentForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10">
        <p className="md:font-semibold">Why be a</p>
        <p className="text-[#00ced1] md:text-[32px] text-[20px]">
          Famto Delivery Agent?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-8 mb-[3rem]">
        <div className="flex flex-col  p-6 border border-gray-200  rounded-lg ">
          <div className="grid ">
            <LuCalendarCheck className="text-[46px] mb-[3rem] rounded p-1 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-1 font-semibold">Flexible Schedule</h1>
            <p className="p-1 text-[14px]">
              Your vehicle, Your time. Say bye to fixed working hours and
              shifts. Work on the time available for you.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-6 border border-gray-200  rounded-lg">
          <div className="grid">
            <LuIndianRupee className="text-[46px] mb-[3rem] p-1 rounded  bg-[#F6F6F6] text-[#00ced1] " />
            <h1 className="text-[20px] p-1 font-semibold">Earn More</h1>
            <p className="p-1 text-[14px] ">
              We provide our delivery agents the best in market compensation.
              Join us and earn more.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-6 border border-gray-200   rounded-lg">
          <div className="grid">
            <LuHeart className="text-[46px] mb-[3rem] rounded p-1 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-1 font-semibold">We're Family</h1>
            <p className="p-1 text-[14px]">
              Work without hierarchies. Work like a family in famto. All we ask
              is your full commitment to work.
            </p>
          </div>
        </div>

        <div className="flex flex-col  p-6 border border-gray-200  rounded-lg">
          <div className="grid">
            {/* <FmdGoodOutlinedIcon fontSize="large" className=" mb-[3rem] rounded bg-[#F6F6F6] text-[#00ced1] " /> */}
            <FmdGoodOutlinedIcon
              className="mb-[3rem] p-1 rounded bg-[#F6F6F6] text-[#00ced1]"
              style={{ fontSize: "50px" }}
            />

            <h1 className="text-[20px] p-1 font-semibold">Be in your city</h1>
            <p className="p-1 text-[14px]">
              No more job relocations. Cruise with your favourite playlist
              turned “ON” while being in your hometown.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mb-[3rem] py-10">
        <div className="flex flex-col justify-center items-center mb-[2rem] ">
          <p className="md:font-semibold">That’s all we ask for</p>
          <p className="text-[#00ced1] md:text-[32px] text-[20px]">
            Working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg bg-white">
            <h4 className="text-xl font-semibold mb-2">Age</h4>
            <p className="text-[14px]  mb-8">
              You should be at least 18 years or older to be our delivery agent
            </p>
            <span className="absolute bottom-4 right-4 text-gray-300 text-3xl">
              01
            </span>
          </div>

          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg bg-white">
            <h4 className="text-xl font-semibold mb-2">Vehicle</h4>
            <p className=" text-[14px] mb-8">
              You should have a car, scooter, or bicycle for completing the
              delivery
            </p>
            <span className="absolute bottom-4 right-4 text-gray-300 text-3xl">
              02
            </span>
          </div>

          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg bg-white ">
            <h4 className="text-xl font-semibold mb-2">Documents</h4>
            <p className="text-[14px] mb-8">
              Driver’s license and Social Security number (National Identifiers)
              <span className="absolute bottom-4 right-4 text-gray-300 text-3xl">
                03
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex grid pt-10 lg:gap-5  lg:mb-0 mb-10 mt-5">
        <div className="lg:w-1/2 md:w-full h-fit flex lg:justify-center">
          <figure className="w-full h-fit flex justify-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fdeliveryagent-app.svg?alt=media&token=b5e2a761-b4ae-4705-903d-046d37fac4d1" />
          </figure>
        </div>
        <div className="lg:mt-[8%] lg:bg-white pb-10 pt-5 lg:pt-0 bg-gray-100 lg:w-1/2 ">
          <h2 className="font-[600] text-[16px] lg:text-[24px] md:text-[20px] text-center lg:text-start ">
            Download the Famto Delivery Agent app!
          </h2>
          <Apps />
        </div>
      </div>


      <Footer />
    </>
  );
};

export default DeliveryAgent;
