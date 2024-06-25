import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className=''>
            <div id="top" className='bg-black py-4 px-3'>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link href="/" className='flex items-center gap-3 justify-center'>
                            <Image src="/icons/black-friday.gif" alt='BLACK FRIDAY' width={60} height={60} className='w-11 h-8 sm:w-14 sm:h-10  md:w-16 md:h-11'/>
                        </Link>
                        <div className='flex items-center gap-1'>
                            <span className='text-white text-xs 
                            sm:text-sm md:text-base font-semibold'>Up to</span>
                            <span className='text-yellow-400 text-2xl md:text-4xl xl:text-5xl font-semibold'>59%</span>
                            <span className='text-white sm:text-xl md:text-2xl font-semibold'>OFF</span>
                        </div>
                        <button className='bg-yellow-400 flex items-center gap-1.5 md:gap-3 py-1.5 px-2 sm:px-4 sm:py-3 md:px-5 lg:h-11'>
                            <span className='text-black text-xs md:text-sm lg:text-base font-semibold uppercase'>shop now</span>
                            <FaArrowRightLong className='w-3 h-3 md:w-4 md:h-4' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;