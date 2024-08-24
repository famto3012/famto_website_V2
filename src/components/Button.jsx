import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Button = ({value}) => {
  return (
    <>
    <div className='bg-[#00ced1] flex px-10 p-2 text-white gap-3 items-center rounded-lg w-fit hover:bg-black hover:gap-6 transition-all'>
    {value} <FaArrowRight />
    </div>
    </>
  )
}

export default Button