import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Apps = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [linkStatus, setLinkStatus] = useState(false);
  const [contact, setContact] = useState({
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(contact);
  };

  const sendLink = (e) => {
    e.preventDefault();
    setLinkStatus(true);
    console.log("Link Button clicked");
  };

  return (
    <>
      <div>
        <form className="flex flex-col gap-[20px] items-center lg:items-start mx-8 md:mx-0">
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
          <div className=" grid md:flex w-fit gap-[10px] md:gap-[20px]">
            {isEmail ? (
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-2 rounded-md outline-none border focus:outline-none md:w-72  w-full"
              />
            ) : (
              <input
                type="text"
                name="phone"
                value={contact.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="p-2 rounded-md outline-none border focus:outline-none md:w-72  w-full"
              />
            )}

            <button onClick={(e) => sendLink(e)}>
              {!linkStatus && (
                <p className="bg-[#00ced1] flex lg:px-10 h-full md:px-[7px] px-3 p-2 text-center justify-center text-white gap-1 md:gap-2 items-center rounded-lg md:w-fit hover:bg-black transition-all group relative over:">
                 <p className='transform transition-transform duration-300 group-hover:-translate-x-1'>Share Link</p>
                 <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </p>
              )}
              {linkStatus && (
                <p className="bg-[#0E6500] flex lg:px-10 h-full md:px-[7px] text-white gap-1 md:gap-2 items-center rounded-lg md:w-fit transition-all ">
                <TiTick className="transform transition-transform duration-300 group-hover:-translate-x-2 text-[22px]" />
                <p className='transform transition-transform duration-300 group-hover:translate-x-1'>Link Shared</p>
                </p>
              )}
            </button>
          </div>
          <div className="mt-5 gap-2 ">
            <p>Download from</p>

            <div className="flex gap-3 mt-5 ">
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fplay-store.png?alt=media&token=c94ca732-53fa-4343-87c8-39f138fdf36f"
                  className=" md:border-gray-800 rounded-lg border-white h-12"
                />
              </a>
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fapp-store.png?alt=media&token=0c68fe33-2a2e-42b7-9859-ee921a9e9cae"
                  className=" md:border-gray-800 rounded-lg border-white h-12"
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
