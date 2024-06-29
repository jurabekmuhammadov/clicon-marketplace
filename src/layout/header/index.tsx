"use client"
import Button from '@/components/buttons';
import { CATEGORIES } from '@/data/categories';
import { ChevronsUpDown, Headset, Heart, Info, Menu, PhoneCall, Repeat, ScrollText, Search, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import moduleStyle from "./index.module.css"

const Header = () => {
    const [isBlackFridayOpen, setisBlackFridayOpen] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className=''>
            <div id="black-friday" className={`bg-black px-3 py-2 md:py-3 relative ${isBlackFridayOpen ? "block" : "hidden"}`}>
                <div className="container mx-auto flex justify-between items-center relative">
                    <Link href="/" className='flex items-center gap-3 justify-center w-14 h-7 min-[400px]:h-8 sm:w-16 sm:h-9 md:w-18 md:h-10'>
                        <Image src="/icons/black.jpg" alt='BLACK FRIDAY' width={80} height={0} className='object-cover' />
                    </Link>

                    <div className='flex items-center gap-1'>
                        <span className='text-white text-xs sm:text-sm lg:text-base font-semibold'>Up to</span>
                        <span className='text-tertiary text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-semibold'>59%</span>
                        <span className='text-white text-base sm:text-xl lg:text-2xl font-semibold'>OFF</span>
                    </div>
                    <Button />
                    <button onClick={() => setisBlackFridayOpen(!isBlackFridayOpen)} className='hidden lg:block absolute bg-gray-400 bg-opacity-50 rounded-sm hover:bg-opacity-60 md:-right-10 2xl:-right-40'>
                        <BiX className='text-white w-6 h-6' /> { }
                    </button>
                </div>
                <button onClick={() => setisBlackFridayOpen(!isBlackFridayOpen)} className='flex items-center justify-center lg:hidden absolute bg-black bg-opacity-70 transition hover:bg-opacity-60 -bottom-5 min-[400px]:-bottom-6 sm:-bottom-7 right-0'>
                    <BiX className='text-white w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 sm:w-7 sm:h-7' /> { }
                </button>
            </div>

            <div className='bg-primary'>
                <div className='border-b border-gray-300 px-3'>
                    <div className="container mx-auto flex flex-col gap-4 md:flex-row md:justify-between items-center py-2 min-[400px]:py-3 md:py-4">
                        <span className='text-white text-sm min-[400px]:text-base'>Welcome to Clicon Online Marketplace!</span>
                        <div className="w-full md:w-auto flex justify-between md:justify-normal items-center">
                            <div className="md:border-r md:border-gray-400 flex items-center gap-3 pr-0 md:pr-6">
                                <span className='text-white text-sm min-[400px]:text-base'>Follow us:</span>
                                <div className='flex items-center gap-3 lg:gap-4 text-white'>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsTwitter className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-secondary' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsFacebook className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-secondary' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsYoutube className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-secondary' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsInstagram className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-secondary' />{ }
                                    </Link>
                                </div>
                            </div>
                            <div className="pl-0 md:pl-6 flex items-center gap-4 lg:gap-6">
                                <select name="language" id="language" className='bg-inherit text-white outline-none text-sm md:text-base'>
                                    <option className='bg-white text-black' value="ENG">ENG</option>
                                    <option className='bg-white text-black' value="UZ">UZ</option>
                                    <option className='bg-white text-black' value="RUS">RUS</option>
                                </select>
                                <select name="currency" id="currency" className='bg-inherit text-white outline-none text-sm md:text-base'>
                                    <option className='bg-white text-black' value="USD">USD</option>
                                    <option className='bg-white text-black' value="UZS">UZS</option>
                                    <option className='bg-white text-black' value="RUBL">RUBL</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto flex items-center justify-between px-3 py-3 min-[400px]:py-4 gap-4'>
                    <Link href="/" className='flex items-center gap-2'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 min-[400px]:w-8 min-[400px]:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="white" />
                        </svg>
                        <span className='uppercase text-white font-bold text-xl min-[400px]:text-2xl md:text-3xl lg:text-4xl'>clicon</span>
                    </Link>

                    <div className='hidden min-[500px]:flex items-center relative w-1/2'>
                        <input type="text" placeholder='Search for anything...' className='py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 w-full outline-none rounded-sm border-2 border-white focus:border-2 focus:border-secondary text-sm md:text-base' />
                        <BiSearch className='text-gray-500 absolute right-4 lg:right-5 w-5 h-5 lg:w-6 lg:h-6 transition' />
                    </div>

                    <div className='flex justify-between items-center gap-4 lg:gap-6 max-[500px]:fixed max-[500px]:w-screen max-[500px]:left-0 max-[500px]:right-0 max-[500px]:bottom-0 max-[500px]:px-3 max-[500px]:pb-2 max-[500px]:pt-3 max-[400px]:pb-1 max-[500px]:bg-white max-[500px]:border-t min-[500px]:static'>
                        <button className={`${moduleStyle.buttonHover} min-[500px]:hidden flex flex-col items-center max-[500px]:gap-1 transition`}>
                            <Search className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 text-gray-500 min-[500px]:text-white`} />
                            <span className={`${moduleStyle.buttonText} text-gray-500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Search</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} relative flex flex-col items-center max-[500px]:gap-1 transition`}>
                            <ShoppingCart className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 -right-2 border min-[400px]:border-2 border-gray-500 min-[500px]:border-primary rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray-500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Cart</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} relative flex flex-col items-center max-[500px]:gap-1 transition`}>
                            <Heart className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 right-2 min-[500px]:-right-2 border min-[400px]:border-2 border-gray-500 min-[500px]:border-primary rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray-500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Wishlist</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} min-[500px]:hidden flex flex-col items-center max-[500px]:gap-1 transition`}>
                            <Repeat className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 right-2 min-[500px]:-right-2 border min-[400px]:border-2 border-gray-500 min-[500px]:border-primary rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray-500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Compare</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} flex flex-col items-center max-[500px]:gap-1 transition`}>
                            <User className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-500 min-[500px]:text-white`} />
                            <span className={`${moduleStyle.buttonText} text-gray-500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Account</span>
                        </button>
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='flex items-center justify-center min-[500px]:hidden'>
                        {isMenuOpen ? (
                            <X className='w-7 h-7 text-white' />
                        ) : (
                            <Menu className='w-7 h-7 text-white' />
                        )}
                    </button>
                </div>
            </div>

            <div className='min-[500px]:py-4 min-[500px]:px-3 min-[500px]:border-b min-[500px]:border-gray-300'>
                <div className="container mx-auto flex items-center justify-between gap-4">
                    <div className='flex items-center gap-6 w-full min-[640px]:w-auto'>
                        <div className='relative hidden lg:block'>
                            <select name="category" id="category" className='bg-gray-200 py-2 px-4 outline-none rounded-sm appearance-none'>
                                <option value="ALL">All Categories</option>
                                {CATEGORIES.map((category) => (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronsUpDown className='absolute top-3 right-1 w-5 h-5' />
                        </div>
                        <ul className={`${isMenuOpen ? "max-[500px]:flex" : "max-[500px]:hidden"} fixed left-0 right-0 top-[173px] min-[400px]:top-[205px] max-[500px]:p-3 w-screen bg-white max-[500px]:border-b max-[500px]:border-gray-300 max-[500px]:shadow-md max-[500px]:shadow-gray-300 max-[500px]:flex-col items-start min-[500px]:items-center justify-evenly flex flex-row gap-4 md:gap-6 min-[500px]:w-full min-[640px]:w-auto min-[500px]:static`}>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-600 font-medium transition hover:text-secondary'>
                                    <Info className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li className='hidden min-[500px]:block'>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-600 font-medium transition hover:text-secondary'>
                                    <Repeat className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Compare</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-600 font-medium transition hover:text-secondary'>
                                    <Headset className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Customer Support</span>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="/" className='flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-600 font-medium transition hover:text-secondary'>
                                    <ScrollText className='w-5 h-5 md:w-6 md:h-6' />
                                    <span>Blogs</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="tel:+998990990754" className='hidden min-[640px]:flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-xl text-gray-600 hover:underline'>
                        <PhoneCall className='w-5 h-5 md:w-6 md:h-6' />
                        <span>+998-99-099-07-54</span>
                    </Link>
                </div>
            </div>
        </header >
    );
};

export default Header;