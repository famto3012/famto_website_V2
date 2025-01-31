import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = React.memo(() => {
  const location = useLocation();
  const phoneNumber = "919778180794";

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="w-full py-[30px] bg-gradient-to-r from-black/85 via-black/90 to-black md:px-[5rem] lg:px-[2rem]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Link to={"/"} className="sm:mb-0 ml-7 h-[6rem]">
          <img
            src="/other/greenlogo.svg"
            alt="my-famto logo"
            className="w-[130px] h-[23px]"
          />
        </Link>
        <div className="grid sm:grid-cols-2 lg:flex sm:flex-row ps-[2rem] lg:gap-[50px] gap-[30px] text-left">
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-medium">
              Company
            </h4>
            <Link
              to={"/about-us"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/about-us")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              About Famto
            </Link>
            <Link
              to={"/contact-us"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/contact-us")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Contact Us
            </Link>
            <Link
              to={"/team"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/team")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Team
            </Link>
            <Link
              to={"/blogs"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/blogs")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[500]">
              Partner with us
            </h4>
            <Link
              to={"/merchant"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/merchant")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Merchants
            </Link>
            <Link
              to={"/delivery-agent"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/delivery-agent")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Delivery Agents
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-medium">
              Help & Legal
            </h4>
            <Link
              to={"/faq"}
              className={`text-white/75 mb-[10px] text-[14px] font-[400] hover:text-white ${
                isActive("/faq")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              FAQs
            </Link>
            <Link
              to={"/terms-and-conditions"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/terms-and-conditions")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              to={"/privacy-policy"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/privacy-policy")
                  ? "text-white underline underline-offset-2 font-[500]"
                  : ""
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to={"/cancellation-and-refund-policy"}
              className={`text-white/75 mb-[10px] text-[14px] font-normal hover:text-white ${
                isActive("/cancellation-and-refund-policy")
                  ? "text-white underline underline-offset-2 font-[600]"
                  : ""
              }`}
            >
              Cancellation & Refund Policy
            </Link>
          </div>
          <div>
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[500]">
              Social Media
            </h4>
            <div className="flex gap-2">
              <a href={`https://wa.me/${phoneNumber}`}>
                <img
                  src="/other/whatsapp.svg"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.instagram.com/famtoapp">
                <img
                  src="/other/instagram.svg"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.facebook.com/FamtoServices">
                <img
                  src="/other/facebook.svg"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.linkedin.com/company/myfamto/">
                <img
                  src="/other/linkedIn.svg"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              <a href="">
                <img
                  src="/other/play-store.png"
                  className="p-1 h-12 border md:border-gray-800 rounded-lg border-white"
                />
              </a>
              <a href="">
                <img
                  src="/other/app-store.png"
                  className="p-1 h-12 border md:border-gray-800 rounded-lg border-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-start justify-end px-3">
        <p className="text-gray-500 ml-6 mt-5 flex gap-1 items-center opacity-50 text-[14px]">
          <FaRegCopyright /> My Famto Pvt. Ltd. 2024
        </p>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
