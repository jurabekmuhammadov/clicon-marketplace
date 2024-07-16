import { ArrowRight, Calendar, CircleUserRound, MessageCircleMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNews = () => {
    return (
        <section id='latest-news' className='py-10 min-[500px]:py-14 sm:py-16 md:py-[72px] container mx-auto px-[10px] '>
            <h1 className='text-center text-gray900 text-xl min-[500px]:text-2xl lg:text-3xl font-semibold'>Latest News</h1>
            <div className='mt-4 min-[500px]:mt-6 lg:mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-6'>

                <div className='p-4 lg:p-5 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-1.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-4 lg:mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>Kristin</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>19 Dec, 2013</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>453</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-sm min-[400px]:text-base lg:text-lg line-clamp-2'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h5>
                    <p className='mt-2 lg:mt-3 text-gray500 font-medium text-xs min-[400px]:text-sm lg:text-base'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                    <Link href={"/"} className='text-xs min-[400px]:text-sm lg:text-base mt-4 min-[400px]:mt-5 lg:mt-6 py-1.5 px-3 min-[400px]:py-2 lg:py-3 min-[400px]:px-4 lg:px-6 flex items-center gap-1 min-[400px]:gap-1.5 lg:gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight className='w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6' />
                    </Link>
                </div>

                <div className='p-4 lg:p-5 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-1.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-4 lg:mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>Kristin</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>19 Dec, 2013</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>453</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-sm min-[400px]:text-base lg:text-lg line-clamp-2'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h5>
                    <p className='mt-2 lg:mt-3 text-gray500 font-medium text-xs min-[400px]:text-sm lg:text-base'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                    <Link href={"/"} className='text-xs min-[400px]:text-sm lg:text-base mt-4 min-[400px]:mt-5 lg:mt-6 py-1.5 px-3 min-[400px]:py-2 lg:py-3 min-[400px]:px-4 lg:px-6 flex items-center gap-1 min-[400px]:gap-1.5 lg:gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight className='w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6' />
                    </Link>
                </div>
                <div className='p-4 lg:p-5 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-2.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-4 lg:mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>Robert</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>28 Nov, 2015</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>738</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-sm min-[400px]:text-base lg:text-lg line-clamp-2'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </h5>
                    <p className='mt-2 lg:mt-3 text-gray500 font-medium text-xs min-[400px]:text-sm lg:text-base'>Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</p>
                    <Link href={"/"} className='text-xs min-[400px]:text-sm lg:text-base mt-4 min-[400px]:mt-5 lg:mt-6 py-1.5 px-3 min-[400px]:py-2 lg:py-3 min-[400px]:px-4 lg:px-6 flex items-center gap-1 min-[400px]:gap-1.5 lg:gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight className='w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6' />
                    </Link>
                </div>

                <div className='p-4 lg:p-5 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-3.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-4 lg:mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>Arlene</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>9 May, 2014</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 2xl:w-6 2xl:h-6' />
                            <span className='text-gray700 font-medium text-xs min-[400px]:text-sm 2xl:text-base'>826</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-sm min-[400px]:text-base lg:text-lg line-clamp-2'>Curabitur massa orci, consectetur et blandit ac, auctor et tellus.</h5>
                    <p className='mt-2 lg:mt-3 text-gray500 font-medium text-xs min-[400px]:text-sm lg:text-base'>Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</p>
                    <Link href={"/"} className='text-xs min-[400px]:text-sm lg:text-base mt-4 min-[400px]:mt-5 lg:mt-6 py-1.5 px-3 min-[400px]:py-2 lg:py-3 min-[400px]:px-4 lg:px-6 flex items-center gap-1 min-[400px]:gap-1.5 lg:gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight className='w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 lg:w-6 lg:h-6' />
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default LatestNews