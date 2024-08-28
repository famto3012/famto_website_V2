import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Button = ({value, click}) => {
  return (
    <>
    <button onClick={click} className='bg-[#00ced1] flex md:px-6 px-10 p-2 text-white gap-3 items-center rounded-lg w-fit hover:bg-black hover:gap-6 transition-all'>
    {value} <FaArrowRight />
    </button>
    </>
  )
}

export default Button





