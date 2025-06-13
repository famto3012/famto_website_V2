import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Team = React.memo(() => {
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
      <div className="relative w-full h-[16rem] md:h-[70vh]">
        <img
          className="w-full object-cover h-full"
          src="/Team/team.jpg"
          alt="Team"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
              src="/home/logo/whiteLogo.svg"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-center text-[16px] font-medium md:text-[20px] absolute bottom-4 left-1/2 transform -translate-x-1/2">
            Team Famto
          </h4>
        </div>
      </div>
      <div className="my-[50px]">
        <p className="max-w-[90%] mx-auto text-start ps-2 md:text-[14px] font-normal text-[13px]">
          Welcome to our "Team Famto" page, where you'll discover the vibrant
          personalities behind our organization. Delve into the diverse
          backgrounds, expertise, and passions of each member who contributes to
          our collective success. From visionary leaders to dedicated
          specialists, our team embodies a shared commitment to excellence,
          innovation, and collaboration. Get to know the faces driving our
          mission forward and find out how their unique talents and experiences
          align with our values and goals.
        </p>
      </div>

      <section className="w-fit md:w-[90%] mx-auto px-[1rem] md:px-[0rem] py-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
          <Card image="/Team/Sujith Sir.jpg" name="J Sujith" role="Director" />
          <Card image="/Team/Magi.jpg" name="Magi GR" role="Director" />
          <Card
            image="/Team/sangeetha (1).jpg"
            name="Sangeetha TP"
            role="Business Development Executive"
          />
          <Card
            image="/Team/AkhilBabu.jpg"
            name="Akhil Babu S"
            role="Software Developer"
          />
          <Card
            image="/Team/SarathRs.jpg"
            name="Sarath R S"
            role="Software Developer"
          />
          <Card
            image="/Team/Gowri US.jpg"
            name="Gowri U S"
            role="Software Developer"
          />
          <Card
            image="/Team/Sarath S B.jpg"
            name="Sarath S B"
            role="Software Developer"
          />
        </div>
      </section>

      <Footer />

      <ScrollToTop />
    </main>
  );
});

Team.displayName = "Team";

export default Team;
