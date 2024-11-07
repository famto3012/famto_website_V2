import React, { useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import Button from "./button";

const AgentForm = React.memo(() => {
  const form = useRef();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    email: "",
  });
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.name ||
      !formData.location ||
      !formData.phoneNumber ||
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

  return (
    <>
      <form
        className="bg-white/90 p-6 rounded-lg lg:mx-14 w-[25rem] h-fit"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="py-2 font-medium text-[16px] md:text-[20px] mb-2">
          <h1>Become a Delivery Agent</h1>
        </div>
        <div className="grid gap-5">
          <input type="hidden" name="type" value="agent" />

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your Name"
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your Location"
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Phone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="grid gap-1">
            <label className="font-[400] text-[14px] md:text-[16px]">
              Mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your mail address"
              className="outline-none focus:outline-none px-2 p-1 h-[43px] border border-gray-200 rounded-lg placeholder:text-[13px]"
            />
          </div>

          <div className="flex justify-end pt-3">
            {!emailSuccess && (
              <Button
                click={sendEmail}
                value={isLoading ? "Sending..." : "Get Started"}
              />
            )}
            {emailSuccess && (
              <p className="text-center text-[#21958f]">
                We have received your message and will get back to you shortly!
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
});

AgentForm.displayName = "AgentForm";

export default AgentForm;
