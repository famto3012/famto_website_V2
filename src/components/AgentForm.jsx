import React from 'react'
import Button from "./button";

const AgentForm = () => {
  return (
    <>
    <main className="bg-white/90 p-4 rounded-lg lg:mx-0  w-[25rem] h-fit">
      <div className="py-2 font-medium text-[20px]">
        <h1>Become a Delivery Agent</h1>
      </div>
      <div className="grid gap-5">
        <div className="grid gap-1">
          <label className="font-[400]">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg"
          ></input>
        </div>
        <div className="grid gap-1">
          <label className="font-[400]">Location</label>
          <input
            type="text"
            placeholder="Enter your Location"
            className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg"
          ></input>
        </div>

        <div className="grid gap-1">
          <label className="font-[400]">Phone</label>
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg"
          ></input>
        </div>
        <div className="grid gap-1">
          <label className="font-[400]">Mail</label>
          <input
            type="text"
            placeholder="Enter your mail address"
            className="outline-none focus:outline-none px-2 p-1 border border-gray-200 rounded-lg"
          ></input>
        </div>
        <div className="flex justify-end p-3">
          <Button 
          value="Get Started"/>
        </div>
      </div>
    </main>
  </>
  )
}

export default AgentForm
