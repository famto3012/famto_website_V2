import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./button";
import axios from "axios";

const BASE_URL = "https://famto-backend-api.vercel.app/api/v1";

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
  });

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
        <form ref={form} onSubmit={handleFormSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
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

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
              Business Type
            </label>
            <select
              name="businessType"
              value={merchantData.businessType}
              onChange={handleInputChange}
              className="outline-none focus:outline-none px-3 p-2 border border-gray-200 rounded-lg placeholder:text-[13px] placeholder:text-gray-100"
            >
              <option
                defaultValue="Business Type"
                hidden
                className="text-[10px] text-gray-500"
              >
               <p className="text-[13px] text-gray-500">Enter your business type</p>
              </option>
              {allBusinessType.map((businessType) => (
                <option key={businessType._id} value={businessType.title}>
                  {businessType.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
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

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
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

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
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
            <label className="font-[400] text-[14px] md:text-[14px]">
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
                value={isLoading ? "Sending..." : "Get Started"}
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
