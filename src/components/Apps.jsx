import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Apps = () => {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <>
      <div>
        <form className="flex flex-col gap-[20px] items-center lg:items-start mx-8 ">
          <p className="max-w-[100%] text-[13px] text-center  lg:text-start sm:text-[16px] lg:text-[14px] md:max-w-[500px] mt-5">
            We will send you a link, open it on your phone to download the app.
          </p>
          <div className="flex gap-[20px] justify-center lg:justify-start w-full ">
            <label className="flex items-center">
              <input
                type="radio"
                value="email"
                checked={isEmail}
                onClick={() => setIsEmail(true)}
                className="mr-2"
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="phone"
                checked={!isEmail}
                onClick={() => setIsEmail(false)}
                className="mr-2 ml-3"
              />
              Phone
            </label>
          </div>
          <div className="flex w-fit gap-[10px] md:gap-[20px]">
            {isEmail ? (
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md outline-none border focus:outline-none md:w-fit  w-32"
              />
            ) : (
              <input
                type="text"
                placeholder="Phone"
                className="p-2 rounded-md outline-none border focus:outline-none md:w-fit  w-32"
              />
            )}

            <div className="bg-[#00ced1] flex  lg:px-10 md:px-[7px] px-1 text-white gap-2 items-center rounded-lg md:w-fit hover:bg-black hover:gap-6 transition-all ">
              Share Link <FaArrowRight />
            </div>
          </div>
          <div className="mt-5 gap-2 ">
            <p>Download from</p>

            <div className="flex gap-3 mt-5 ">
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fplay-store.svg?alt=media&token=cd936c30-0133-432e-af3f-b0817cdd03bc"
                  className=" md:border-gray-800 rounded-lg border-white h-10"
                />
              </a>
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fapp-store.svg?alt=media&token=a6ae83f9-23a9-4a69-829d-a69801982838"
                  className=" md:border-gray-800 rounded-lg border-white h-10"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Apps;
