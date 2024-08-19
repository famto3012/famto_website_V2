import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

const Blogs = () => {
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
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[10rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog.svg?alt=media&token=db5c8d77-a5e4-4294-a32f-84585c418857"
            alt="Blog"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Flogo.svg?alt=media&token=08e766da-ec03-4d84-b665-212f06c23ff3"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[18px] md:text-[28px] lg:text-[32px] text-center text-3xl absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Blogs
          </h4>
        </div>
      </div>

      <section className="w-full md:w-[90%] mx-auto px-[1rem] md:px-[3rem] py-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          <Link
            to={"/blogs"}
            className="flex flex-col group bg-gradient-to-r from-[#00ced1] to-[#005253] rounded-xl overflow-hidden hover:shadow-lg transition w-[270px] h-[350px] mx-auto"
            href="#"
          >
            <div className="relative h-[430px] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="blogpic.svg"
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-[5px] text-white">
                The Digital Wave: FMCG Embraces Delivery for Tomorrow's Consumer
              </p>
            </div>
          </Link>
        </div>
      </section>

      <Whatsapp />

      <Footer />
    </main>
  );
};

export default Blogs;
