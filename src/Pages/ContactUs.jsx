import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BiLinkExternal } from "react-icons/bi";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Button from "../components/button";
import emailjs from "@emailjs/browser";
import ScrollToTop from "../components/ScrollToTop";
import { useToast } from "@chakra-ui/react";

const ContactUs = React.memo(() => {
  const form = useRef();
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const toast = useToast();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.name ||
      !formData.description ||
      !formData.phoneNumber ||
      !formData.subject ||
      !formData.email
    ) {
      toast({
        title: "Error",
        description: "Please fill in all the fields before submitting.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_7nbtc5s",
        "template_ebje7y8",
        form.current,
        "BCksrsi3-GXimg3ZR" // Replace with your public key
      );

      setEmailSuccess(true);
    } catch (err) {
      setEmailSuccess(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="relative">
      <div className="relative w-full">
        <figure className="h-[19rem] md:h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fcontact-us.svg?alt=media&token=ec53562e-7f37-42ce-92f4-0bde4aa4d8cf"
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
          <h4 className="text-white text-[16px] md:text-[20px] font-medium text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Contact us
          </h4>
        </div>
      </div>
      <section className="flex flex-col md:flex-row w-full ">
        <div className="w-full md:w-[50%] mb-[4rem] mt-[40px]">
          <div className="flex flex-col space-y-12 mx-auto px-[2rem] md:px-[4rem]">
            <h1 className="md:text-[16px] text-[14px] font-[500]">
              Come Let's
              <span className="block md:text-[32px] text-[20px] font-normal text-[#00Ced1]">
                Get In Touch
              </span>
            </h1>
            <div className="flex flex-row gap-10 ">
              <LocalPhoneOutlinedIcon
                className="text-[#00Ced1] rounded-lg p-2 border border-gray-200"
                style={{ fontSize: "50px" }}
              />
              <div>
                <h1 className="text-black/50">Give us on call</h1>
                <a
                  href="tel:+919778180794"
                  className="md:text-[18px] font-medium"
                >
                  +91 97781 80794
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-10  ">
              <MailOutlineOutlinedIcon
                className="text-[#00Ced1] rounded-lg p-2 text-[56px] border border-gray-200"
                style={{ fontSize: "50px" }}
              />
              <div>
                <h1 className="text-black/50">Drop us a mail on</h1>
                <a
                  href="mailto:contact@famto.in"
                  className="md:text-[18px] font-medium"
                >
                  contact@famto.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-10 ">
              <div className=" w-[3.2rem]">
                <FmdGoodOutlinedIcon
                  className="text-[#00Ced1] rounded-lg p-2 text-[56px] border border-gray-200 "
                  style={{ fontSize: "50px" }}
                />
              </div>
              <div>
                <h1 className="text-black/50">You can visit us at</h1>
                <p className="sm:w-2/3 font-medium mb-4">
                  A-18, Lekshmi Nagar, Kesavadasapuram, Thiruvananthapuram,
                  Kerala 695004
                </p>
                <a
                  href="https://maps.app.goo.gl/4YowwEyn3SUxdTSK9"
                  className="md:text-[18px] text-[#00Ced1] underline underline-offset-2 flex items-center gap-2"
                >
                  View on Map <BiLinkExternal className="text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[70%] ">
          <div className="max-w-4xl lg:max-w-full bg-[#f7f7f7] pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between  ps-8 gap-8">
              <div className="flex items-center order-2 md:order-1 md:mt-10">
                <figure className="h-20 w-20">
                  <img
                    className="w-full h-full object-cover"
                    src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2Fwaving-hand.svg?alt=media&token=a7133b52-0416-41b9-a9f2-d5c69b998a27"
                    alt=""
                  />
                </figure>
              </div>
              <div className="text-black/50 text-[14px] sm:text-lg flex items-center justify-end space-x-4 order-1 md:order-2 mt-10">
                <p>Great, We are excited to hear from you.</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/famtowebsite.appspot.com/o/images%2FArrow.svg?alt=media&token=d5b40fa8-cdfb-43a4-a660-ef061564e46c"
                  alt="arrow"
                />
              </div>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-[2rem] md:px-[3rem] md:text-[14px]"
            >
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  required
                  placeholder="Enter your phone number"
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                />
              </div>

              <div>
                <label className="block text-gray-700">Mail</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Enter your mail address"
                  className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                />
              </div>

              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  onChange={handleInputChange}
                  placeholder="Give us a brief description on the matter"
                  className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                />
              </div>

              <div className="sm:col-span-1 md:col-span-2">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  placeholder="Describe the matter"
                  className="mt-1 p-3 w-full border outline-none focus:outline-none rounded-md shadow-sm placeholder:text-[13px]"
                  rows="4"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div>
                {!emailSuccess && (
                  <Button
                    click={sendEmail}
                    value={isLoading ? "Sending..." : "Send  Us"}
                  />
                )}

                {emailSuccess && (
                  <p className="text-center text-[#21958f]">
                    We have received your message and will get back to you
                    shortly!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;
