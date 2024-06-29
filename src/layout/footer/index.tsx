import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import moduleStyles from "./index.module.css"

const Footer = () => {
    return (
        <footer className='bg-dark pt-10 min-[400px]:pt-16 lg:pt-20 flex flex-col gap-10 min-[400px]:gap-16 lg:gap-20 mb-[57px] min-[400px]:mb-[69px] min-[500px]:mb-[0px]'>
            <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:flex xl:gap-6 xl:justify-between">

                <div className="flex flex-col items-center lg:items-start gap-6">
                    <Link href="/" className='flex items-center gap-2'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 min-[400px]:w-10 min-[400px]:h-10 lg:w-12 lg:h-12'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="#FA8232" />
                        </svg>
                        <span className='uppercase text-white font-bold text-xl min-[400px]:text-2xl min-[500px]:text-3xl lg:text-4xl'>clicon</span>
                    </Link>

                    <div className='flex flex-col gap-1.5 min-[400px]:gap-2 lg:gap-3 text-center lg:text-left'>
                        <div className='flex flex-row gap-2 items-center justify-center lg:justify-start lg:items-start lg:flex-col lg:gap-1'>
                            <span className='text-gray-500 text-xs min-[400px]:text-sm sm:text-base'>Customer Supports:</span>
                            <Link className='text-white text-xs min-[400px]:text-sm sm:text-lg hover:underline' href="tel:+998990990754">+998-99-099-07-54</Link>
                        </div>
                        <p className='text-gray-500 font-medium text-xs min-[400px]:text-sm sm:text-base'>4517 Washington Ave. <br className='hidden lg:block'/> Manchester, Kentucky 39495</p>
                        <Link className='text-white font-medium text-xs min-[400px]:text-sm sm:text-base hover:underline' href="https://clicon-marketplace.vercel.app">clicon-marketplace.vercel.app</Link>
                    </div>
                </div>

                <div className='flex justify-evenly gap-5 sm:gap-32 lg:gap-20 sm:justify-center lg:justify-start'>
                    <div className='flex flex-col gap-3 min-[400px]:gap-4'>
                        <h4 className='uppercase text-white text-sm min-[400px]:text-base md:text-lg'>TOP CATEGORIES</h4>
                        <ul className='flex flex-col gap-2 text-xs min-[400px]:text-sm sm:text-base'>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">
                                    <span>Computer & Laptop</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">
                                    <span>Smartphone</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">
                                    <span>Headphone</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">
                                    <span>Camera & Photo</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">
                                    <span>Watches & Accessories</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.browse__all} flex items-center gap-1 text-tertiary font-medium`} href="/">Browse All Products <ChevronRight className={`${moduleStyles.arrow__right} w-4 h-4 min-[400px]:w-5 min-[400px]:h-5`} /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 min-[400px]:gap-4'>
                        <h4 className='uppercase text-white text-sm min-[400px]:text-base md:text-lg'>QUICK LINKS</h4>
                        <ul className='flex flex-col gap-2 text-xs min-[400px]:text-sm sm:text-base'>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">About Us</Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">Blogs</Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">Customer Support</Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">Shopping Cart</Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">Wishlist</Link>
                            </li>
                            <li>
                                <Link className={`${moduleStyles.menu__link} text-gray-500 font-medium`} href="/">Compare</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-3 min-[400px]:gap-4'>
                    <h4 className='uppercase text-white text-sm min-[400px]:text-base md:text-lg text-center lg:text-start'>DOWNLOAD APP</h4>
                    <div className='flex flex-col items-center min-[400px]:items-start gap-3'>
                        <Link href="/" className='w-2/3 min-[400px]:w-full text-white bg-white bg-opacity-15 px-5 py-3 sm:py-5 lg:py-3 xl:py-4 flex items-center justify-center min-[400px]:justify-start gap-3 rounded-md transition hover:bg-opacity-25'>
                            <FaGooglePlay className='w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 sm:w-8 sm:h-8' />
                            <div className='flex flex-col'>
                                <span className='text-xs min-[400px]:text-sm'>Get it now</span>
                                <p className='font-semibold text-sm min-[400px]:text-base'>Google Play</p>
                            </div>
                        </Link>
                        <Link href="/" className='w-2/3 min-[400px]:w-full text-white bg-white bg-opacity-15 px-5 py-3 sm:py-5 lg:py-3 xl:py-4 flex items-center justify-center min-[400px]:justify-start gap-3 rounded-md transition hover:bg-opacity-25'>
                            <FaAppStoreIos className='w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 sm:w-8 sm:h-8' />
                            <div className='flex flex-col'>
                                <span className='text-xs min-[400px]:text-sm'>Get it now</span>
                                <p className='font-semibold text-sm min-[400px]:text-base'>App Store</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col gap-3 min-[400px]:gap-4'>
                    <h4 className='uppercase text-white text-sm min-[400px]:text-base md:text-lg text-center lg:text-start'>POPULAR TAGS</h4>
                    <div className='grid grid-cols-3 gap-2'>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Game</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Iphone</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">TV</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Dell Laptops</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Macbook</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Samsung</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Speaker</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Power Bank</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Smart Watch</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">HP</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Xiaomi</Link>
                        <Link className='text-xs min-[400px]:text-sm sm:text-base border border-zinc-600 rounded-sm py-0.5 px-1.5 text-white text-center transition hover:border-white hover:bg-white hover:bg-opacity-10' href="/">Microsoft    </Link>
                    </div>
                </div>

            </div>
            <div className='px-3 py-3 sm:py-5 border-t border-gray-500 text-center'>
                <p className='text-gray-500 text-xs min[400px]:text-sm sm:text-base'>Clicon - Online Markeplace © 2024. Created by <Link href="https://t.me/notjustdev">Jurabek M.</Link></p>
            </div>
        </footer>
    );
};

export default Footer;