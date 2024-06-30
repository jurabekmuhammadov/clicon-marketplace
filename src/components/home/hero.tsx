import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='grid grid-cols-6 grid-rows-2 gap-6'>

            <div className="rounded-md row-start-1 row-end-3 col-start-1 col-end-5 bg-gray-100 flex items-center gap-20 p-14 relative">
                <div className="">
                    <div className="flex items-center gap-1">
                        <span className="bg-quaternary600 h-0.5 w-6" />
                        <p className='text-quaternary600 uppercase font-medium text-sm'>the best place to play</p>
                    </div>
                    <h1 className='text-dark text-5xl font-medium mt-2'>Xbox Consoles</h1>
                    <p className='text-gray-700 text-lg mt-4'>Save up to 50% on select Xbox games. Get <br /> 3 months of PC Game Pass for $2 USD.</p>
                    <button className={`mt-6 flex items-center gap-3 py-4 px-8 bg-secondary uppercase text-white font-semibold rounded-md`}>
                        shop now
                        <ArrowRight className='text-white w-6 h-6' />
                    </button>
                </div>
                <Image src={"/product-images/playstations/xbox-2.svg"} alt='Xbox Console' width={368} height={408} />
                <div className='absolute top-14 right-14 w-24 h-24 flex items-center justify-center bg-quaternary500 rounded-full'>
                    <span className='text-white text-xl font-semibold'>$299</span>
                </div>
            </div>

            <div className='row-start-1 row-end-2 col-start-5 col-end-7 bg-dark p-10 relative'>
                <div className=''>
                    <p className='uppercase text-sm text-tertiary font-medium'>summer sales</p>
                    <h3 className='text-white text-2xl font-semibold'>New Google <br /> Pixel 6 Pro</h3>
                    <button className={`mt-6 flex items-center gap-3 py-4 px-6 bg-secondary uppercase text-white font-semibold rounded-md`}>
                        shop now
                        <ArrowRight className='text-white w-6 h-6' />
                    </button>
                </div>
                {/* <Image src={"/product-images/mobile-phones/google-3.svg"} alt='Google Pixel 6 Pro' width={100} height={100} /> */}
                <div className='absolute px-4 py-2'>
                    <span>29% off</span>
                </div>
            </div>

            <div className='row-start-2 row-end-3 col-start-5 col-end-7'>
                <div className=''>
                    <Image src={"/product-images/headphones/headphone-6.svg"} alt='Xiaomi FlipBuds Pro' width={100} height={100} />
                </div>
                <div className=''>
                    <h3>Xiaomi FlipBuds Pro</h3>
                    <span>$299 usd</span>
                    <button className={``}>
                        <span className=''>shop now</span>
                        <ArrowRight className='' />
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Hero