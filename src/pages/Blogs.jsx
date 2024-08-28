import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { FiArrowUpRight } from "react-icons/fi";

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

  const blogs = [
    "The Digital Wave: FMCG Embraces Delivery for Tomorrow's Consumer",
    "Between the red and orange bubbles, Is the Merchants unhappy?",
    "A Comprehensive Guide to Price Comparison for Customers and Merchants on Indian Delivery Apps",
    "Building a Delivery Ecosystem for the Elderly: Personalized Care at Your Doorstep",
    `"An Award that Fuels Our Drive for Continuous Excellence"`,
  ];

  const paths = [
    "/blog-april",
    "/blog-may",
    "/blog-june",
    "/blog-march",
    "/blog-august",
  ];

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblogsimg.svg?alt=media&token=eeb36501-e2e2-4060-8849-ab79a8b23895",
    "https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog_may.svg?alt=media&token=fd5df35b-8b34-4507-9356-430897de579f",
    "https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog-june.svg?alt=media&token=3d5d7d5a-1b76-4e44-8a8c",
    "https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog_march.svg?alt=media&token=04614eea-7b31-4389-99f2-8ad0972ced12",
    "https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog-august.svg?alt=media&token=a2023f44-db61-4a3f-9337-b3a18eb4d6e9",
  ];

  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[16rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog.svg?alt=media&token=db5c8d77-a5e4-4294-a32f-84585c418857"
            alt="Blog"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Flogo.svg?alt=media&token=08e766da-ec03-4d84-b665-212f06c23ff3"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[16px] md:text-[20px] lg:text-[32px] text-center text-3xl absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Blogs
          </h4>
        </div>
      </div>

      <section className="w-full mx-auto px-[1rem] md:px-[3rem] py-[3rem] md:py-[5rem] grid md:grid-cols-2 gap-20">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <figure className="rounded-t-3xl w-full h-[15rem] overflow-hidden">
              <img
                src={images[index % images.length]}
                className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                alt={`Blog ${index + 1}`}
              />
            </figure>
            <div className="p-5">
              <p className="text-lg font-medium">{blog}</p>
              <Link to={paths[index]}>
                <button className="text-teal-400 border border-teal-400 rounded-3xl p-2 gap-1 px-4 flex items-center mt-7 hover:bg-teal-400 hover:text-white transition-all duration-300">
                  Read More <FiArrowUpRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Whatsapp />

      <Footer />
    </main>
  );
};

export default Blogs;
