import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import ScrollToTop from "../components/ScrollToTop";

const Blog_April = React.memo(() => {
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
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fblogsimg.svg?alt=media&token=eeb36501-e2e2-4060-8849-ab79a8b23895"
            alt=""
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex flex-col items-start ps-5">
          <Link to={"/"} className="mt-2 md:mt-8 md:ms-[40px]">
            <img
              className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[1rem] md:ps-[1rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FWhite.svg?alt=media&token=3d91a036-029f-4d67-816e-19b1f8dd3f6e"
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <section className="w-full text-[13px] md:text-[14px] mx-auto px-[2rem] md:px-[4rem]  py-[1rem] mb-20">
        <Link to="/blogs">
          <div className="text-black flex items-center gap-x-2  mt-5 underline underline-offset-2">
            <WestOutlinedIcon /> Back
          </div>
        </Link>
        <div className="flex flex-col md:items-center md:justify-center md:text-center py-10 w-full md:w-[80%] mx-auto">
          <h1 className="text-[18px] font-semibold md:text-[26px] lg:text-[32px] leading-tight">
            The Digital Wave: FMCG Embraces Delivery for Tomorrow's Consumer
          </h1>

          <h1 className="text-black/25 md:mt-4 order-4 md:order-3">
            April 01,2024
          </h1>
          <h1 className="text-cyan-400 italic md:mt-4 my-4 font-semibold order-3 md:order-4">
            By Famto content team
          </h1>
        </div>
        <div className="space-y-4 mb-[1rem]">
          <p>
            Convenience is now the key to client pleasure in the fast-paced
            world of consumer goods. There is an unprecedented demand for easily
            accessible everyday items as our lives become busier. Delivery
            services have emerged as a game-changer in the Fast Moving Consumer
            Goods (FMCG) industry, which has undergone a spectacular transition
            as a result of this shift in consumer behavior
          </p>
          <p>
            The days of having to make a trip to the store are long gone.
            Currently, we can have groceries, toiletries, and household goods
            delivered straight to our door with only a button click. The
            integration of technology, logistics, and shifting customer
            preferences has been the driving force behind this massive change.
            Let's examine more closely at the phenomenon that is transforming
            the FMCG industry: the combination of delivery services and FMCG
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-4 lg:grid-cols-3  lg: items-center mb-[50px] w-full gap-8">
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-[14px] md:text-[16px] font-semibold">
              The Rise of On-Demand Culture
            </h3>
            <p>
              Customers are gravitating toward on-demand solutions more and more
              in a world where time is of the importance. Getting what we need
              when we need it has become a non-negotiable, whether it's
              groceries, personal care items, or snacks. The rise in popularity
              of smartphones and the development of user-friendly delivery apps
              has expedited this change
            </p>

            <p>
              FMCG businesses have quickly realized this trend has enormous
              potential. They have tapped into a wealth of opportunities by
              forming partnerships with delivery platforms or creating their own
              delivery infrastructure. These days, customers may order a wide
              range of goods from their preferred brands and have them delivered
              in a matter of hours or even minutes
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end mx-auto">
            <figure className="h-[11rem] sm:h-[15rem] md:h-[20rem] w-full lg:w-auto lg:h-auto max-w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fon-demand-criteria.svg?alt=media&token=3d81a529-5c98-4dc5-a2e4-a700ee0bd2a0"
                alt=""
                className=" object-cover h-full w-full"
              />
            </figure>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className=" text-[16px] font-semibold ">
            1.Navigating the Logistics Maze
          </h3>
          <p>
            Online purchasing is a smooth façade that hides a complicated
            network of supply chain management and logistics. The challenge
            facing FMCG companies is to maintain product quality and freshness
            while guaranteeing prompt delivery. This calls for careful
            preparation, a strong infrastructure, and creative solutions.To
            improve efficiency and streamline operations, a number of massive
            FMCG companies have made significant investments in logistics
            technology. Every step of the delivery process, from real-time
            tracking systems to route optimization algorithms, is optimized for
            optimal dependability. Moreover, FMCG firms can expand their
            distribution operations without sacrificing quality thanks to
            collaborations with outside logistics suppliers
          </p>
          <h3 className=" text-[16px] font-semibold">
            2.Sustainability in Focus
          </h3>
          <p>
            As delivery services are embraced by the FMCG industry,
            sustainability has become a critical issue. Online shopping
            convenience shouldn't be exchanged for worsening environmental
            conditions. Food and beverage firms are progressively implementing
            environmentally sustainable packaging, streamlining delivery routes
            to reduce carbon emissions, and investigating substitute fuels for
            their delivery vehicles. Furthermore, the move to delivery offers a
            chance to encourage mindful consumption. FMCG companies have the
            ability to enable consumers to make informed decisions by drawing
            attention to the environmental impact of their products and
            promoting sustainable practices.
          </p>
          <h3 className=" text-[16px] font-semibold ">3.The Road Ahead</h3>
          <p>
            Future trends indicate that the combination of FMCG and delivery
            services will significantly alter the retail environment. The
            delivering experience will only get more smooth and engaging as
            technology develops. The applications of drone delivery and
            predictive analytics are virtually limitless. But despite all of the
            innovation, one thing hasn't changed: the importance of the customer
            comes first. Success in the FMCG industry ultimately depends on
            recognizing and anticipating customer requirements. Through the use
            of delivery services, FMCG firms can create enduring relationships
            with customers in the digital age by providing unmatched
            convenience, customisation, and sustainability. In conclusion, a
            paradigm shift in retail has occurred with the union of FMCG and
            delivery services. FMCG companies may prosper in a dynamic industry
            by embracing this shift and remaining aware of consumer preferences.
            The FMCG industry is being overtaken by the digital wave, and the
            future appears brighter than ever.
          </p>
        </div>
      </section>
      <Footer />

      <ScrollToTop />
    </main>
  );
});

Blog_April.displayName = "Blog_April";

export default Blog_April;
