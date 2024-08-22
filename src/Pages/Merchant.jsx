import React from "react";
import { FaArrowLeft, FaRupeeSign, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import MerchantForm from "../components/merchantForm";
import { MdExposureZero, MdOutlineSpeed } from "react-icons/md";
import { beAMerchantData, merchantDocumentsData } from "../data";
import { SiTicktick } from "react-icons/si";
import Button from "../components/button";
import Apps from "../components/Apps";
import Footer from "../components/Footer";

const Merchant = () => {
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
        <figure className="h-[50rem] md:h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FbeaMerchant.svg?alt=media&token=94c116e2-38c8-4e65-88de-294b853f9d21"
            alt="Be A Merchant logo"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col items-start">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-10">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
          <div className="text-white md:p-5 md:top-[50%] top-[10%] md:text-4xl absolute grid md:ps-10 ps-3 order-1">
            <p className="grid md:ps-8 ps-4 mb-3">
              {" "}
              <span>Come,</span> Work with us
            </p>

            <div className="relative flex items-center md:gap-4 gap-1">
              <FaArrowLeft className="md:text-[22px] text-[15px]" />
              <div className="relative flex-grow">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/30 via-[#00ced1]/10 to-transparent z-0"></div>
                <p className="relative text-[18px] border-l-4 border-[#00ced1] ps-2 z-10">
                  Famto Merchant
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex md:justify-end md:items-center items-end  mt-10 mb-10 md:p-20 order-2 p-5">
            <MerchantForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10">
        <p className="md:font-semibold">Our Offerings</p>
        <p className="text-cyan-500 md:text-[32px] text-[20px]">
          To Famto Merchants
        </p>
      </div>
      <div className="md:flex grid gap-3 mx-10">
        <div className="flex flex-col col-span-4 p-2 border border-gray-200 md:w-1/4 rounded-lg">
          <div className="grid">
            <MdExposureZero className="text-[46px] m-2 rounded  bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-2 font-semibold">Zero commission</h1>
            <p className="p-2">
              We provide our services to all our merchants with zero commision
              charges.
            </p>
          </div>
        </div>

        <div className="flex flex-col col-span-4 p-2 border border-gray-200 md:w-1/4 rounded-lg">
          <div className="grid">
            <MdOutlineSpeed className="text-[46px] p-2 m-2 rounded  bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-2 font-semibold">Fast Delivery</h1>
            <p className="p-2">
              We guarantee swift and reliable delivery services, ensuring your
              products arrive on time, every time.
            </p>
          </div>
        </div>

        <div className="flex flex-col col-span-4 p-2 border border-gray-200 md:w-1/4  rounded-lg">
          <div className="grid">
            <FaRupeeSign className="text-[46px] m-2 rounded p-2 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-2 font-semibold">
              Competitve Pricing
            </h1>
            <p className="p-2">
              We offer competitive prices without compromising on quality,
              excellent value for money.
            </p>
          </div>
        </div>

        <div className="flex flex-col col-span-4 p-2 border border-gray-200 md:w-1/4 rounded-lg">
          <div className="grid">
            <FaUsers className="text-[46px] m-2 rounded p-2 bg-[#F6F6F6] text-[#00ced1]" />
            <h1 className="text-[20px] p-2 font-semibold">
              Expand Customer Base
            </h1>
            <p className="p-2">
              Expand the boundaries of your business across various regions
              through famto
            </p>
          </div>
        </div>
      </div>
      <div className="relative md:flex grid py-10">
        <div className="md:w-1/2 relative flex items-center">
          <figure className="h-full rounded-lg flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmerchant-image.svg?alt=media&token=dc281977-e4a4-4942-9abc-7d322ae0c72a"
              alt="Merchant Image"
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/40 to-transparent pointer-events-none"></div>
          </figure>
        </div>
        <div className="md:w-1/2 grid gap-8 md:px-5 mx-3 py-5">
          <div className="flex flex-col justify-start items-start">
            <p className="font-semibold">Exclusively for</p>
            <p className="text-cyan-500 text-[32px]">Home Chefs</p>
          </div>
          <div className="grid sm:grid-cols-2 w-full gap-3">
            {aboutTableChunks.map((chunk, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {chunk.map((data, subIndex) => (
                  <div
                    key={subIndex}
                    className="text-[14px] flex gap-1 items-center"
                  >
                    <SiTicktick className="text-[#00CED1] text-[18px]" />
                    <li>{data}</li>
                  </div>
                ))}
              </ul>
            ))}
          </div>

          <div className="flex items-center md:justify-start justify-center">
            <Button value="Contact Us" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5 w-full md:flex grid">
        <div className="md:w-2/3 flex flex-col mt-5 md:mt-0 justify-start items-start md:p-5 order-2 md:order-1">
          <p className="font-semibold">Documents</p>
          <p className="text-cyan-500 md:text-[32px] text-[24px]">
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
                      <p className="border rounded-full px-4 p-2 font-[600]">
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
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmerchant-documents.svg?alt=media&token=d22117dd-bed2-4bef-ac47-faefa54e763f" />
          </figure>
        </div>
      </div>
      <div className="md:flex grid pt-10 lg:gap-5 lg:mx-5 lg:mb-0 mb-10 mt-5">
        <div className="md:w-1/2 h-fit">
          <figure className="w-full h-fit">
            <img src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fmerchant-app.png?alt=media&token=3ddaf461-4e7d-4096-b611-f9114fb8e5f5" />
          </figure>
        </div>
        <div className="md:mt-[8%] lg:bg-white pb-10 bg-gray-100">
          <h2 className="font-[500] text-[28px] text-center">Download the Famto Merchant app!</h2>
          <Apps />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Merchant;
