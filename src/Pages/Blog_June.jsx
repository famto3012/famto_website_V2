import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import ScrollToTop from "../components/ScrollToTop";

const Blog_June = React.memo(() => {
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
            src="/blog/june/blog-june.svg"
            alt="blog image"
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
        </div>
      </div>
      <section className="w-full text-[14px] md:text-[14px] px-[2rem] md:px-[4rem] py-[2rem] mb-20">
        <Link to="/blogs">
          <div className="text-black flex items-center gap-x-2 my-2 underline underline-offset-2">
            <WestOutlinedIcon /> Back
          </div>
        </Link>

        <div className="flex flex-col md:items-center md:justify-center md:text-center py-10 w-full md:w-[90%]  mx-auto">
          <h1 className="text-[18px] font-semibold md:text-[26px] lg:text-[32px] leading-tight">
            A Comprehensive Guide to Price Comparison for Customers and
            Merchants on Indian Delivery Apps
          </h1>
          <h1 className="text-black/25 md:mt-4 order-4 md:order-3">
            June 01,2024
          </h1>
          <h1 className="text-cyan-400 italic md:mt-4 my-4 font-semibold order-3 md:order-4">
            By Famto content team
          </h1>
        </div>
        <p className="mb-[1rem]">
          Delivery applications are now a necessary component of daily life in
          the dynamic and ever changing Indian e-commerce market. Knowing the
          price comparison environment is essential for optimizing benefits,
          whether you are a customer placing an order for your favorite meal or
          a merchant looking to grow. This blog explores the subtleties of
          pricing comparison for Indian delivery app users and merchants.
        </p>
        <h1 className="font-[600] mb-5">
          For Customers: How to Get the Best Deals
        </h1>
        <p className="mb-[1rem]">
          <span className="font-[600]"> Comparing Delivery Apps: </span> Every
          site has unique offerings, price policies, and promotions.
          <p className="my-5">Customers should:</p>
          <li>
            {" "}
            Download Multiple Apps: Install many delivery apps on your
            smartphone to make price comparisons simple..
          </li>
          <li className="mt-2">
            {" "}
            Look for Sales and Savings: Apps frequently provide special
            discounts and offers. One might offer a discount on a restaurant,
            other comparable offer at a lesser cost.
          </li>
          <p className="my-[1rem]">
            <span className="font-[600]">
              Using Tools and Websites for Price Comparison :{" "}
            </span>
            You may compare prices across various delivery platforms with the
            aid of a number of tools and websites. Deals from different
            applications are compiled on websites, which makes it easier to
            locate the cheapest price without having to manually check each one.
          </p>
          <p>
            <span className="font-[600]">
              Making Use of Bank and Wallet Offers:
            </span>{" "}
            To offer extra savings or rebates, banks and digital wallets
            frequently collaborate with delivery apps.
          </p>
          <p className="my-3">Look for deals from:</p>
          <li>
            {" "}
            Digital wallets like Paytm, PhonePe, and Google Pay frequently offer
            rewards on purchases.
          </li>
          <li className="mt-2">
            {" "}
            Credit/Debit Cards: When you pay with one of these cards, many banks
            give you a discount.
          </li>{" "}
          <p className="mt-5">
            <span className=" font-[600]">When to Place Your Orders:</span>{" "}
            Placing your orders outside of busy times can occasionally result in
            lower shipping costs and better discounts. In an effort to draw in
            more business, lunchtime and late-night snacks frequently have lower
            costs.
          </p>{" "}
          <span className="font-[600]">Subscription Plan:</span> Delivery
          applications offers subscription plans, such as app Super or app Gold,
          that include free delivery, special discounts, and more advantages.
          These subscriptions can result in significant discounts if you place
          orders frequently.
        </p>
        <h1 className="font-[600] my-5">
          For Merchants: Optimizing Your Pricing Strategy
        </h1>
        <div>
          <p className="mb-5">
            <span className="font-[600]">
              Understanding the Commission Structure:
            </span>{" "}
            Each time an order is placed, delivery apps charge merchants a
            commission. It's important to comprehend the commission structure:
          </p>
          <li>
            Negotiation: Larger chains may be able to obtain cheaper commissions
            through stronger negotiating position.{" "}
          </li>
          <li className="mt-2">
            Dynamic Pricing: Demand and supply-driven dynamic pricing mechanisms
            are available in certain apps.
          </li>
          <p className="my-5">
            <span className="font-[600]">Setting Competitive Prices:</span>{" "}
            Establish competitive rates that are in line with market demand to
            draw in more clients:
          </p>
          <li>
            Analyze Competitor Pricing: Keep a regular eye on the prices your
            rivals are charging for comparable goods.
          </li>
          <li className="mt-2">
            Promotional Pricing: Provide time-limited discounts to increase
            awareness and draw in new clients.
          </li>
          <p className="mt-5">
            <span className="font-[600]">Exclusive Deals with Apps:</span>{" "}
            Sometimes, working with just one delivery app might lead to better
            terms and increased support for promotions. But doing so can
            restrict your reach to the users of that particular app.
          </p>
          <h1 className="font-[600] my-3">Optimizing Delivery Charges: </h1>
          <li>
            Taking Delivery Charges Into Account: In order to offer "free
            delivery," which may entice buyers more, some retailers incorporate
            delivery charges into the product price.
          </li>
          <li className="mt-2">
            Shared Delivery Charges: As an alternative, you can maintain lower
            product prices while still paying delivery costs by splitting the
            cost of delivery with your clients.
          </li>
          <p className="my-5">
            <span className="font-[600]">Customer Feedback and Ratings:</span>
            Customer reviews have a big influence on how visible you are on
            delivery apps. Make sure you:
          </p>
          <li>
            Maintain High Quality: Higher ratings will result from timely
            deliveries and consistent quality.
          </li>
          <li className="mt-2">
            Engage with Feedback: Reacting to evaluations from customers
            demonstrates your appreciation for their input and can improve your
            reputation.
          </li>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
});

Blog_June.displayName = "Blog_June";

export default Blog_June;
