"use client"
import ProductCard from '@/components/product-card'
import useProductStore from '@/store/products/productStore'
import { Product } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const getRandomProducts = (products: Product[], count: number) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const FlashSale = ({ products }: { products: Product[] }) => {
    const flashSaleProducts = getRandomProducts(products.filter(product => product.discount > 20), 3);

    return (
        <div className='flex flex-col gap-2 lg:gap-4'>
            <h4 className='text-gray900 font-medium text-xs min-[400px]:text-sm sm:text-base md:text-lg uppercase'>flash sale today</h4>
            <ul className='flex flex-col gap-2 sm:gap-3'>
                {flashSaleProducts.map((product, index) => (
                    <li key={index} className='p-2 sm:p-3 xl:py-4 xl:px-3 border rounded-md flex items-center gap-2 sm:gap-3'>
                        <Image src={`${product.images[0]}`} alt={`${product.name}`} width={64} height={64} className='w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 object-contain' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray900 text-xs sm:text-sm line-clamp-1'>{product.name}</p>
                            <p className='text-gray600 text-xs sm:text-sm'>by {product.brand}</p>
                            <span className='text-secondary500 font-medium text-xs min-[400px]:text-sm sm:text-base'>${product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const BestSellers = ({ products }: { products: Product[] }) => {
    const bestSellerProducts = getRandomProducts(products.filter(product => product.best_deal === true), 3);

    return (
        <div className='flex flex-col gap-2 lg:gap-4'>
            <h4 className='text-gray900 font-medium text-xs min-[400px]:text-sm sm:text-base md:text-lg uppercase'>best sellers</h4>
            <ul className='flex flex-col gap-2 sm:gap-3'>
                {bestSellerProducts.map((product, index) => (
                    <li key={index} className='p-2 sm:p-3 xl:py-4 xl:px-3 border rounded-md flex items-center gap-2 sm:gap-3'>
                        <Image src={`${product.images[0]}`} alt={`${product.name}`} width={64} height={64} className='w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 object-contain' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray900 text-xs sm:text-sm line-clamp-1'>{product.name}</p>
                            <p className='text-gray600 text-xs sm:text-sm'>by {product.brand}</p>
                            <span className='text-secondary500 font-medium text-xs min-[400px]:text-sm sm:text-base'>${product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const TopRated = ({ products }: { products: Product[] }) => {
    const topRatedProducts = getRandomProducts(products.filter(product => product.star_rating === 5), 3);

    return (
        <div className='flex flex-col gap-2 lg:gap-4 mt-4 sm:mt-0'>
            <h4 className='text-gray900 font-medium text-xs min-[400px]:text-sm sm:text-base md:text-lg uppercase'>top rated</h4>
            <ul className='flex flex-col gap-2 sm:gap-3'>
                {topRatedProducts.map((product, index) => (
                    <li key={index} className='p-2 sm:p-3 xl:py-4 xl:px-3 border rounded-md flex items-center gap-2 sm:gap-3'>
                        <Image src={`${product.images[0]}`} alt={`${product.name}`} width={64} height={64} className='w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 object-contain' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray900 text-xs sm:text-sm line-clamp-1'>{product.name}</p>
                            <p className='text-gray600 text-xs sm:text-sm'>by {product.brand}</p>
                            <span className='text-secondary500 font-medium text-xs min-[400px]:text-sm sm:text-base'>${product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const NewArrivals = ({ products }: { products: Product[] }) => {
    const newArrivalProducts = getRandomProducts(products.filter(product => product.new_arrival === true), 3);

    return (
        <div className='flex flex-col gap-2 lg:gap-4 mt-4 sm:mt-0'>
            <h4 className='text-gray900 font-medium text-xs min-[400px]:text-sm sm:text-base md:text-lg uppercase'>new arrival</h4>
            <ul className='flex flex-col gap-2 sm:gap-3'>
                {newArrivalProducts.map((product, index) => (
                    <li key={index} className='p-2 sm:p-3 xl:py-4 xl:px-3 border rounded-md flex items-center gap-2 sm:gap-3'>
                        <Image src={`${product.images[0]}`} alt={`${product.name}`} width={64} height={64} className='w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 object-contain' />
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray900 text-xs sm:text-sm line-clamp-1'>{product.name}</p>
                            <p className='text-gray600 text-xs sm:text-sm'>by {product.brand}</p>
                            <span className='text-secondary500 font-medium text-xs min-[400px]:text-sm sm:text-base'>${product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const CompAccessories = () => {
    const tabs = ['All Products', 'Keyboard', 'Mouse', 'Speaker',];
    const [activeTab, setActiveTab] = useState(0);

    const { products, loading, error, fetchProducts } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const filteredProducts = (category: string) => {
        if (category === 'All Products') {
            return getRandomProducts(products.filter(product => product.category === "Computer Accessories"), 8);
        }
        return getRandomProducts(products.filter(product => product.name.includes(category)), 8);
    };

    return (
        <section id='computer-accessories' className='mb-[72px]'>
            <div className='flex flex-col 2xl:flex-row gap-6 mb-[72px]'>
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
                            <h3 className='mb-2 2xl:mt-2 2xl:mb-4 text-center 2xl:text-center text-gray900 text-lg min-[420px]:text-xl xl:text-2xl font-semibold'>Canon TR150 <br className='hidden 2xl:block' /> Wireless Printer</h3>
                            <p className='text-center 2xl:text-center text-gray700 font-medium text-sm xl:text-base'>Easy to view and refill clear integrated ink tanks.</p>
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
            </div>
            <div className='mb-[72px] flex items-center justify-between bg-primary100 px-4 py-6 sm:p-8 lg:py-10 lg:px-10 xl:py-0 xl:px-16 rounded-md'>
                <div className='flex flex-col items-start'>
                    <span className='py-0.5 px-1.5 sm:py-1 sm:px-2 lg:py-1.5 lg:px-3 text-white font-semibold bg-secondary500 rounded-sm text-[11px] sm:text-xs lg:text-sm uppercase'>save up to $200.00</span>
                    <h2 className='my-1.5 min-[400px]:my-2 sm:mt-3 sm:mb-3 xl:mb-5 text-gray900 font-medium text-xl min-[500px]:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>Macbook Pro</h2>
                    <p className='text-gray900 text-xs min-[500px]:text-sm sm:text-base lg:text-xl xl:text-2xl'>Apple M1 Max Chip. <br className='block min-[420px]:hidden' /> 32GB Unified <br className='hidden min-[420px]:block' /> Memory, 1TB SSD Storage</p>
                    <Link href={"/"} className='text-[11px] min-[500px]:text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 flex items-center gap-1 sm:gap-2 py-1.5 px-2.5 min-[500px]:py-2 min-[500px]:px-3 sm:px-4 lg:py-3 lg:px-5 xl:py-4 xl:px-8 bg-primary500 rounded-md uppercase text-white font-semibold transition hover:bg-primary400'>
                        shop now
                        <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
                    </Link>
                </div>
                <div className='relative'>
                    <Image src={"/product-images/laptops/mac-4.png"} alt='Macbook Pro' width={536} height={424} className='w-44 sm:w-56 md:w-72 lg:w-80 xl:w-[450px] 2xl:w-[536px]' />
                    <span className='absolute top-0 sm:top-3 lg:top-5 xl:top-10 flex items-center justify-center text-gray900 text-[11px] sm:text-xs md:text-base lg:text-lg xl:text-xl font-semibold bg-primary200 border-[3px] md:border-4 border-white w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full'>$1999</span>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3'>
                <FlashSale products={products} />
                <BestSellers products={products} />
                <TopRated products={products} />
                <NewArrivals products={products} />
            </div>
        </section>
    )
}

export default CompAccessories