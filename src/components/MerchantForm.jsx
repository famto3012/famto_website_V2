import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./button";
import axios from "axios";
import Select from "react-select";
import { useToast } from "@chakra-ui/react";

const BASE_URL = "https://api.famto.in/api/v1";

const MerchantForm = React.memo(() => {
  const form = useRef();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [merchantData, setMerchantData] = useState({
    name: "",
    businessType: "",
    businessName: "",
    location: "",
    phoneNumber: "",
    email: "",
  });

  const [allBusinessType, setAllBusinessType] = useState([]);
  const [category, setCategory] = useState("");

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
  },[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMerchantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const categoryOptions = allBusinessType.map((category) => ({
    label: category.title,
    value: category.title,
  }));

  const handleChangeSelect = (option) => {
    setCategory(option.value);
    setMerchantData({ ...merchantData, businessType: option.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { name, businessType, businessName, location, phoneNumber, email } =
      merchantData;

    if (
      !name ||
      !businessType ||
      !businessName ||
      !location ||
      !phoneNumber ||
      !email
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

  return (
    <>
      <main className="bg-white/90 p-4 rounded-lg lg:mx-0 w-[25rem] h-fit mt-10 md:mt-0">
        <div className="py-2 font-medium text-[16px] mb-1 md:text-[20px]">
          <h1>Become a Merchant</h1>
        </div>
        <form ref={form} onSubmit={handleFormSubmit} className="grid gap-2">
          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
              Business Type
            </label>

            <Select
              options={categoryOptions}
              value={categoryOptions.find(
                (option) => option.value === category
              )}
              onChange={handleChangeSelect}
              className="min-w-[10rem]"
              placeholder="Select Business category"
              isSearchable={true}
              isMulti={false}
              styles={{
                control: (provided) => ({
                  ...provided,
                  paddingRight: "",
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  padding: "10px",
                }),
              }}
            />
          </div>

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
              Name of Owner
            </label>
            <input
              type="text"
              name="name"
              value={merchantData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              className="outline-none focus:outline-none px-2 p-1 border h-[43px] border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-2">
            <label className="font-[400] text-[14px] md:text-[14px]">
              Business name
            </label>
            <input
              type="text"
              name="businessName"
              value={merchantData.businessName}
              onChange={handleInputChange}
              placeholder="Enter your Business Name"
              className="outline-none focus:outline-none px-2 p-1 border h-[43px] border-gray-200 rounded-lg placeholder:text-[13px]"
            />
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
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
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
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
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
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
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
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="flex justify-end mt-3 mb-3">
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
});

MerchantForm.displayName = 'MerchantForm'

export default MerchantForm;
