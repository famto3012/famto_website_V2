import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Button from "../components/button";
import ScrollToTop from "../components/ScrollToTop";

const Blogs = React.memo(() => {
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
    "/blogs/april/blogsimg.svg",
    "/blogs/may/blog_may.svg",
    "/blogs/june/blog-june.svg",
    "/blogs/march/blog_march.svg",
    "/blogs/honours.svg",
  ];

  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[16rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="/blogs/blog.svg"
            alt="Blog"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
              src="/home/logo/whiteLogo.svg"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[16px] md:text-[20px] font-medium text-center text-3xl absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Blogs
          </h4>
        </div>
      </div>

      <section className="w-full mx-auto px-[1rem] md:px-[3rem] py-[3rem] md:py-[5rem] grid md:grid-cols-2 gap-6 md:gap-20">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-300 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <figure className="rounded-t-3xl w-full h-[12rem] overflow-hidden">
              <img
                src={images[index % images.length]}
                className={`h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-150 ${
                  images[index] === images[4] ? "scale-125" : ""
                } `}
                alt={`Blog ${index + 1}`}
              />
            </figure>
            <div className="p-5">
              <p className="md:text-[20px] text-[15px] font-medium">{blog}</p>
              <Link to={paths[index]} className="flex justify-end p-3">
                <Button value="Read More" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <Whatsapp />

      <Footer />

      <ScrollToTop />
    </main>
  );
});

Blogs.displayName = "Blogs";

export default Blogs;
