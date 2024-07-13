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
        <section id='featured-products' className='flex flex-col 2xl:flex-row justify-start gap-6 mb-[72px]'>

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
                        <h1 className='text-gray900 text-xl lg:text-2xl xl:text-3xl font-semibold'>Featured Products</h1>
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
        </section>
    )
}

export default FeaturedProducts