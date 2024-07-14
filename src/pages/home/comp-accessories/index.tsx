"use client"
import ProductCard from '@/components/product-card'
import useProductStore from '@/store/products/productStore'
import { Product } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CompAccessories = () => {
    const tabs = ['All Products', 'Keyboard', 'Mouse', 'Speaker',];


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
            return getRandomProducts(products.filter(product => product.category === "Computer Accessories"), 8);
        }
        return getRandomProducts(products.filter(product => product.name.includes(category)), 8);
    };

    console.log(products.filter(product => product.category === "Computer Accessories"))

    return (
        <section id='computer-accessories' className='flex flex-col 2xl:flex-row gap-6 mb-[72px]'>
            <div className='w-full 2xl:w-4/5'>
                <div className='flex justify-between flex-col gap-3 lg:gap-0 lg:flex-row'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-gray900 text-base min-[365px]:text-lg min-[400px]:text-xl lg:text-2xl xl:text-3xl font-semibold'>Computer Accessories</h1>
                        <Link href={"/"} className='flex md:hidden items-center gap-1 xl:gap-2 font-medium text-primary500 capitalize text-xs sm:text-sm xl:text-base hover:underline'>
                            Browse All Product
                            <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5' />
                        </Link>
                    </div>
                    <div className='flex items-center justify-between lg:justify-start gap-2'>
                        <div className={`flex overflow-x-auto`}>
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
            <div className='w-full 2xl:w-1/5 flex flex-col lg:flex-row 2xl:flex-col gap-3 min-[400px]:gap-4 2xl:gap-4 justify-between'>

                <div className='w-full lg:w-1/2 2xl:w-auto px-4 py-6 sm:px-8 sm:py-6 xl:px-8 xl:py-8 2xl:py-10 bg-warning200 rounded-md flex flex-col-reverse min-[500px]:flex-row-reverse 2xl:flex-col justify-between items-center gap-4 xl:gap-6 2xl:gap-0'>
                    <div className='overflow-hidden h-32 min-[500px]:h-auto min-[500px]:overflow-auto 2xl:h-32 2xl:overflow-hidden flex items-center justify-center'>
                        <Image src={"/product-images/printers/printer-3.svg"} alt='Xiaomi True Wireless Earbuds' width={202} height={172} className='md:w-[250px] md:h-[200px] lg:w-[202px] lg:h-[172px]' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='mb-2 2xl:mt-2 2xl:mb-4 text-center min-[500px]:text-left 2xl:text-center text-gray900 text-lg min-[420px]:text-xl xl:text-2xl font-semibold'>Canon TR150 <br className='hidden 2xl:block' /> Wireless Printer</h3>
                        <p className='text-center min-[500px]:text-left 2xl:text-center text-gray700 font-medium text-sm xl:text-base'>Easy to view and refill clear integrated ink tanks.</p>
                        <div className='flex items-center gap-2 mt-3 2xl:mt-4'>
                            <span className='text-gray700 text-sm xl:text-base'>Only for:</span>
                            <span className='py-1 px-3 text-gray900 font-semibold bg-white text-sm xl:text-base'>$499 USD</span>
                        </div>
                        <Link href={"/"} className="mt-5 2xl:mt-8 w-2/4 min-[400px]:w-3/4 xl:w-2/3 2xl:w-full py-2 px-3 sm:py-2 sm:px-4 xl:py-[14px] xl:px-6 text-xs min-[400px]:text-sm xl:text-base flex justify-center items-center gap-1.5 min-[500px]:gap-2 bg-primary500 uppercase text-white font-semibold rounded-md transition hover:bg-primary400">
                            shop now
                            <ArrowRight className='w-4 h-4 sm:w-6 sm:h-6' />
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 2xl:w-auto px-8 py-8 2xl:py-10 bg-sky-800 rounded-md flex flex-col items-center justify-end 2xl:justify-normal'>
                    <span className='py-1 px-3 uppercase text-white font-semibold bg-white bg-opacity-20 rounded-sm text-xs min-[400px]:text-sm'>summer sales</span>
                    <h3 className='text-center text-white uppercase font-semibold text-xl min-[400px]:text-2xl xl:text-3xl 2xl:text-xl mt-3'><span className='text-warning500'>get</span> <br className='hidden min-[400px]:block' /> 37% Discount</h3>
                    <p className='mt-3 text-white font-medium text-center text-sm min-[400px]:text-base'>only for <span className='text-warning500'>Smartphone</span> product.</p>
                    <Link href={"/"} className="mt-5 xl:mt-8 w-full min-[400px]:w-2/3 2xl:w-full py-2 px-3 sm:py-2 sm:px-4 xl:py-[14px] xl:px-6 flex justify-center items-center gap-1.5 min-[500px]:gap-2 text-sm xl:text-base bg-secondary500 uppercase text-white font-semibold rounded-md transition hover:bg-secondary400">
                        shop now
                        <ArrowRight className='w-4 h-4 sm:w-6 sm:h-6' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CompAccessories