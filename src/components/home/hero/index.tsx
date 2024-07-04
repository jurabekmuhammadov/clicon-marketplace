import { ArrowRight, CreditCard, Headset, Trophy, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Carousel from './carousel'

const Hero = () => {
    return (
        <section className='mt-4 mb-10 sm:mt-8 sm:mb-20'>
            <div className='grid grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-3 sm:gap-4 md:gap-6'>

                <div className="row-start-1 row-end-3 col-start-1 col-end-5">
                    <Carousel />
                </div>

                <div className="h-auto sm:h-48 lg:h-auto block rounded-md row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 col-start-1 col-end-3 lg:col-start-5 lg:col-end-7 bg-gray900 p-3 min-[450px]:p-5 md:p-6 relative overflow-hidden">
                    <div className='absolute z-10'>
                        <p className='uppercase text-[10px] min-[450px]:text-xs xl:text-sm text-warning500 font-medium'>summer sales</p>
                        <h3 className='mt-1 text-white text-base sm:text-lg md:text-xl xl:text-2xl font-semibold leading-5 sm:leading-6'>New Google <br /> Pixel 6 Pro</h3>
                        <button className="text-[10px] min-[450px]:text-xs sm:text-sm md:text-sm lg:text-base mt-[11.5px] min-[450px]:mt-4 md:mt-4 flex items-center gap-1 min-[450px]:gap-1.5 sm:gap-2 xl:gap-3 py-1 px-1.5 min-[450px]:py-1.5 min-[450px]:px-2 sm:py-2 sm:px-3 md:py-2 md:px-3 xl:py-4 xl:px-6 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='text-white w-3 h-3 min-[450px]:w-4 min-[450px]:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                        </button>
                    </div>
                    <Image src={"/product-images/mobile-phones/google-3.svg"} alt='Google Pixel 6 Pro' width={120} height={120} className='w-20 h-20 min-[450px]:w-28 min-[450px]:h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 absolute bottom-0 right-0' />
                    <div className='absolute py-0.5 min-[450px]:py-1 px-1 min-[450px]:px-1.5 sm:px-2 sm:py-1 md:py-1 md:px-2 xl:px-4 xl:py-2 bg-warning500 rounded-sm uppercase text-[10px] min-[450px]:text-xs sm:text-sm lg:text-base xl:text-lg font-semibold top-3 min-[450px]:top-5 right-3 min-[450px]:right-5 md:top-4 md:right-4 lg:top-5 lg:right-5 text-gray900'>
                        29% off
                    </div>
                </div>

                <div className='h-auto sm:h-48 lg:h-auto bg-gray-100 rounded-md row-start-3 row-end-4 col-start-3 col-end-5 lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-3 p-3 min-[450px]:p-5 md:p-0 flex items-center min-[555px]:justify-center gap-5 relative overflow-hidden min-[555px]:static min-[555px]:overflow-auto'>
                    <Image src={"/product-images/headphones/headphone-6.svg"} alt='Xiaomi FlipBuds Pro' width={160} height={160} className={`absolute -right-10 w-24 h-24 min-[450px]:w-32 min-[450px]:h-32 min-[555px]:static min-[555px]:right-0 min-[555px]:w-24 min-[555px]:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-40 xl:h-40`} />
                    <div className='z-10'>
                        <h3 className='text-gray900 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold mb-1 min-[450px]:mb-2 md:mb-3 leading-5 sm:leading-6'>Xiaomi <br /> FlipBuds Pro</h3>
                        <span className='text-secondary500 font-semibold uppercase text-sm sm:text-base md:text-lg xl:text-xl'>$299 usd</span>
                        {/* <button className="text-[10px] min-[450px]:text-xs sm:text-sm md:text-sm lg:text-base mt-1 min-[450px]:mt-3 sm:mt-4 md:mt-4 flex items-center gap-1 min-[450px]:gap-1.5 sm:gap-2 xl:gap-3 py-1 px-1.5 min-[450px]:py-1.5 min-[450px]:px-2 sm:py-2 sm:px-3 md:py-3 md:px-3 xl:py-4 xl:px-6 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='text-white w-3 h-3 min-[450px]:w-4 min-[450px]:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                        </button> */}
                        <button className="text-[10px] min-[450px]:text-xs sm:text-sm md:text-sm lg:text-base mt-[11.5px] min-[450px]:mt-4 md:mt-4 flex items-center gap-1 min-[450px]:gap-1.5 sm:gap-2 xl:gap-3 py-1 px-1.5 min-[450px]:py-1.5 min-[450px]:px-2 sm:py-2 sm:px-3 md:py-2 md:px-3 xl:py-4 xl:px-6 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='text-white w-3 h-3 min-[450px]:w-4 min-[450px]:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-5 sm:p-8 border rounded-md border-gray100 mt-6 grid grid-cols-2 grid-rows-2 gap-6 sm:flex sm:items-center sm:justify-between sm:gap-4'>
                <div className='flex items-center flex-col lg:flex-row gap-4'>
                    <Truck className='w-8 h-8 md:w-10 md:h-10 xl:w-11 xl:h-11' strokeWidth={1} />
                    <div className='flex flex-col gap-0 min-[400px]:gap-1 text-center lg:text-start'>
                        <h4 className='uppercase text-gray900 font-medium text-xs md:text-sm xl:text-base'>fasted delivery</h4>
                        <span className='text-gray600 text-xs md:text-sm xl:text-base'>Delivery in 24/H</span>
                    </div>
                </div>
                <div className='flex items-center flex-col lg:flex-row gap-4'>
                    <Trophy className='w-8 h-8 md:w-10 md:h-10 xl:w-11 xl:h-11' strokeWidth={1} />
                    <div className='flex flex-col gap-0 min-[400px]:gap-1 text-center lg:text-start'>
                        <h4 className='uppercase text-gray900 font-medium text-xs md:text-sm xl:text-base'>24 hours return</h4>
                        <span className='text-gray600 text-xs md:text-sm xl:text-base'>100% money-back guarantee</span>
                    </div>
                </div>
                <div className='flex items-center flex-col lg:flex-row gap-4'>
                    <CreditCard className='w-8 h-8 md:w-10 md:h-10 xl:w-11 xl:h-11' strokeWidth={1} />
                    <div className='flex flex-col gap-0 min-[400px]:gap-1 text-center lg:text-start'>
                        <h4 className='uppercase text-gray900 font-medium text-xs md:text-sm xl:text-base'>secure payment</h4>
                        <span className='text-gray600 text-xs md:text-sm xl:text-base'>Your money is safe</span>
                    </div>
                </div>
                <div className='flex items-center flex-col lg:flex-row gap-4'>
                    <Headset className='w-8 h-8 md:w-10 md:h-10 xl:w-11 xl:h-11' strokeWidth={1} />
                    <div className='flex flex-col gap-0 min-[400px]:gap-1 text-center lg:text-start'>
                        <h4 className='uppercase text-gray900 font-medium text-xs md:text-sm xl:text-base'>support 24/7</h4>
                        <span className='text-gray600 text-xs md:text-sm xl:text-base'>Live contact/message</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero