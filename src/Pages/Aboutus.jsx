import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { aboutTableData } from "../data";
import { SiTicktick } from "react-icons/si";
import ScrollToTop from "../components/ScrollToTop";

const Aboutus = React.memo(() => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const aboutTableChunks = chunkArray(aboutTableData, 4);

  return (
    <>
      <main className=" w-full">
        <div className="relative w-full">
          <figure className="h-[15rem] md:h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src="/aboutus/about-famto.svg"
              alt="About"
            />
          </figure>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent flex flex-col items-start">
            <Link to={"/"} className="mt-2 md:mt-8 md:ms-10">
              <img
                className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
                src="/home/logo/whiteLogo.svg"
                alt="Logo"
              />
            </Link>
            <h4 className="text-white text-center text-[16px] md:text-[20px] font-medium absolute bottom-4 left-1/2 transform -translate-x-1/2">
              About Famto
            </h4>
          </div>
        </div>

        <section className="w-full md:w-[90%] px-[2rem] md:px-0 mx-auto  py-[3rem]">
          <p className="mb-[60px] md:text-start text-[12px] md:text-[14px] font-normal">
            The Company got its corporate character in July 2021 under the name
            “MY FAMTO Private Limited” and began its journey in Kerala on July
            2021 for covering services like Delivery(Food, Grocery, Fruits &
            Vegetables, Dairy Products, Raw Meat & Fish, Stationary, Bakery,
            Flowers etc), Taxi, Online Consultancy and Handyman. We are pioneers
            in online delivery services and maintain good hygiene in the process
            of delivery for customer satisfaction. In addition to the delivery
            we provide other services which can ease in for customers as well as
            merchants.
          </p>
          <div className="bg-gray-100 rounded-lg mb-[40px] ">
            <div className="md:flex grid w-full ">
              <div className="md:w-1/2 md:p-[30px] p-8 text-center md:text-start order-2 md:order-1">
                <h4 className="font-semibold text-[20px] mb-[8px] text-center md:text-start ">
                  Vision
                </h4>
                <p className="font-normal text-[14px] md:text-[16px] text-start">
                  Our vision is to transform the way people access essential
                  services, creating a premier platform that seamlessly connects
                  individuals, enriches lives, and builds strong community
                  connections.
                </p>
              </div>
              <div className="md:w-1/2 md:order-2 order-1 bg-[#00CED1]">
                <figure className="w-full h-[15rem] py-8">
                  <img
                    src="/aboutus/about-vision.svg"
                    className="p-10 w-full h-full object-contain"
                  />
                </figure>
              </div>
            </div>

            <div className=" md:text-start">
              <div className="md:flex grid w-full">
                <div className="md:w-1/2 bg-[rgb(0,206,209)]">
                  <figure className="w-full h-[15rem] py-8">
                    <img
                      src="/aboutus/about-mission.svg"
                      className="bg-[#00CED1] p-10 w-full h-full object-contain"
                    />
                  </figure>
                </div>
                <div className="md:w-1/2 md:p-[30px] p-8 text-center md:text-start ">
                  <h4 className="font-semibold text-[20px] mb-[8px]  md:mt-0 text-center md:text-start">
                    Mission
                  </h4>
                  <p className=" font-normal text-[14px] md:text-[16px] text-start">
                    Our mission is to simplify lives by offering a
                    customer-centric platform that provides convenient access to
                    essential services. We empower individuals to cultivate
                    meaningful connections and revolutionize their engagement
                    with services in the digital era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gray-100 md:flex grid px-10 md:px-20 w-full md:mb-20 py-7 justify-between">
          <div className="flex flex-col justify-center items-start md:items-start lg:items-end order-1 md:order-3 px-3 md:px-0 py-2">
            <p className="font-semibold text-left lg:text-right">
              What we value at
            </p>
            <p className="text-[#00ced1] text-[32px] text-left lg:text-right">
              Famto
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:py-10 py-2 order-2 md:order-1">
            {aboutTableChunks.map((chunk, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {" "}
                {/* Consistent spacing applied here */}
                {chunk.map((data, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-[14px] p-1 flex items-center gap-2"
                  >
                    {" "}
                    {/* Individual bullet styling */}
                    <SiTicktick className="text-[#00CED1] text-[20px]" />
                    {data}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <figure className="h-[14rem] hidden md:block order-2">
            <img
              className="hidden md:block md:order-2 h-full"
              src="/aboutus/Vector.svg"
              alt="vector"
            />
          </figure>
        </div>

        <Footer />
      </main>

      <ScrollToTop />
    </>
  );
});

Aboutus.displayName = "Aboutus";

export default Aboutus;
