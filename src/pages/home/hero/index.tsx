"use client"
import { ArrowRight, ChevronsUpDown, CreditCard, Headset, Info, PhoneCall, Repeat, ScrollText, Trophy, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Carousel from './carousel'
import Link from 'next/link'
import { CATEGORIES } from '@/data/categories'
import useHeaderStore from '@/store/header/headerStore'

const Hero = () => {
    const { isMenuOpen, isBlackFridayOpen } = useHeaderStore();

    return (
        <section id='hero' className='mb-10 min-[500px]:mb-14 sm:mb-16 md:mb-[72px]'>
            <div className={`min-[500px]:py-4 min-[500px]:border-b min-[500px]:border-gray200 bg-white mb-2 min-[500px]:mb-4`}>
                <div className="container mx-auto px-[10px] flex items-center justify-between gap-4">
                    <div className='flex items-center gap-6 w-full min-[640px]:w-auto'>
                        <div className='relative hidden lg:block'>
                            <select name="category" id="category" className='bg-gray100 py-2 px-4 outline-none rounded-sm appearance-none'>
                                <option value="ALL">All Categories</option>
                                {CATEGORIES.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronsUpDown className='absolute top-3 right-1 w-5 h-5' />
                        </div>
                        <ul className={`z-50 max-[500px]:shadow-lg ${isMenuOpen ? "max-[500px]:flex" : "max-[500px]:hidden"} fixed left-0 right-0 ${isBlackFridayOpen ? "top-[173px] min-[400px]:top-[205px]" : "top-[125px] min-[400px]:top-[153px]"} max-[500px]:px-[10px] max-[500px]:py-4 w-screen bg-white max-[500px]:border-b max-[500px]:border-gray100 max-[500px]:flex-col items-start min-[500px]:items-center justify-evenly flex flex-row gap-4 md:gap-6 min-[500px]:w-full min-[640px]:w-auto min-[500px]:static`}>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray600 font-medium transition hover:text-primary500'>
                                    <Info className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li className='hidden min-[500px]:block'>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray600 font-medium transition hover:text-primary500'>
                                    <Repeat className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Compare</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray600 font-medium transition hover:text-primary500'>
                                    <Headset className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Customer Support</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray600 font-medium transition hover:text-primary500'>
                                    <ScrollText className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Blogs</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="tel:+998990990754" className='hidden min-[640px]:flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-xl text-gray900 hover:underline'>
                        <PhoneCall className='w-5 h-5 md:w-6 md:h-6' />
                        <span>+998-99-099-07-54</span>
                    </Link>
                </div>
            </div>
            <div className='container mx-auto px-[10px] grid grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-3 sm:gap-4 md:gap-6'>

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
            <div className='container mx-auto px-[10px]'>
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
            </div>
        </section>
    )
}

export default Hero