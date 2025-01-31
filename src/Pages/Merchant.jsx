import React, { useEffect } from "react";
import { FaArrowLeft, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdExposureZero, MdOutlineSpeed } from "react-icons/md";
import { beAMerchantData, merchantDocumentsData } from "../data";
import { SiTicktick } from "react-icons/si";
import Apps from "../components/Apps";
import Footer from "../components/Footer";
import { LuIndianRupee } from "react-icons/lu";
import MerchantForm from "../components/MerchantForm";
import Button from "../components/button";
import ScrollToTop from "../components/ScrollToTop";

const Merchant = React.memo(() => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const aboutTableChunks = chunkArray(beAMerchantData, 3);

  const documentsArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const merchantChunks = documentsArray(merchantDocumentsData, 3);

  return (
    <>
      <div className="relative w-full">
        <figure className="h-[60rem] md:h-[100vh]">
          <img
            className="w-full h-full object-cover"
            src="/merchant/beaMerchant.svg"
            alt="Be A Merchant logo"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col items-start">
          <Link to={"/"}>
            <div className="mt-2 md:mt-8 md:ms-10">
              <img
                className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
                src="/home/logo/whiteLogo.svg"
                alt="Logo"
              />
            </div>
          </Link>

          <div className="text-white md:p-5 md:top-[50%] top-[10%] md:text-4xl absolute grid md:px-10 ps-8 order-1 md:mt-0 mt-5">
            <p className="grid md:px-8 mb-3 text-[20px] md:text-[40px] lg:text-[48px] font-medium">
              <span className="text-[14px] md:text-[24px] font-extralight">
                Come,
              </span>{" "}
              Work with us
            </p>

            <div className="relative flex items-center md:gap-4 gap-3 z-20">
              <Link to={"/delivery"}>
                <FaArrowLeft className="md:text-[22px] text-[15px]" />
              </Link>
              <div className="relative flex-grow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/30 via-[#00ced1]/10 to-transparent z-0"></div>
                <p className="relative text-[16px] md:text-[20px] border-l-4 border-[#00ced1] ps-2 z-10">
                  Famto Merchant
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex justify-center md:justify-end items-center md:ml-[50rem] mt-40 md:mt-0 p-5 z-10">
            <MerchantForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10 mt-10">
        <p className="md:font-medium text-[16px]">Our offerings</p>
        <p className="text-[#00ced1] md:text-[32px] font-normal text-[20px]">
          To Famto Merchants
        </p>
      </div>
      <div className="lg:flex grid sm:grid-cols-2  gap-3 mx-10 py-5">
        <div className="flex p-3 border border-gray-200 lg:w-1/4 py-4 rounded-lg">
          <div className="grid">
            <MdExposureZero className="text-[46px] m-2 rounded  bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[16px] p-2 font-semibold">Zero commission</h1>
            <p className="p-2 font-normal text-[14px]">
              We provide our services to all our merchants with zero commision
              charges.
            </p>
          </div>
        </div>

        <div className="flex  p-3 py-4 border border-gray-200 lg:w-1/4 rounded-lg">
          <div className="grid">
            <MdOutlineSpeed className="text-[46px] p-2 m-2 rounded  bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[16px] p-2 font-semibold">Fast Delivery</h1>
            <p className="p-2 font-normal text-[14px]">
              We guarantee swift and reliable delivery services, ensuring your
              products arrive on time, every time.
            </p>
          </div>
        </div>

        <div className="flex  p-3 py-4 border border-gray-200 lg:w-1/4  rounded-lg">
          <div className="grid">
            <LuIndianRupee className="text-[46px] m-2 rounded p-2 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[16px] p-2 font-semibold">
              Competitive Pricing
            </h1>
            <p className="p-2 font-normal text-[14px]">
              We offer competitive prices without compromising on quality,
              excellent value for money.
            </p>
          </div>
        </div>

        <div className="flex  p-3 py-4 border pb-3 border-gray-200 lg:w-1/4 rounded-lg">
          <div className="grid">
            <FaUsers className="text-[46px] m-2 rounded p-2 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[16px] p-2 font-semibold">
              Expand Customer Base
            </h1>
            <p className="p-2 font-normal text-[14px]">
              Expand the boundaries of your business across various regions
              through famto
            </p>
          </div>
        </div>
      </div>

      <div className="relative md:flex grid py-10">
        <div className="md:w-1/2 relative flex items-center">
          <figure className="h-full w-full rounded-r-lg flex">
            <img
              src="/merchant/merchant-image.svg"
              alt="Merchant Image"
              className="w-full h-full object-cover rounded-r-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/40 to-transparent pointer-events-none"></div>
            {/* Text overlay for screens below md */}
            <div className="md:hidden absolute inset-0 flex flex-col justify-center items-start ps-10 text-white text-center">
              <p className="font-semibold">Exclusively for</p>
              <p className="text-[32px]">Home Chefs</p>
            </div>
          </figure>
        </div>
        <div className="md:w-1/2 grid gap-8 md:px-5 mx-5 py-5">
          {/* Text for screens md and above */}
          <div className="hidden md:flex flex-col justify-start items-start">
            <p className="font-semibold">Exclusively for</p>
            <p className="text-[#00ced1] text-[32px]">Home Chefs</p>
          </div>
          <div className="grid sm:grid-cols-2 w-full gap-3">
            {aboutTableChunks.map((chunk, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {chunk.map((data, subIndex) => (
                  <div
                    key={subIndex}
                    className="text-[14px] flex gap-2 items-center"
                  >
                    <SiTicktick className="text-[#00CED1] text-[18px]" />
                    <li>{data}</li>
                  </div>
                ))}
              </ul>
            ))}
          </div>
          <Link to={"/contact-us"}>
            <div className="flex items-center md:justify-start justify-center">
              <Button value="Contact Us" />
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 p-5 w-full md:flex grid">
        <div className="md:w-2/3 flex flex-col mt-5 md:mt-0 justify-start items-start md:p-5 order-2 md:order-1">
          <p className="font-semibold">Documents</p>
          <p className="text-[#00ced1] md:text-[32px] text-[24px]">
            That's all you need !
          </p>
          <p className="md:text-[14px] text-[10px] bg-white rounded-lg mt-3 p-2 border">
            Send scanned soft copies of below documents through mail or whatsapp
          </p>
          <div className="flex">
            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-20 gap-2 mt-8">
              {merchantChunks.map((chunk, index) => (
                <ul key={index} className="flex flex-col gap-2">
                  {chunk.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-[14px] flex gap-2 items-center font-[600]"
                    >
                      <p className="border rounded-full px-3.5 p-2 bg-white font-[600]">
                        {item.number}
                      </p>
                      <li>{item.data}</li>
                    </div>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 order-1 md:order-2">
          <figure>
            <img src="/merchant/merchant-documents.svg" />
          </figure>
        </div>
      </div>
      <div className="lg:flex grid pt-10 lg:gap-5 lg:mx-5 lg:mb-0 mt-5">
        <div className="lg:w-1/2 md:w-[20rem] h-fit flex justify-center">
          <figure className="w-full h-fit flex justify-center">
            <img src="/merchant/merchant-app.png" />
          </figure>
        </div>
        <div className="lg:mt-[8%] lg:bg-white pb-10 pt-5 lg:pt-0 bg-gray-100">
          <h2 className="md:font-[500] md:text-[32px] text-[16px] font-semibold text-center">
            Download the Famto Merchant app!
          </h2>
          <Apps />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
});

Merchant.displayName = "Merchant";

export default Merchant;
