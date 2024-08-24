import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[19rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fcontact-us.svg?alt=media&token=ec53562e-7f37-42ce-92f4-0bde4aa4d8cf"
            alt=""
          />
        </figure>
        <div className="absolute inset-0">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:[4rem]transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FBlack_logo.svg?alt=media&token=214d8656-3f79-4af9-a37e-5f61daec8e63"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[11px] md:text-[24px] lg:text-[32px] text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Contact us
          </h4>
        </div>
      </div>
      <section className="flex flex-col md:flex-row w-full mt-[40px] mb-10">
        <div className="w-full md:w-[50%] mb-[4rem] ">
          <div className="flex flex-col space-y-12 mx-auto px-[2rem] md:px-[4rem]">
            <h1 className="text-[24px] font-[600]">
              Come Let's
              <span className="block text-[32px] font-normal text-[#00Ced1]">
                Get In Touch
              </span>
            </h1>
            <div className="flex flex-row gap-10 ">
              <MdOutlineCall className="text-[#00Ced1] rounded-lg p-2 text-[56px] border border-gray-200" />
              <div>
                <h1 className="text-black/50">Give us on call</h1>
                <a
                  href="tel:+919778180794"
                  className="md:text-[18px] font-[500]"
                >
                  +91 97781 80794
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-10  ">
              <MdOutlineEmail className="text-[#00Ced1] rounded-lg p-2 text-[56px] border border-gray-200" />
              <div>
                <h1 className="text-black/50">Drop us a mail on</h1>
                <a
                  href="mailto:contact@famto.in"
                  className="md:text-[18px] text-slate-600 font-[500]"
                >
                  contact@famto.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-10 ">
              <div className=" w-[3.2rem]">
                <MdOutlineLocationOn className="text-[#00Ced1] rounded-lg p-2 text-[56px] border border-gray-200 " />
              </div>
              <div>
                <h1 className="text-black/50">You can visit us at</h1>
                <p className="sm:w-1/3 text-slate-600">
                  A-18, Lekshmi Nagar, Kesavadasapuram, Thiruvananthapuram,
                  Kerala 695004
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
    <div className="bg-white/25 max-w-4xl">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 ps-8 gap-8">
      <div className="flex items-center">
        <figure className="h-20 w-20">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fwaving-hand.svg?alt=media&token=a7133b52-0416-41b9-a9f2-d5c69b998a27"
            alt=""
          />
        </figure>
      </div>
      <div className="text-black/50 text-lg flex items-center justify-end space-x-4">
        <p>Great, We are excited to hear from you.</p>
        <img src="arrow.svg" alt="arrow" />
      </div>
    </div>

    <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-[3rem] md:text-[14px]">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="mt-1 p-3 w-full border rounded-md shadow-sm placeholder:text-[13px]"
        />
      </div>

      <div>
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="mt-1 p-3 w-full border rounded-md shadow-sm placeholder:text-[13px]"
        />
      </div>

      <div>
        <label className="block text-gray-700">Mail</label>
        <input
          type="email"
          placeholder="Enter your mail address"
          className="mt-1 p-3 w-full border rounded-md shadow-sm placeholder:text-[13px]"
        />
      </div>

      <div>
        <label className="block text-gray-700">Subject</label>
        <input
          type="text"
          placeholder="Give us a brief description on the matter"
          className="mt-1 p-3 w-full border rounded-md shadow-sm placeholder:text-[13px]"
        />
      </div>

      <div className="sm:col-span-1 md:col-span-2">
        <label className="block text-gray-700">Description</label>
        <textarea
          placeholder="Describe the matter"
          className="mt-1 p-3 w-full border rounded-md shadow-sm placeholder:text-[13px]"
          rows="4"
        ></textarea>
      </div>

      <div className="sm:col-span-1 md:col-span-2 flex justify-start">
        
      </div>
    </form>
  </div>
</div>

      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
