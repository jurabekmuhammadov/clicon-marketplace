'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {

    return (
        <>
            <Swiper
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={
                    {
                        prevEl: '.custom-swiper-button-prev',
                        nextEl: '.custom-swiper-button-next'
                    }}
                modules={[Autoplay, Navigation]}
                className='relative rounded-md'
            >
                <SwiperSlide>
                    <div className="h-[200px] min-[400px]:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px] bg-gray-100 flex flex-row items-end gap-20 px-3 py-6 min-[450px]:p-5 md:p-10 xl:p-14 relative bg-[url('/product-images/playstations/playstation-6.jpg')] bg-no-repeat bg-cover xl:bg-left">
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="bg-secondary500 h-0.5 w-6" />
                                <p className='text-secondary500 uppercase font-medium text-xs md:text-sm xl:text-base'>play has no limits</p>
                            </div>
                            <h1 className='text-white text-2xl md:text-4xl xl:text-5xl font-medium mt-1 min-[400px]:mt-2'>PlayStation 5</h1>
                            <p className='text-white text-[11px] leading-4 min-[400px]:text-sm md:text-base xl:text-lg mt-2 min-[400px]:mt-4'>The PS5 console unleashes new gaming <br /> possibilities that you never anticipated.</p>
                            <button className="text-xs min-[400px]:text-sm md:text-base mt-4 min-[400px]:mt-6 flex items-center gap-1 min-[400px]:gap-2 xl:gap-3 px-3 min-[400px]:px-4 py-1.5 min-[400px]:py-2 md:px-6 md:py-3 xl:py-4 xl:px-8 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                                shop now
                                <ArrowRight className='text-white w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                            </button>
                        </div>
                        <div className='absolute top-5 right-5 md:top-10 xl:top-14 md:right-10 xl:right-14 w-14 h-14 min-[400px]:w-16 min-[400px]:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 flex items-center justify-center bg-secondary500 rounded-full'>
                            <span className='text-white text-sm min-[400px]:text-base md:text-lg xl:text-xl font-semibold'>$299</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[200px] min-[400px]:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px] flex flex-row items-end gap-20 px-3 py-6 min-[450px]:p-5 md:p-10 xl:p-14 relative bg-[url('/product-images/tvs/tv-6.jpg')] bg-no-repeat bg-right bg-cover sm:bg-left">
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="bg-secondary500 h-0.5 w-6" />
                                <p className='text-secondary500 uppercase font-medium text-xs md:text-sm xl:text-base'>Upscale Your Entertainment</p>
                            </div>
                            <h1 className='text-gray900 text-2xl md:text-4xl xl:text-5xl font-medium mt-1 min-[400px]:mt-2'>Sharp TV</h1>
                            <p className='text-gray700 text-[11px] leading-4 min-[400px]:text-sm md:text-base xl:text-lg mt-2 min-[400px]:mt-4'>The latest 4K and FHD TVs from Sharp offer <br /> up-to-the-minute smart technology in a range of <br /> sizes to fit your room and entertainment needs.</p>
                            <button className="text-xs min-[400px]:text-sm md:text-base mt-4 min-[400px]:mt-6 flex items-center gap-1 min-[400px]:gap-2 xl:gap-3 px-3 min-[400px]:px-4 py-1.5 min-[400px]:py-2 md:px-6 md:py-3 xl:py-4 xl:px-8 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                                shop now
                                <ArrowRight className='text-white w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                            </button>
                        </div>
                        <div className='absolute top-5 right-5 md:top-10 xl:top-14 md:right-10 xl:right-14 w-14 h-14 min-[400px]:w-16 min-[400px]:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 flex items-center justify-center bg-secondary500 rounded-full'>
                            <span className='text-white text-sm min-[400px]:text-base md:text-lg xl:text-xl font-semibold'>$3,999</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[200px] min-[400px]:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px] flex flex-row items-end gap-20 px-3 py-6 min-[450px]:p-5 md:p-10 xl:p-14 relative bg-[url('/product-images/watches/watch.jpg')] bg-no-repeat bg-right bg-cover sm:bg-left">
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="bg-secondary500 h-0.5 w-6" />
                                <p className='text-secondary500 uppercase font-medium text-xs md:text-sm xl:text-base'>To wear it is to love it.</p>
                            </div>
                            <h1 className='text-white text-2xl md:text-4xl xl:text-5xl font-medium mt-1 min-[400px]:mt-2'>Apple Watch Ultra 2</h1>
                            <p className='text-white text-[11px] leading-4 min-[400px]:text-sm md:text-base xl:text-lg mt-2 min-[400px]:mt-4'>The most rugged and capable Apple Watch pushes the limits again. <br /> Featuring the all-new S9 SiP.</p>
                            <button className="text-xs min-[400px]:text-sm md:text-base mt-4 min-[400px]:mt-6 flex items-center gap-1 min-[400px]:gap-2 xl:gap-3 px-3 min-[400px]:px-4 py-1.5 min-[400px]:py-2 md:px-6 md:py-3 xl:py-4 xl:px-8 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                                shop now
                                <ArrowRight className='text-white w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                            </button>
                        </div>
                        <div className='absolute top-5 right-5 md:top-10 xl:top-14 md:right-10 xl:right-14 w-14 h-14 min-[400px]:w-16 min-[400px]:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 flex items-center justify-center bg-secondary500 rounded-full'>
                            <span className='text-white text-sm min-[400px]:text-base md:text-lg xl:text-xl font-semibold'>$799</span>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="w-full absolute z-10 bottom-2 md:bottom-5 flex items-center justify-center gap-5">
                    <button className="custom-swiper-button-prev cursor-pointer flex items-center justify-center text-secondary500 transition min-[400px]:hover:-translate-x-2">
                        { }
                        <ChevronLeft className='h-5 w-5 min-[400px]:h-8 min-[400px]:w-8 xl:h-10 xl:w-10' />
                    </button>
                    <button className="custom-swiper-button-next cursor-pointer flex items-center justify-center text-secondary500 transition min-[400px]:hover:translate-x-2">
                        { }
                        <ChevronRight className='h-5 w-5 min-[400px]:h-8 min-[400px]:w-8 xl:h-10 xl:w-10' />
                    </button>
                </div>
            </Swiper>
        </>
    );
}
