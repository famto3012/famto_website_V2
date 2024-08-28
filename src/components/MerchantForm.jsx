import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./button";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const MerchantForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [merchantData, setMerchantData] = useState({
    name: "",
    businessType: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const [allBusinessType, setAllBusinessType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/admin/business-categories/get-all-business-category`
        );
        if (response.status === 200) {
          setAllBusinessType(response.data.data);
        }
      } catch (err) {
        console.log(`Error in fetching business type`);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMerchantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <>
      <main className="bg-white/90 p-4 rounded-lg lg:mx-0 w-[25rem] h-fit">
        <div className="py-2 font-medium text-[16px] mb-2 md:text-[20px]">
          <h1>Become a Merchant</h1>
        </div>
        <form ref={form} onSubmit={handleFormSubmit} className="grid gap-5">
          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={merchantData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Business Type
            </label>
            <select
              name="businessType"
              value={merchantData.businessType}
              onChange={handleInputChange}
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            >
              <option defaultValue="Business Type" hidden className="text-[13px] text-gray-500">
                Select your Business Type
              </option>
              {allBusinessType.map((businessType) => (
                <option key={businessType._id} value={businessType.title}>
                  {businessType.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Business Location
            </label>
            <input
              type="text"
              name="location"
              value={merchantData.location}
              onChange={handleInputChange}
              placeholder="Enter your Location"
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Business Phone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={merchantData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Business Mail
            </label>
            <input
              type="email"
              name="email"
              value={merchantData.email}
              onChange={handleInputChange}
              placeholder="Enter your Business mail address"
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>
          <div className="hidden">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Type of user
            </label>
            <input
              type="text"
              name="type"
              value="Merchant"
              placeholder="Enter your Type"
              className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="flex justify-end p-3">
            {!emailSuccess && (
              <Button
                click={handleFormSubmit}
                value={isLoading ? "Sending..." : "Send  Us"}
              />
            )}

            {emailSuccess && (
              <p className="text-center text-[#21958f]">
                We have received your details and will get back to you shortly!
              </p>
            )}
          </div>
        </form>
      </main>
    </>
  );
};

export default MerchantForm;
