import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-[30px] bg-gradient-to-r from-black/85 via-black/90 to-black  md:px-[5rem] lg:px-[2rem]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <Link to={"/"} className="sm:mb-0 h-[6rem]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FTeal_logo.svg?alt=media&token=36094adf-2443-434f-a9bb-fb4b1f270535"
            alt="my-famto logo"
            className="w-[200px] h-[30px]"
          />
        </Link>
        <div className="flex flex-col sm:flex-row ps-[2rem] lg:gap-[50px] gap-[30px] text-left">
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[600]">
              Company
            </h4>
            <Link
              to={"/about-us"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white"
            >
              About Famto
            </Link>
            <Link
              to={"/contact-us"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to={"/team"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white"
            >
              Team
            </Link>
            <Link
              to={"/blog"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white"
            >
              Blog
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[600]">
              Partner with us
            </h4>
            <Link
              to={"/merchants"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              Merchants
            </Link>
            <Link
              to={"/delivery-agent"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              Delivery Agents
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[600]">
              Help & Legal
            </h4>
            <Link
              to={"/faqs"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              FAQs
            </Link>
            <Link
              to={"/terms-and-conditions"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              Terms & Conditions
            </Link>
            <Link
              to={"/privacy-policy"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              Privacy Policy
            </Link>
            <Link
              to={"/cancellation-and-refund-policy"}
              className="text-white/75 mb-[10px] text-[14px] hover:text-white "
            >
              Cancellation & Refund Policy
            </Link>
          </div>
          <div className="">
            <h4 className="text-[#eee] mb-[20px] text-[16px] font-[600]">
              Social Media
            </h4>
            <div className="flex gap-2">
              <a href="whatsapp">
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
              <a href="whatsapp">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Ffacebook.svg?alt=media&token=c8aa526c-b0c1-4a2d-960c-92051a5f48e2"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/famto-admin-6067a630b/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FlinkedIn.svg?alt=media&token=21bf4a0e-3708-41cd-9315-e21420fd53b8"
                  className="border border-gray-800 p-2 h-10 md:w-20 lg:w-full md:p-1 rounded-xl lg:p-2"
                ></img>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fplay-store.svg?alt=media&token=cd936c30-0133-432e-af3f-b0817cdd03bc"
                  className="p-2 border md:border-gray-800 rounded-lg border-white"
                />
              </a>
              <a href="">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fapp-store.svg?alt=media&token=a6ae83f9-23a9-4a69-829d-a69801982838"
                  className="p-2 border md:border-gray-800 rounded-lg border-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-start justify-end px-3">
        <p className="text-gray-500 ml-10 mt-5 flex gap-1 items-center">
          <FaRegCopyright /> My Famto Pvt. Ltd. 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
