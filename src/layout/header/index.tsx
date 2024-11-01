"use client"
import React, { useEffect } from 'react';
import {useHeaderStore} from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { calculateDiscountedPrice } from '@/functions/discounted-price';
import { ArrowRight, ChevronLeft, Heart, Menu, Repeat, Search, ShoppingCart, User, X } from 'lucide-react';
import { BiSearch, BiX } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import moduleStyle from "./index.module.css"

const Header = () => {
    const {
        isBlackFridayOpen,
        isMenuOpen,
        setIsBlackFridayOpen,
        setIsMenuOpen,
        searchProducts,
        searchValue,
        setSearchValue,
        fetchProducts,
        results,
        clearResults
    } = useHeaderStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        searchProducts();
    };

    return (
        <header className=''>
            {/* ----- Black Friday Start -----  */}
            <div className='fixed z-40 w-screen top-0'>
                <div id="black-friday" className={`bg-gray900 py-2 md:py-3 relative ${isBlackFridayOpen ? "block" : "hidden"}`}>
                    <div className="px-[10px] container mx-auto flex justify-between items-center relative">
                        <Link href="/" className='flex items-center gap-3 justify-center w-14 h-7 min-[400px]:h-8 sm:w-16 sm:h-9 md:w-18 md:h-10'>
                            <Image src="/icons/black.png" alt='BLACK FRIDAY' width={80} height={0} className='object-cover' />
                        </Link>

                        <div className='flex items-center gap-1'>
                            <span className='text-white text-xs sm:text-sm lg:text-base font-semibold'>Up to</span>
                            <span className='text-warning500 text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-semibold'>59%</span>
                            <span className='text-white text-base sm:text-xl lg:text-2xl font-semibold'>OFF</span>
                        </div>
                        <button className={`bg-warning500 flex items-center gap-2 justify-center rounded-sm md:gap-3 w-24 min-[400px]:w-28 sm:w-32 md:w-36 lg:w-40 h-7 min-[400px]:h-8 sm:h-9 md:h-10 transition hover:bg-warning300`}>
                            <span className='text-gray900 text-[10px] min-[400px]:text-xs sm:text-sm lg:text-base font-semibold uppercase'>shop now</span>
                            <ArrowRight className='w-4 h-4 md:w-5 md:h-5' />
                        </button>
                        <button onClick={() => setIsBlackFridayOpen(!isBlackFridayOpen)} className='hidden xl:block absolute bg-gray700 bg-opacity-50 rounded-sm hover:bg-opacity-70 md:-right-10 2xl:-right-40 transition'>
                            <BiX className='text-white w-6 h-6' /> { }
                        </button>
                    </div>
                    <button onClick={() => setIsBlackFridayOpen(!isBlackFridayOpen)} className='flex items-center justify-center xl:hidden absolute bg-black bg-opacity-70 transition hover:bg-opacity-60 -bottom-5 min-[400px]:-bottom-6 sm:-bottom-7 right-0'>
                        <BiX className='text-white w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 sm:w-7 sm:h-7' /> { }
                    </button>
                </div>
            </div>
            {/* ----- Black Friday End -----  */}

            {/* ----- Main Header Start ----- */}

            <div className={`bg-secondary700 z-30 fixed w-screen ${isBlackFridayOpen ? "top-[48px] min-[400px]:top-[52px] sm:top-[56px] md:top-[64px] lg:top-[72px]" : "top-0"}`}>

                {/* ----- Header Top Start ----- */}
                <div className='border-b border-gray400'>
                    <div className="px-[10px] container mx-auto flex flex-col gap-4 md:flex-row md:justify-between items-center py-2 min-[400px]:py-3 md:py-4">
                        <span className='text-white text-sm min-[400px]:text-base'>Welcome to Clicon Online Marketplace!</span>
                        <div className="w-full md:w-auto flex justify-between md:justify-normal items-center">
                            <div className="md:border-r md:border-gray400 flex items-center gap-3 pr-0 md:pr-6">
                                <span className='text-white text-sm min-[400px]:text-base'>Follow us:</span>
                                <div className='flex items-center gap-3 lg:gap-4 text-white'>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsTwitter className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-primary500' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsFacebook className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-primary500' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsYoutube className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-primary500' />{ }
                                    </Link>
                                    <Link href="/" className='flex items-center justify-center'>
                                        <BsInstagram className='transition w-4 h-4 lg:w-5 lg:h-5 hover:text-primary500' />{ }
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
                {/* ----- Header Top End ----- */}

                {/* ----- Header Bottom Start ----- */}
                <div className='px-[10px] container mx-auto flex items-center justify-between py-3 min-[400px]:py-4 gap-4'>
                    <Link href="/" className='flex items-center gap-2'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 min-[400px]:w-8 min-[400px]:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="white" />
                        </svg>
                        <span className='uppercase text-white font-bold text-xl min-[400px]:text-2xl md:text-3xl lg:text-4xl'>clicon</span>
                    </Link>

                    <form onSubmit={handleSearchSubmit} className={`hidden min-[500px]:flex items-center relative w-1/2`}>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search for anything...' className='py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 w-full outline-none rounded-md border-2 border-white focus:border-2 focus:border-primary500 text-sm md:text-base' />
                        <button type='submit' className='flex items-center justify-center bg-primary500 p-0.5 lg:p-1 rounded-md text-white absolute right-2 md:right-3 lg:right-4 transition'>
                            { }
                            <BiSearch className='w-5 h-5 lg:w-6 lg:h-6 ' />
                        </button>
                    </form>

                    <div className='z-50 flex justify-between items-center gap-4 lg:gap-6 max-[500px]:fixed max-[500px]:w-screen max-[500px]:left-0 max-[500px]:right-0 max-[500px]:bottom-0 max-[500px]:px-[10px] max-[500px]:pb-2 max-[500px]:pt-3 max-[400px]:pb-1 max-[500px]:bg-white max-[500px]:border-t min-[500px]:static min-[500px]:z-10'>
                        <button className={`${moduleStyle.buttonHover} min-[500px]:hidden flex flex-col items-center max-[500px]:gap-1 `}>
                            <Search className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 text-gray500 min-[500px]:text-white`} />
                            <span className={`${moduleStyle.buttonText} text-gray500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Search</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} relative flex flex-col items-center max-[500px]:gap-1 `}>
                            <Heart className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 -right-2 border min-[400px]:border-2 border-gray500 min-[500px]:border-secondary700 rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary500'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Wishlist</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} relative flex flex-col items-center max-[500px]:gap-1 `}>
                            <ShoppingCart className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 -right-2 border min-[400px]:border-2 border-gray500 min-[500px]:border-secondary700 rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary500'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Cart</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} min-[500px]:hidden flex flex-col items-center max-[500px]:gap-1`}>
                            <Repeat className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray500 min-[500px]:text-white`} />
                            {/* <span className='absolute -top-2 -right-2 border min-[400px]:border-2 border-gray500 min-[500px]:border-secondary700 rounded-full bg-white w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-xs min-[400px]:text-sm font-bold text-primary500'>2</span> */}
                            <span className={`${moduleStyle.buttonText} text-gray500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Compare</span>
                        </button>
                        <button className={`${moduleStyle.buttonHover} flex flex-col items-center max-[500px]:gap-1 `}>
                            <User className={`${moduleStyle.buttonIcon} w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 min-[500px]:w-5 min-[500px]:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray500 min-[500px]:text-white`} />
                            <span className={`${moduleStyle.buttonText} text-gray500 text-xs min-[400px]:text-sm hidden max-[500px]:block`}>Account</span>
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
                {/* ----- Header Bottom End ----- */}

            </div>  

            {/* ----- Main Header End ----- */}

            {/* Search Results Start */}
                {results.length > 0 && (
                    <div className="p-[10px] min-[430px]:p-3 md:p-5 fixed inset-0 z-50 bg-gray-200 h-full w-full overflow-y-scroll">
                        <div className="container mx-auto">
                            <div className='flex justify-between items-center'>
                            <h1 className='text-xl sm:text-2xl font-semibold text-primary500'>Search results ({results.length})</h1>
                            <button onClick={clearResults} className='flex items-center text-danger500 text-lg sm:text-xl'>
                                <ChevronLeft className='h-6 w-6 sm:h-7 sm:w-7'/>
                                <span>Back <span className='hidden min-[420px]:inline-block'>to Home</span></span>
                            </button>
                            </div>
                            <div className='mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-3'>
                            {results.map(product => (
                                <Link href={`/products/${product.id}`} className='flex items-center gap-4 py-2 px-3 sm:px-5 sm:py-4 bg-white rounded-md' key={product.id}>
                                    <Image src={product.images[0]} alt={product.name} width={100} height={100} className='w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain' />
                                    <div className=''>
                                        <div className='flex items-center gap-2'>
                                            <h3 className='line-clamp-1 sm:line-clamp-none text-gray900 font-medium text-sm md:text-base lg:text-lg'>{product.name}</h3>
                                            {product.discount ? (
                                                <span className='hidden min-[420px]:block py-0.5 px-1.5 md:px-2 md:py-1 bg-warning500 rounded-md text-xs font-medium text-gray900 uppercase'>{product.discount}% off</span>
                                            ) : null}
                                        </div>
                                        <p className='line-clamp-1 text-gray600 mt-1 md:mt-0 text-xs md:text-sm lg:text-base'>{product.description}</p>
                                        <div className='flex items-center gap-2 mt-2'>
                                            {product.discount ? (
                                                <span className='text-gray500 line-through font-medium text-sm md:text-base'>{product.price}</span>
                                            ) : null}
                                            <span className='text-secondary500 font-medium text-sm md:text-base'>${calculateDiscountedPrice(product.price, product.discount)}</span>
                                            {product.discount ? (
                                                <span className='block min-[420px]:hidden    py-0.5 px-1.5 md:px-2 md:py-1 bg-warning500 rounded-md text-xs font-medium text-gray900 uppercase'>{product.discount}% off</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            </div>
                        </div>
                    </div>
                )}
            {/* Search Results End */}
        </header >
    );
};

export default Header;