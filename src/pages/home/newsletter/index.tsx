import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
    return (
        <section id='newsletter' className='px-[10px] py-10 min-[500px]:py-14 sm:py-16 md:py-[72px] bg-secondary700 flex flex-col items-center'>
            <h1 className='text-center text-white font-semibold text-xl min-[500px]:text-2xl md:text-3xl'>Subscribe to our newsletter</h1>
            <p className='mt-2 mb-6 sm:mt-3 sm:mb-8 text-center text-gray300 text-xs min-[500px]:text-sm sm:text-base'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et <br className='hidden min-[430px]:block' /> cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            <form action="/" className='relative w-full min-[400px]:w-3/4 min-[500px]:w-2/3 lg:w-1/2'>
                <input className='text-xs min-[400px]:text-sm sm:text-base w-full px-3 py-2 min-[400px]:px-3 min-[400px]:py-2.5 sm:px-5 sm:py-4 lg:px-7 lg:py-6 text-gray900 outline-none rounded-md placeholder:font-medium lg:placeholder:font-semibold' type="email" placeholder='Email address' required />
                <button className='absolute top-1 right-1 min-[400px]:top-1.5 min-[400px]:right-1.5 sm:top-2.5 sm:right-2.5 lg:top-2.5 lg:right-2.5 py-1 px-2 min-[400px]:py-1.5 min-[400px]:px-2.5 sm:py-2 sm:px-4 lg:py-[14px] lg:px-6 flex items-center gap-1 sm:gap-1.5 bg-primary500 rounded-md text-[10px] min-[400px]:text-xs lg:text-sm text-white uppercase font-semibold transition hover:bg-primary400'>
                    subscribe
                    <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
                </button>
            </form>
            <div className='my-6 min-[500px]:my-8 h-[1px] w-3/4 min-[500px]:w-2/4 lg:w-1/3 bg-gray400'></div>
            <div>
                <div className='flex items-center gap-4 min-[400px]:gap-6 sm:gap-12 flex-wrap justify-center min-[500px]:justify-normal min-[500px]:flex-nowrap'>
                    <Image src={"/icons/google.svg"} alt='GOOGLE' width={72} height={24} className='w-16 min-[400px]:w-20 sm:w-24 lg:w-28' />
                    <Image src={"/icons/amazon.svg"} alt='AMAZON' width={72} height={24} className='w-16 min-[400px]:w-20 sm:w-24 lg:w-28' />
                    <Image src={"/icons/philips.svg"} alt='PHILIPS' width={72} height={24} className='w-16 min-[400px]:w-20 sm:w-24 lg:w-28' />
                    <Image src={"/icons/toshiba.svg"} alt='TOSHIBA' width={72} height={24} className='w-16 min-[400px]:w-20 sm:w-24 lg:w-28' />
                    <Image src={"/icons/samsung.svg"} alt='SAMSUNG' width={72} height={24} className='w-16 min-[400px]:w-20 sm:w-24 lg:w-28' />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter