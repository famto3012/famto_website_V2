import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import MerchantForm from '../components/merchantForm'
import { Link } from 'react-router-dom'
import AgentForm from '../components/AgentForm'

const DeliveryAgent = () => {
  return (
    <>
    <div className="relative w-full">
      <figure className="h-[50rem] md:h-[80vh]">
        <img
          className="w-full h-full object-cover"
          src="delivery.svg"
          alt="Be A Merchant logo"
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col items-start">
        <Link to={"/"} className="mt-2 md:mt-8 md:ms-10">
          <img
            className="w-[7rem] h-[4rem] md:w-[10rem] md:h-[4rem] ps-[2rem] transition-all"
            src="https://firebasestorage.googleapis.com/v0/b/famto-admin-panel.appspot.com/o/Famto%20website%20assets%2Flogo.svg?alt=media&token=d1f9913a-91b2-482e-9a03-a44080d57d4e"
            alt="Logo"
          />
        </Link>
        <div className="text-white md:p-5 md:top-[50%] top-[10%] md:text-4xl absolute grid md:ps-10 ps-3 order-1">
          <p className="grid md:ps-8 ps-4">
            {" "}
            <span>Come,</span> Work with us
          </p>

          <div className="relative flex items-center md:gap-4 gap-1">
            <FaArrowLeft className="md:text-[22px] text-[15px]" />
            <div className="relative flex-grow">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ced1]/30 via-[#00ced1]/10 to-transparent z-0"></div>
              <p className="relative text-[18px] mt-3 border-l-4 border-[#00ced1] ps-2 z-10">
                Famto Delivery Agent
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex md:justify-end md:items-center items-end  mt-10 mb-10 md:p-20 order-2 p-5">
          <AgentForm/>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center p-10">
        <p className="md:font-semibold">Why be a</p>
        <p className="text-cyan-500 md:text-[32px] text-[20px]">
          Famto Delivery Agent?
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <p className="md:font-semibold">That’s all we ask for</p>
        <p className="text-cyan-500 md:text-[32px] text-[20px]">
        Working with us
        </p>
      </div>
      
    </>
  )
}

export default DeliveryAgent
