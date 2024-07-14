"use client"
import ProductCard from '@/components/product-card'
import useProductStore from '@/store/products/productStore'
import { Product } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import moduleStyle from "./index.module.css"

const FeaturedProducts = () => {
    const tabs = ['All Products', 'Smartphones', 'Computer & Laptop', 'TV & Home Appliances',];


    const [activeTab, setActiveTab] = useState(0);

    const { products, loading, error, fetchProducts } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const getRandomProducts = (products: Product[], count: number) => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const filteredProducts = (category: string) => {
        if (category === 'All Products') {
            return getRandomProducts(products, 8);
        }
        return getRandomProducts(products.filter(product => product.category === category), 8);
    };

    return (
        <section id='featured-products' className='mb-[72px]'>
            <div className='flex flex-col 2xl:flex-row justify-start gap-6 mb-[72px]'>
                <div className="flex flex-row 2xl:flex-col items-center justify-between 2xl:bg-warning300 rounded-md max-[500px]:px-3 max-[500px]:py-4 max-lg:p-6 max-xl:p-8 max-2xl:p-16 2xl:pt-8 2xl:w-1/5 bg-[url('/discount-for-comp-acc-2.png')] lg:bg-[url('/discount-for-comp-acc.png')] bg-no-repeat bg-cover bg-right-bottom min-[500px]:bg-left-bottom lg:bg-left 2xl:bg-none">
                    <div className='flex flex-col items-start 2xl:items-center'>
                        <span className='text-danger600 font-semibold uppercase text-[11px] min-[500px]:text-xs lg:text-sm'>computer & accessories</span>
                        <h3 className='text-gray900 text-xl min-[500px]:text-2xl lg:text-3xl xl:text-5xl 2xl:text-3xl font-semibold my-1 min-[500px]:mt-1 min-[500px]:mb-2 lg:mt-2 lg:mb-3 xl:my-3 2xl:mt-2 2xl:mb-3'>32% <span className='text-xl min-[500px]:text-2xl lg:text-3xl'>Discount</span></h3>
                        <p className='text-gray700 font-medium text-xs min-[500px]:text-base xl:text-xl 2xl:text-base'>For all electronic products</p>
                        <div className='flex items-center gap-2 mt-4'>
                            <span className='text-gray900 font-medium text-xs min-[500px]:text-sm lg:text-base 2xl:text-sm'>Offers ends in:</span>
                            <div className='px-2 py-1 min-[500px]:px-3 min-[500px]:py-1.5 bg-white flex items-center justify-center'>
                                <span className='text-gray900 uppercase font-semibold text-[10px] min-[500px]:text-xs xl:text-base 2xl:text-xs'>ends of christmas</span>
                            </div>
                        </div>
                        <Link href={"/"} className="text-xs lg:text-sm xl:text-base flex items-center gap-1.5 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 xl:px-8 xl:py-4 mt-6 lg:mt-8 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='text-white w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' />
                        </Link>
                    </div>
                    <Image src={"/featured-products.jpg"} alt='featured-products' width={312} height={428} className='hidden 2xl:block rounded-b-md' />
                </div>

                <div className='w-full 2xl:w-4/5'>
                    <div className='flex justify-between flex-col gap-3 lg:gap-0 lg:flex-row'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray900 min-[350px]:text-xl lg:text-2xl xl:text-3xl font-semibold'>Featured Products</h1>
                            <Link href={"/"} className='flex md:hidden items-center gap-1 xl:gap-2 font-medium text-primary500 capitalize text-xs sm:text-sm xl:text-base hover:underline'>
                                Browse All Product
                                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
                            </Link>
                        </div>
                        <div className='flex items-center justify-between lg:justify-start gap-2'>
                            <div className={`flex overflow-x-auto ${moduleStyle.scrollbar_custom}`}>
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`py-1 px-3 lg:py-2 lg:px-4 border-b-2 text-xs sm:text-sm xl:text-base whitespace-nowrap ${activeTab === index
                                            ? 'text-gray900 font-medium border-primary500'
                                            : 'text-gray600 border-transparent font-medium hover:text-gray900 hover:border-primary500'
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <Link href={"/"} className='hidden md:flex items-center gap-1 xl:gap-2 font-medium text-primary500 capitalize text-sm xl:text-base hover:underline'>
                                Browse All Product
                                <ArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {error && error}

                        {loading && (
                            <p>Loading...</p>
                        )}

                        {filteredProducts(tabs[activeTab]).slice(0, 8).map((product) => (
                            <ProductCard key={`${product.id}-${Math.random()}`} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-3 sm:gap-4 2xl:gap-6'>
                <div className='w-full md:w-2/3 lg:w-1/2 bg-gray-100 px-4 py-6 sm:p-8 xl:p-11 rounded-md relative'>
                    <div className='flex flex-col items-start'>
                        <span className='uppercase bg-secondary500 rounded-sm text-white text-[10px] min-[380px]:text-[11px] sm:text-xs xl:text-sm font-semibold py-1 px-2 sm:py-[6px] sm:px-3'>introducing</span>
                        <h2 className='text-gray900 text-lg max-[420px]:leading-6 min-[420px]:text-xl sm:text-2xl xl:text-3xl font-semibold my-3'>New Apple <br /> Homepod Mini</h2>
                        <p className='text-[10px] min-[380px]:text-xs sm:text-sm xl:text-base text-gray700 font-medium'>Jam-packed with innovation, <br className='block 2xl:hidden' /> HomePod mini <br className='hidden 2xl:block' /> delivers unexpectedly.</p>
                        <Link href={"/"} className="mt-3 sm:mt-5 flex items-center gap-1 sm:gap-2 w-auto py-2 px-3 sm:py-2 sm:px-4 xl:py-[14px] xl:px-6 text-xs sm:text-sm xl:text-base bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='w-4 h-4 sm:w-6 sm:h-6' />
                        </Link>
                    </div>
                    <Image className='absolute right-4 min-[420px]:right-6 sm:right-8 xl:right-11 top-12 min-[420px]:top-12 md:top-16 xl:top-20 2xl:top-12 w-28 h-28 min-[420px]:w-36 min-[420px]:h-36 sm:w-48 sm:h-48 md:w-40 md:h-40 xl:w-48 xl:h-48 2xl:w-60 2xl:h-60' src={"/product-images/speakers/speaker-6.svg"} alt='New Apple Homepod Mini' width={240} height={240} />
                </div>
                <div className='w-full md:w-2/3 lg:w-1/2 bg-gray900 rounded-md px-4 py-6 sm:p-8 xl:p-11 relative overflow-hidden'>
                    <div className='flex flex-col items-start'>
                        <span className='uppercase bg-warning400 rounded-sm text-gray900 text-[10px] min-[380px]:text-[11px] sm:text-xs xl:text-sm font-semibold py-1 px-2 sm:py-[6px] sm:px-3'>introducing new</span>
                        <h2 className='text-white text-lg max-[420px]:leading-6 min-[420px]:text-xl sm:text-2xl xl:text-3xl font-semibold my-3'>Xiaomi Mi 11 Ultra <br /> 12GB+256GB</h2>
                        <p className='text-[10px] min-[380px]:text-xs sm:text-sm xl:text-base text-gray300 font-medium'>*Data provided by internal <br className='block xl:hidden' /> laboratories. <br className='hidden xl:block' /> Industry measurment.</p>
                        <Link href={"/"} className='mt-3 sm:mt-5 flex items-center gap-1 sm:gap-2 w-auto py-2 px-3 sm:py-2 sm:px-4 xl:py-[14px] xl:px-6 text-xs sm:text-sm xl:text-base bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400'>
                            shop now
                            <ArrowRight className='w-4 h-4 sm:w-6 sm:h-6' />
                        </Link>
                    </div>
                    <Image className='absolute right-0 top-4 min-[380px]:top-8 min-[420px]:top-4 sm:top-3 md:top-12 2xl:top-3 w-36 h-44 min-[380px]:w-40 min-[380px]:h-56 min-[420px]:w-48 min-[420px]:h-60 sm:w-64 sm:h-72 md:w-52 md:h-64 xl:w-64 xl:h-72 2xl:w-[312px] 2xl:h-[349px]' src={"/product-images/mobile-phones/xiaomi-3.svg"} alt='New Apple Homepod Mini' width={312} height={349} />
                    <span className='absolute right-4 top-4 sm:top-6 sm:right-6 w-12 h-12 min-[380px]:w-14 min-[380px]:h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 flex items-center justify-center bg-secondary500 text-white font-semibold text-xs min-[380px]:text-sm sm:text-lg xl:text-xl rounded-full'>$590</span>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts