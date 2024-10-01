import { FaRegCopyright } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const phoneNumber = "919778180794";

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="w-full py-[30px] bg-gradient-to-r from-black/85 via-black/90 to-black md:px-[5rem] lg:px-[2rem]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Link to={"/"} className="sm:mb-0 ml-4 h-[6rem]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FNew%20logo%20(5).svg?alt=media&token=74125141-5e35-40b8-9141-3faf2bd33794"
            alt="my-famto logo"
            className="w-[150px] h-[20px]"
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
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fwhatsapp.svg?alt=media&token=d94eb0bd-d702-4d2f-9769-c74d98848ba5"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.instagram.com/famtoapp">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Finstagram.svg?alt=media&token=2fa55112-6619-4d24-84e0-d75a99c3d903"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.facebook.com/FamtoServices">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Ffacebook.svg?alt=media&token=c8aa526c-b0c1-4a2d-960c-92051a5f48e2"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.linkedin.com/company/myfamto/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FlinkedIn.svg?alt=media&token=21bf4a0e-3708-41cd-9315-e21420fd53b8"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fplay-store.png?alt=media&token=c94ca732-53fa-4343-87c8-39f138fdf36f"
                  className="p-1 h-12 border md:border-gray-800 rounded-lg border-white"
                />
              </a>
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fapp-store.png?alt=media&token=0c68fe33-2a2e-42b7-9859-ee921a9e9cae"
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
};

export default Footer;
