import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blog_May = () => {

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
        <div className=" inset-0 bg-gradient-to-tr from-rose-600 to-amber-400 h-[19rem] md:h-[70vh] flex justify-evenly items-center">
          <figure className="hidden md:block h-[10rem] md:h-[40vh] flex-shrink-0">
            <img
              className="h-full"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FiPhone%2015.svg?alt=media&token=2e8c0963-3c19-466e-a192-a99d0aa79595"
              alt=""
            />
          </figure>
          <h1 className="text-white/25 text-center text-6xl md:text-9xl font-thin">
            V/S
          </h1>
          <figure className="hidden md:block h-[10rem] md:h-[40vh] flex-shrink-0">
            <img
              className="h-full"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FiPhone%2013.svg?alt=media&token=73ac49ec-65af-4d16-bf1a-fe76e54e99a2"
              alt=""
            />
          </figure>
        </div>

        <div className="absolute inset-0">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[2rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
        </div>
      </div>

      <section className="w-full text-[13px] md:text-[16px] md:w-[90%] mx-auto px-[2rem] md:px-[3rem] py-[1rem]">
      <div className="flex flex-col md:items-center md:justify-center md:text-center py-10 w-full md:w-1/2 lg:w-1/2 mx-auto">
          <h1 className="text-[18px] font-semibold md:text-[26px] leading-tight">
          Between the red and orange bubbles, Is the Merchants unhappy?
          </h1>
          <h1 className="text-black/25 md:mt-4 order-4 md:order-3">
            May 01,2024
          </h1>
          <h1 className="text-cyan-400 italic md:mt-4 my-4 font-semibold order-3 md:order-4">
            By Famto content team
          </h1>
        </div>

        <p className="mb-[15px]">
          Certainly! The Indian food delivery market is dominated by two giants:
          red and orange bubble. Let’s explore the reasons why merchants might
          still consider other options despite these market leaders.
        </p>
        <ul className="list-disc px-5">
          <li className="mb-[15px]">
            <span className="font-[600]">Competition and Differentiation:</span>{" "}
            They operate in a duopoly. Merchants may seek alternatives to
            differentiate their offerings or negotiate better terms.
            <p className="mt-[10px]">
              Some merchants may prefer platforms that cater to specific niches
              or have unique features.
            </p>
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Costs and Commissions:</span> Both
            charge commissions on orders. Merchants might explore other
            platforms with lower fees or more favorable terms. High commissions
            can impact profit margins for small businesses.
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Regional Presence:</span> They have
            strong urban presence, but smaller towns and rural areas may lack
            coverage. Merchants in these regions may opt for local or regional
            players.
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Delivery Fleet and Logistics:</span>{" "}
            Maintaining a delivery fleet can be expensive. Some merchants may
            prefer third-party logistics providers or aggregators that offer
            delivery services without the overhead.
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Customer Base:</span> Merchants might
            choose platforms based on their target audience. For example, if a
            restaurant specializes in a particular cuisine, it may prefer a
            platform with relevant users.
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Technology and Features:</span>{" "}
            Merchants value user-friendly interfaces, order management tools,
            and analytics. Platforms that excel in these areas may attract
            merchants.
          </li>
          <li className="mb-[15px]">
            <span className="font-[600]">Marketing and Promotions:</span>{" "}
            Merchants seek platforms that actively promote their offerings. Some
            may explore partnerships with platforms that invest in marketing
            campaigns.
          </li>
          <li className="mb-[1rem] md:mb-[80px]">
            <span className="font-[600]">Risk Diversification:</span> Relying
            solely on one platform can be risky. Merchants may diversify by
            partnering with multiple delivery services.
          </li>
        </ul>
        <div className="grid grid-cols-1 space-y-4 lg:grid-cols-3 mb-[50px] w-full px-2 ">
          <div className="lg:col-span-2">
            <p className="mb-[15px]">
              The delivery scene has been a two-horse race for far too long,
              with Red Bubble and Orange Bubble dominating the market. But a new
              contender, FAMTO, is charging in to disrupt the status quo. This
              newcomer promises more than just another app. Whispers hint at
              innovation and a commitment to exceeding customer expectations.
              Will FAMTO offer a wider restaurant selection, streamline the
              ordering process, or revolutionize delivery? Maybe affordability
              is their game, enticing us with competitive pricing or unique
              deals
            </p>

            <p className="mb-[15px]  ">
              One thing's clear: the established giants can't afford
              complacency. FAMTO's arrival signifies a potential shift. With a
              fresh perspective and a focus on disruption, FAMTO could spark a
              wave of competition, ultimately benefiting us by pushing the
              boundaries of what delivery can be. The battle lines are drawn.
              Will FAMTO live up to the hype and become the new king (or queen)
              of convenience? Only time will tell, but one thing's for sure: the
              race for takeout domination just got interesting.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end mx-auto  ">
            <figure className="h-[15rem] md:h-[20rem] w-full lg:w-auto lg:h-auto max-w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FPie%20Chart.svg?alt=media&token=8c9978d0-0f44-4045-bfc7-81b560d6dd0a"
                alt=""
                className=" object-cover h-full w-full"
              />
            </figure>
          </div>
        </div>
        <div className="mb-[1rem]">
          <h3 className=" text-[16px] font-semibold mb-[20px]">
            FAMTO: The Rising Star in Delivery
          </h3>
          <p className="mb-[1rem]">
            In the bustling world of food delivery, two giants have long
            dominated the scene: Red Bubble and Orange Bubble. But now, a new
            player has emerged, ready to disrupt the market and redefine the way
            we order food. Enter FAMTO
          </p>
          <h3 className=" text-[16px] font-semibold mb-[20px]">
            The Birth of Famto
          </h3>
          <p>
            FAMTO was born out of a vision to create a seamless food delivery
            experience for customers, restaurants, and delivery partners alike.
            Its founders, a dynamic team of tech enthusiasts and food lovers,
            set out to build a platform that would bridge the gap between hunger
            and satisfaction.
          </p>
        </div>
        <div>
          <h3 className=" text-[16px] font-semibold mb-[20px]">
            The FAMTO Difference
          </h3>
          <h3 className="font-[600] mb-[15px]">Hyper-Local Focus</h3>
          <p className="mb-[15px]">
            Unlike its competitors, FAMTO doesn’t aim to conquer entire cities
            overnight. Instead, it focuses on hyper-local neighborhoods,
            ensuring faster deliveries and personalized service. Whether you’re
            craving a biryani in Baner or sushi in SoBo, FAMTO’s got you covered
          </p>
          <h3 className="font-[600] mb-[15px]">Restaurant Partnerships</h3>
          <p className="mb-[15px]">
            {" "}
            FAMTO takes pride in its strong relationships with local
            restaurants. It’s not just about delivering food; it’s about
            supporting the culinary ecosystem. From mom-and-pop eateries to
            swanky cafes, FAMTO brings them all to your doorstep
          </p>
          <h3 className="font-[600] mb-[15px]">Transparent Pricing</h3>
          <p className="mb-[15px]">
            No hidden fees, no surprises. FAMTO believes in transparent pricing.
            What you see is what you pay. No more guessing games when the bill
            arrives.
          </p>
          <h3 className="font-[600] mb-[15px]">Community-Driven</h3>
          <p className="mb-[15px]">
            FAMTO actively engages with its community. Food festivals, cooking
            workshops, and charity drives—FAMTO is more than an app; it’s a
            movement. They even have a “Foodie of the Month” program,
            celebrating passionate foodies who spread the love.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog_May;
