import { ArrowRight, Calendar, CircleUserRound, MessageCircleMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNews = () => {
    return (
        <section id='latest-news' className='mb-[72px]'>
            <h1 className='text-center text-gray900 text-3xl font-semibold'>Latest News</h1>
            <div className='mt-10 grid grid-cols-3 gap-4 xl:gap-6'>
                <div className='p-5 xl:p-8 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-1.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500' />
                            <span className='text-gray700 font-medium'>Kristin</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500' />
                            <span className='text-gray700 font-medium'>19 Dec, 2013</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500' />
                            <span className='text-gray700 font-medium'>453</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-lg'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h5>
                    <p className='mt-3 text-gray500 font-medium'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                    <Link href={"/"} className='mt-6 py-3 px-6 flex items-center gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight />
                    </Link>
                </div>
                <div className='p-5 xl:p-8 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-2.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500' />
                            <span className='text-gray700 font-medium'>Robert</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500' />
                            <span className='text-gray700 font-medium'>28 Nov, 2015</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500' />
                            <span className='text-gray700 font-medium'>738</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-lg'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </h5>
                    <p className='mt-3 text-gray500 font-medium'>Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.</p>
                    <Link href={"/"} className='mt-6 py-3 px-6 flex items-center gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight />
                    </Link>
                </div>
                <div className='p-5 xl:p-8 rounded-md border flex flex-col items-start'>
                    <Image src={"/news-3.png"} alt='news-1' width={360} height={248} className='w-full' />
                    <div className='flex items-center gap-4 mt-6 mb-2'>
                        <div className='flex items-center gap-1'>
                            <CircleUserRound className='text-primary500' />
                            <span className='text-gray700 font-medium'>Arlene</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='text-primary500' />
                            <span className='text-gray700 font-medium'>9 May, 2014</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MessageCircleMore className='text-primary500' />
                            <span className='text-gray700 font-medium'>826</span>
                        </div>
                    </div>
                    <h5 className='text-gray900 font-semibold text-lg'>Curabitur massa orci, consectetur et blandit ac, auctor et tellus.</h5>
                    <p className='mt-3 text-gray500 font-medium'>Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</p>
                    <Link href={"/"} className='mt-6 py-3 px-6 flex items-center gap-2 bg-inherit border-2 border-primary100 rounded-md uppercase font-semibold text-primary500 transition hover:bg-primary500 hover:border-primary500 hover:text-white'>
                        read more
                        <ArrowRight />
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default LatestNews