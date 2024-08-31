import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const FAQ = () => {
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
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Ffaq.svg?alt=media&token=82573efe-719a-4a99-a387-8a34a50e58c2"
            alt="FAQ"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[2rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:ps-[4rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FBlack_logo.svg?alt=media&token=214d8656-3f79-4af9-a37e-5f61daec8e63"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[16px] md:text-[20px] text-center  absolute bottom-4 left-1/2 transform -translate-x-1/2">
            FAQ
          </h4>
        </div>
      </div>

      <section
        className="w-full text-[13px] md:text-[14px]  px-[2rem] md:px-[4rem] 
      py-[1rem] mb-[2rem] font-[400]"
      >
        <div
        // style={{ marginLeft: "70px", marginRight: "65px", maxWidth: "100vw" }}
        >
          <h3 className="faq">What is custom order?</h3>
          <p>
            Order anything from any nearby Store. the Delivery boy will shop for
            you and deliver to your door steps. Eg : You may want to order Water
            Bottle, Cold Drink, snacks for a quick party you may have arranged.
            You can select a Store from your nearby area on the App and put all
            order detail. The service provider will receive order and will go to
            your selected store and handpick all items. He will confirm price
            and detail with you and then purchase the items and deliver to your
            home instantly. You will be able to see his location in real time on
            map while he is bringing items to your home.
          </p>
          <h3 className="faq">What is pick and drop?</h3>
          <p>
            Hire a delivery boy that will do your errand jobs of Pickup & Drop
            in your nearby area. Eg: You ordered a cake from a nearby bakery and
            want someone to pick it up for you as you are busy in arrangements
            of party. The delivery boy will do the task for you. He will go to
            the Bakery as per the instructions you listed in App and pickup the
            cake that you already paid for earlier. And deliver at your home.
            You as a user will be able to see the location of the delivery Boy
            on map in real time so you know where he is all the time while
            working on your tasks.
          </p>
          <h3 className="faq">What is multiple pick and drop?</h3>
          <p>
            Multiple pick and drop is a service that allows you to schedule
            several pickups and deliveries at different locations. This means
            you can have items picked up from single location and delivered to
            various destinations according to your needs. It's a flexible and
            convenient option for managing complex logistics or coordinating
            deliveries to multiple addresses.
          </p>
          <h3 className="faq">
            Can I schedule a order for future date or dates?
          </h3>
          <p>
            Yes, you can schedule your order for a future date or multiple dates
            during the checkout process. Simply select your preferred delivery
            dates, and we'll ensure your order is delivered accordingly
          </p>
          <h3 className="faq">How can we connect Famto Customer Care?</h3>
          <p>
            You can email us your issue on contact@famto.in. A customer care
            executive will be assigned to you shortly.
          </p>
          <h3 className="faq">How can I provide my feedback?</h3>
          <p>
            You can email to us on contact@famto.in or share feedback on google
            play store.
          </p>
          <h3 className="faq">Can I edit my order?</h3>
          <p>
            Your order can be edited before it reaches the merchant. You could
            contact the customer support team via a call to do so. Once an order
            is placed and the merchant accepts the order, you don’t have option
            to edit the order.
          </p>
          <h3 className="faq">I want to cancel my order?</h3>
          <p>
            You can track your order once the third party accepts it, and you
            can also cancel it on the order tracking page.
          </p>
          <h3 className="faq">Is there a minimum order value?</h3>
          <p>
            For some merchant in the app there will be minimum order quantity
            which would be mentioned.
          </p>
          <h3 className="faq">
            How long does Famto takes to deliver an order?
          </h3>
          <p>
            Normally the order will be delivered within 60 minutes of placing
            the order. Adverse weather/long distance/traffic may cause slight
            variations.
          </p>
          <h3 className="faq">What are Famto delivery hours?</h3>
          <p>On all days we are working from 8 AM to 9 PM.</p>
          <h3 className="faq">Can I order from any location?</h3>
          <p>
            Merchants within 10 km from the delivery location will be shown in
            the app. For custom orders there is no km limit, provided return
            charges will be applicable for the particular order.
          </p>
          <h3 className="faq">
            Is single order from different merchant possible?
          </h3>
          <p>
            No, it is not possible. You need to go for three different orders.
            We are working on this criteria and will be coming up with this
            soon.
          </p>
          <h3 className="faq">Do you support bulk orders?</h3>
          <p>
            Yes, we provide bulk orders for on-time delivery , If ordered at
            least 24 hours in advance.
          </p>
          <h3 className="faq">Can I change address/number?</h3>
          <p>
            Before proceeding with the order please check your delivery address
            and phone number.
          </p>
          <h3 className="faq">Unable to view the details in my profile</h3>
          <p>
            If you have any app related issue,please update the app or uninstall
            and reinstall the app. If the issue still persists contact us at{" "}
            <strong>
              <a href="mailto:contact@famto.in">contact@famto.in</a>
            </strong>
            .
          </p>
          <h3 className="faq">
            Can I Pay online Payment when my order is delivered to me?{" "}
          </h3>
          <p>
            Yes you can. On receiving the order you can pay through the
            G-pay/Phone pay number provided by the delivery agent.
          </p>
          <h3 className="faq">Any other Query?</h3>
          <p>
            If you have any other queries, Please contact through{" "}
            <strong>
              <a href="mailto:contact@famto.in">contact@famto.in</a>
            </strong>{" "}
            or{" "}
            <strong>
              <a href="tel:+919778180794">+91 97781 80794</a>
            </strong>
          </p>
          <h3 className="faq">I forgot my password</h3>
          <p>
            If you have created an account and forgot the password, then click
            on the login/sign up icon at the top of the page-click on forgot
            password-recovery password will be send to your registered mobile
            number/registered mail id.
          </p>
          <h3 className="faq">I want an invoice for my order?</h3>
          <p>
            Invoice copy of the order will be send to your register Mail ID.
          </p>
          <h3 className="faq">I didn't receive any order confirmation</h3>
          <p>
            Please check for the message in your registered mobile number/ Mail
            ID,if not there, then please share the details to{" "}
            <strong>
              <a href="mailto:contact@famto.in">contact@famto.in</a>
            </strong>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQ;
