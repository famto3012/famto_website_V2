import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Apps = React.memo(() => {
  const [isEmail, setIsEmail] = useState(true);
  const [linkStatus, setLinkStatus] = useState(false);
  const [contact, setContact] = useState({
    email: "",
    phone: "",
  });
  const toast = useToast();

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
    if (!contact.email && !contact.phone) {
      toast({
        title: "Error",
        description: "Please enter either email or phone number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLinkStatus(true);

    setTimeout(() => {
      setLinkStatus(false);
    }, 3000);
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
                <p className="bg-[#00ced1] flex lg:px-10 md:px-[7px] px-3 p-2 text-center justify-center text-white gap-1 md:gap-2 items-center rounded-lg md:w-fit hover:bg-black transition-all group relative h-[50px]">
                  <p className="transform transition-transform duration-300 group-hover:-translate-x-1">
                    Share Link
                  </p>
                  <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </p>
              )}
              {linkStatus && (
                <p className="bg-[#0E6500] flex lg:px-10 md:px-[7px] text-white gap-1 md:gap-2 items-center justify-center rounded-lg md:w-fit transition-all h-[50px]">
                  <TiTick className="transform transition-transform duration-300 group-hover:-translate-x-2 text-[22px]" />
                  <p className="transform transition-transform duration-300 group-hover:translate-x-1">
                    Link Shared
                  </p>
                </p>
              )}
            </button>
          </div>
          <div className="mt-5">
            <p>Download from</p>
            <div className="flex gap-3 mt-5 sm:mt-2 xs:mt-1">
              <a href="https://play.google.com/store/apps/details?id=com.famto.customerapp">
                <img
                  src="/other/play-store.png"
                  className=" md:border-gray-800 rounded-lg border-white h-12"
                />
              </a>
              <a href="">
                <img
                  src="/other/app-store.png"
                  className=" md:border-gray-800 rounded-lg border-white h-12"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
});

Apps.displayName = "Apps";

export default Apps;
