import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ value, click }) => {
  return (
    <>
      <button
        onClick={click}
        className="bg-[#00ced1] flex md:px-6 px-10 p-2 text-white gap-2 items-center rounded-lg w-fit hover:bg-black  transition-all relative overflow-hidden group"
      >
        <p className="transform transition-transform duration-300 group-hover:-translate-x-1">
          {value}
        </p>
        <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </>
  );
};

export default Button;
