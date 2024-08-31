import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Blog_March = () => {
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
        <figure className="h-[19rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblog_march.svg?alt=media&token=04614eea-7b31-4389-99f2-8ad0972ced12"
            alt=""
          />
        </figure>
        <div className="absolute inset-0 ">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[2rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:ps-[4rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <section className="w-full text-[14px] md:text-[14px] px-[2rem] md:px-[4rem] py-[1rem] mb-20">
        <Link to="/blogs">
          <div className="text-black flex items-center gap-x-2 my-2 underline underline-offset-2">
            <WestOutlinedIcon /> Back
          </div>
        </Link>
        <div className="flex flex-col md:items-center md:justify-center md:text-center py-10 w-full md:w-[90%] mx-auto">
          <h1 className="text-[18px] font-semibold md:text-[26px] lg:text-[32px] leading-tight">
            Building a Delivery Ecosystem for the Elderly: Personalized Care at
            Your Doorstep
          </h1>
          <h1 className="text-black/25 md:mt-4 order-4 md:order-3">
            March 01,2024
          </h1>
          <h1 className="text-cyan-400 italic md:mt-4 my-4 font-semibold order-3 md:order-4">
            By Famto content team
          </h1>
        </div>
        <p className="mb-[1rem]">
          In a world where convenience is increasingly driven by technology,
          we’re focusing on a service that goes beyond just convenience—it’s
          about care, compassion, and understanding the unique needs of the
          elderly. Our delivery service is designed to help seniors by providing
          a fully customizable experience, making it easier for them to get the
          essentials they need without the complexities of modern apps.
        </p>
        <p className="mb-[1rem]">
          <span className="font-[600]">
            {" "}
            Personalized Custom Orders: Meeting Every Need{" "}
          </span>{" "}
          For many elderly individuals, standard delivery services often fall
          short of their specific needs. That’s why our approach is centered
          around custom orders. We understand that each senior may have unique
          preferences or requirements, whether it’s a specific brand of a
          product, a particular type of food, or a specific medication. By
          taking orders directly through a simple phone call, we eliminate the
          barriers that often come with digital platforms.
        </p>
        <p className="mb-[1rem]">
          When an elderly customer calls in, our team listens carefully to their
          needs, ensuring that every detail is noted. We then go out and
          purchase the exact items they require, providing a personalized
          shopping experience that gives them peace of mind
        </p>
        <p className="mb-[1rem]">
          <span className="font-[600]">
            Simplified Communication: Call-In Orders{" "}
          </span>
          Many elderly individuals find using smartphones and apps daunting. To
          make our service as accessible as possible, we’ve designed a system
          where orders can be placed over the phone. This method is
          straightforward and familiar, ensuring that seniors can easily request
          what they need without any technical hurdles. Our friendly and patient
          staff are trained to assist elderly customers, making the ordering
          process smooth and stress-free
        </p>
        <p className="mb-[1rem]">
          <span className="font-[600]">
            {" "}
            Pick-and-Drop Services: More Than Just Deliveries
          </span>{" "}
          Our commitment to the elderly goes beyond just delivering groceries
          and essentials. We also offer pick-and-drop services to help with a
          variety of tasks. Whether it’s picking up prescriptions from the
          pharmacy, delivering a package to a loved one, or even dropping off
          important documents, our service is designed to help seniors manage
          their daily errands without leaving the comfort of their homes.
        </p>
        <p className="mb-[1rem]">
          This service is especially valuable for those with mobility challenges
          or health concerns that make it difficult to go out. By offering
          pick-and-drop services, we’re not just providing convenience—we’re
          enhancing their quality of life and helping them maintain their
          independence.
        </p>
        <p className="mb-[1rem]">
          <span className="font-[600]">
            Building a Trustworthy and Compassionate Ecosystem{" "}
          </span>
          Trust is at the heart of our service. We understand the responsibility
          that comes with serving the elderly, and we are committed to providing
          a reliable, compassionate, and secure experience. Our delivery
          personnel are more than just couriers; they are trained to provide
          personalized assistance and ensure that every interaction is positive
          and respectful. Our ecosystem is designed to grow with the needs of
          our customers. As we continue to refine our services, we remain
          focused on the well-being of the elderly, making sure that every
          aspect of our delivery process is tailored to their needs
        </p>
        <p>
          <span className="font-[600]">A Future of Personalized Care:</span>{" "}
          Looking ahead, our vision is to become a trusted partner for elderly
          care, offering a comprehensive range of services that cater to their
          unique needs. By focusing on custom orders, simple communication
          methods, and additional pick-and-drop services, we are creating an
          ecosystem that not only delivers goods but also provides peace of mind
          and enhances the daily lives of our elderly customers
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Blog_March;
