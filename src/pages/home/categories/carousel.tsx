"use client"

import { CATEGORIES } from "@/data/categories"
import Image from "next/image"
import Link from "next/link"
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from "lucide-react";


const CategoriesCarousel = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1536: {
                        slidesPerView: 6,
                        spaceBetween: 16,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={
                    {
                        prevEl: '.category-swiper-button-prev',
                        nextEl: '.category-swiper-button-next'
                    }
                }
                modules={[Autoplay, Navigation]}
                className="relative mt-4 md:mt-6 lg:mt-10"
            >
                {
                    CATEGORIES.map((category) => (
                        <SwiperSlide key={category.id} className="">
                            <Link href={"/"} className='flex items-center flex-col gap-4 border rounded-md p-3 md:p-4 bg-white'>
                                <Image src={`${category.img}`} width={148} height={148} alt={`${category.name}`} className='w-16 h-16 md:w-20 md:h-20 2xl:w-32 2xl:h-32 object-contain' />
                                <p className='text-gray900 font-medium text-center text-[10px] md:text-xs xl:text-sm 2xl:text-base'>{category.name}</p>
                            </Link>
                        </SwiperSlide>
                    ))
                }

                <button className="category-swiper-button-prev cursor-pointer flex items-center justify-center text-white bg-primary500 rounded-full w-7 h-7 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 absolute top-14 sm:top-12 md:top-16 2xl:top-[90px] left-1 2xl:left-2 z-10">
                    { }
                    <ArrowLeft className='w-4 h-4 sm:h-5 sm:w-5 2xl:w-7 2xl:h-7' />
                </button>
                <button className="category-swiper-button-next cursor-pointer flex items-center justify-center text-white bg-primary500 rounded-full w-7 h-7 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 absolute top-14 sm:top-12 md:top-16 2xl:top-[90px] right-1 2xl:right-2 z-10">
                    { }
                    <ArrowRight className='w-4 h-4 sm:h-5 sm:w-5 2xl:w-7 2xl:h-7' />
                </button>
            </Swiper>
        </>
    );
}

export default CategoriesCarousel