import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = () => {
    return (
        <button className={`bg-warning500 flex items-center gap-2 justify-center rounded-sm md:gap-3 w-24 min-[400px]:w-28 sm:w-32 md:w-36 lg:w-40 h-7 min-[400px]:h-8 sm:h-9 md:h-10 transition hover:bg-yellow-300`}>
            <span className='text-black text-[10px] min-[400px]:text-xs sm:text-sm lg:text-base font-semibold uppercase'>shop now</span>
            <ArrowRight className='w-4 h-4 md:w-5 md:h-5' />
        </button>
    )
}

export default Button