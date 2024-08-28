import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const CancellationAndRefundPolicy = () => {
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
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Frefund.svg?alt=media&token=18dfff7e-affa-489f-9ad7-a08267d84d14"
            alt="Terms & Condition"
          />
        </figure>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <Link to={"/"} className="mt-2 md:mt-8 ms-[40px]">
            <img
              className="w-[7rem] h-[rem] md:w-[10rem] md:h-[4rem] ps-[2rem] md:ps-[4rem] transition-all"
              src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
              alt="Logo"
            />
          </Link>
          <h4 className="text-white text-[16px] md:text-[20px] text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Cancellation & Refund Policy
          </h4>
        </div>
      </div>

      <section
        className="w-full text-[14px] md:text-[15px]  px-[2rem] md:px-[4rem] 
      py-[1rem] mb-[2rem] font-[400]"
      >
        <h3 className="termHeading">Cancellation Policy</h3>
        <ul className=" list-disc ps-[1rem] md:ps-[1.5rem]">
          <li>
            If you want to cancel the order please notify us within 5 Minutes of
            placing the order via chat head.
          </li>
          <li>
            If the cancellation was made within 5 minutes and once Famto has
            accepted your cancellation, we will refund or re-credit your debit
            or credit card with the full amount, which includes the initial
            delivery charge (where applicable) which you paid for the delivery
            of the Goods or the Services, as applicable.
          </li>
          <li>
            Famto or Merchant may cancel an order if the product is not
            available for any reason. If it is online payment the same amount
            will be refund to your mode of payment. If you didn’t get a refund
            after repeated requests, email:{" "}
            <strong>
              <a href="mailto:contact@famto.in">contact@famto.in</a>
            </strong>
          </li>
          <li>
            As a general rule customer shall not be entitled to cancel Order
            once placed. Customer may choose to cancel Order only within
            five-minute of the Order being placed. However, subject to customer
            previous cancellation history, Famto reserves the right to deny any
            refund to Customer pursuant to a cancellation initiated by Customer
            even if the same is within five-minute followed by suspension of
            account, as may be necessary in the sole discretion of Famto.
          </li>
          <li>
            If Customer cancels his/her Order after five minute of placing it,
            Famto shall have a right to collect a penalty of 100% of the Order
            amount for breach of contract terms as a compensation for the
            damages suffered by Famto, with a right to either not to refund the
            Order value in case Customer Order is prepaid or recover from the
            Customer subsequent Order in case his/her Order is postpaid, to
            compensate the Merchants.
          </li>
        </ul>

        <h3 className="termHeading">Refund Policy</h3>
        <p>
          You shall be entitled to a refund only if you pre-pay for your order
          at the time of placing your order on the Famto Platform and only in
          the event of any of the following circumstances:
        </p>
        <ul className="  list-disc ps-[1rem] md:ps-[1.5rem] mt-[20px]">
          <li>
            Your order packaging has been tampered or damaged at the time of
            delivery.
          </li>
          <li>
            Canceling your order due to your delivery location following outside
            our designated delivery zones; Failure to contact you by phone or
            email at the time of confirming the order booking; or You canceling
            the order at the time of confirmation due to unavailability of the
            items you ordered for at the time of booking.
          </li>
          <li>
            Our decision on refunds shall be at our sole discretion and shall be
            final and binding.
          </li>
        </ul>
        <p className="mt-[20px]">
          All refund amounts shall be credited to your account within 5-7
          business days depending upon the mode of payment partner in accordance
          with the terms that may be stipulated by the bank which has issued the
          credit / debit card.
        </p>

        <div className="overflow-auto my-12">
          <table className="border rounded-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mode of Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Taken
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Net Banking</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Debit/Credit Cards
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">UPI</td>
                <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Amazon Pay (Wallet)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Amazon Pay (CC/DC/NB)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Phone Pe (Wallet)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Phone Pe (CC/DC/NB)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Wallet-Paytm/Mobikwik/Freecharge
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Lazy Pay</td>
                <td className="px-6 py-4 whitespace-nowrap">2 hours</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Sodexo</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5-7 Business Days
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="termHeading">Customer Service</h3>
        <p>
          If you have any queries on Cancellation and Refund policy please
          contact us directly: Phone No: +91 97781 80794   or  email:{" "}
          <strong>
            <a href="mailto:contact@famto.in">contact@famto.in</a>
          </strong>
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default CancellationAndRefundPolicy;
