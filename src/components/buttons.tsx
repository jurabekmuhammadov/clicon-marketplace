import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = () => {
    return (
        <button className='bg-yellow-400 flex items-center gap-2 justify-center md:gap-3 w-24 min-[400px]:w-28 sm:w-32 md:w-36 lg:w-40 h-7 min-[400px]:h-8 sm:h-9 md:h-10 transition hover:bg-yellow-300'>
            <span className='text-black text-[10px] min-[400px]:text-xs sm:text-sm lg:text-base font-semibold uppercase'>shop now</span>
            <FaArrowRightLong className='w-3 h-3 md:w-4 md:h-4' />
        </button>
    )
}

export default Button