"use client"

import React, { useEffect, useState } from 'react'
import Countdown from './countdown'
import Link from 'next/link'
import { ArrowRight, Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import useProductStore from '@/store/products/productStore'
import { Product } from '@/types'
import Image from 'next/image'
import moduleStyle from "./index.module.css"
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const dealEndDate = new Date(2024, 11, 31);

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
    }
    if (halfStars) {
      stars.push(<FaStarHalfAlt key="half" color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
    }
    return stars;
  };

  return (
    <div className='flex items-center gap-0.5'>
      {renderStars()}
    </div>
  );
};

const BestDeals = () => {
  const [bestDeals, setBestDeals] = useState<Product[]>([])

  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    getRandomProducts(products, 8);
    const filteredDeals: any = products.filter(product => product.best_deal === true);
    setBestDeals(filteredDeals);
  }, [products]);

  const getRandomProducts = (products: Product[], numElements: number) => {
    products.sort(() => Math.random() - 0.5);
    return products.slice(0, numElements);
  };

  function calculateDiscountedPrice(originalPrice: number, discountPercentage: number) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice.toFixed(2);
  }

  return (
    <section className='flex flex-col gap-5 md:gap-8 mb-[72px]'>

      <div className='flex items-end min-[600px]:items-center justify-between'>
        <div className='flex min-[600px]:items-center flex-col min-[600px]:flex-row gap-1 min-[500px]:gap-2 min-[600px]:gap-4 md:gap-6'>
          <h3 className='text-gray900 text-xl min-[500px]:text-2xl lg:text-3xl font-semibold'>Best Deals</h3>
          <Countdown endDate={dealEndDate} />
        </div>
        <Link href={"/"} className='flex items-center gap-1.5 lg:gap-2 text-secondary500 hover:underline'>
          <span className='text-secondary500 font-medium text-xs min-[500px]:text-sm lg:text-base'>Browse All Product</span>
          <ArrowRight className='w-4 h-4 min-[500px]:w-5 min-[500px]:h-5 lg:w-6 lg:h-6' />
        </Link>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-2 min-[400px]:gap-3 lg:gap-4'>
        {loading && <p className='text-9xl'>Loading...</p>}
        {error && <p>{error}</p>}

        <div className='col-start-1 col-end-2 row-start-1 row-end-3 border border-gray100 rounded-md hidden xl:block'>

          {
            bestDeals.slice(0, 1).map((product: Product) => (
              <div key={product.id} className='p-3 2xl:p-4 flex flex-col justify-between h-full relative'>

                <div className='flex items-center justify-center h-[300px] 2xl:h-[370px]'>
                  <Image src={product.images[0]} alt={product.name} width={257} height={257} className='w-[200px] h-[200px] 2xl:w-[257px] 2xl:h-[257px] object-contain' />
                </div>

                <div className=''>
                  <div className='flex items-center gap-1'>
                    <StarRating rating={product.star_rating} />
                    <span className='text-gray500 text-sm'>({bestDeals[0].feedbacks})</span>
                  </div>

                  <p className='mt-2 text-gray900'>
                    {product.name}
                  </p>

                  <div className='flex items-center gap-2 mt-3'>
                    {product.discount ? (
                      <span className='text-gray500 line-through font-medium text-xl'>{product.price}</span>
                    ) : null}
                    <span className='text-secondary500 font-semibold text-xl'>${calculateDiscountedPrice(product.price, product.discount)}</span>
                  </div>

                  <ul className='mt-3'>
                    <li className='flex gap-1'>
                      <span className='text-gray500 text-sm'>Brand:</span>
                      <p className='text-gray900 font-medium text-sm'>{product.brand}</p>
                    </li>
                    <li className='flex gap-1'>
                      <span className='text-gray500 text-sm'>Category:</span>
                      <p className='text-gray900 font-medium text-sm'>{product.category}</p>
                    </li>
                  </ul>

                  <p className='text-gray500 mt-3'>
                    {product.description}
                  </p>

                  <div className='flex items-center gap-1.5 mt-10'>
                    <button className='w-1/6 py-1.5 px-2 2xl:p-2 bg-primary100 text-gray900 flex items-center justify-center rounded-sm transition hover:bg-primary200'>
                      { }
                      <Heart className='w-5 2xl:w-[22px]' />
                    </button>
                    <button className='w-4/6 py-1.5 px-2 2xl:p-2 bg-primary500 flex items-center justify-center text-white gap-1.5 uppercase font-medium text-xs 2xl:text-sm rounded-sm transition hover:bg-opacity-75'>
                      <ShoppingCart className='w-5 2xl:w-[22px]' />
                      <span>Add to cart</span>
                    </button>
                    <button className='w-1/6 py-1.5 px-2 2xl:p-2 bg-primary100 text-gray900 flex items-center justify-center rounded-sm transition hover:bg-primary200'>
                      { }
                      <Eye className='w-5 2xl:w-[22px]' />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col items-start gap-2 absolute top-3 left-3 2xl:top-4 2xl:left-4'>
                  {
                    product.discount ? (
                      <div className='bg-warning400 px-2 2xl:px-3 py-1 font-medium uppercase rounded-sm text-gray900 text-xs 2xl:text-sm'>
                        {product.discount}% off
                      </div>
                    ) : null
                  }
                  {
                    product.new_arrival === true ? (
                      <div className='bg-danger500 px-2 2xl:px-3 py-1 font-medium uppercase rounded-sm text-white text-xs 2xl:text-sm'>
                        hot
                      </div>
                    ) : null
                  }
                </div>
              </div>
            ))
          }

        </div>

        {bestDeals.slice(1, 9).map((product: Product) => (
          <div key={product.id} className="border border-gray100 rounded-md p-2 min-[400px]:p-3 2xl:p-4 flex flex-col justify-between gap-3 relative">
            <div className={`${moduleStyle.product_img} flex items-center justify-center h-auto min-[500px]:h-[200px]`}>
              <Image src={product.images[0]} alt={product.name} width={220} height={200} className='w-24 h-24 min-[400px]:w-28 min-[400px]:h-28 min-[500px]:h-40 min-[500px]:w-40 2xl:h-[200px] 2xl:w-[200px] object-contain' />
            </div>

            <div className='flex flex-col gap-1.5 mt-1 min-[400px]:mt-0'>
              <p className='text-gray900 line-clamp-1 text-xs min-[500px]:text-sm sm:text-base'>{product.name}</p>
              <div className='flex items-center gap-1'>
                <StarRating rating={product.star_rating} />
                <span className='text-gray500 text-xs sm:text-sm'>({product.feedbacks})</span>
              </div>
              <div className='flex items-center gap-2'>
                {product.discount ? (
                  <span className='text-gray500 line-through font-medium text-[13px] min-[500px]:text-sm sm:text-base'>{product.price}</span>
                ) : null}
                <span className='text-secondary500 font-semibold text-[13px] min-[500px]:text-sm sm:text-base'>${calculateDiscountedPrice(product.price, product.discount)}</span>
              </div>
            </div>

            <div className='flex items-center gap-1 min-[370px]:gap-1.5 min-[400px]:mt-2'>
              <button className='w-1/6 p-1 min-[370px]:p-1.5 min-[500px]:py-1.5 min-[500px]:px-2 2xl:p-2 bg-primary100 text-gray900 flex items-center justify-center rounded-sm transition hover:bg-primary200'>
                { }
                <Heart className='w-3.5 h-4 min-[370px]:w-4 min-[370px]:h-4 min-[500px]:w-5 min-[500px]:h-5 2xl:w-[22px]' />
              </button>
              <button className='w-4/6 bg-primary500 flex items-center flex-row-reverse min-[430px]:flex-row p-1 min-[370px]:p-1.5 min-[500px]:py-1.5 min-[500px]:px-2 2xl:p-2 justify-center text-white gap-1.5 uppercase font-medium text-[10px] min-[500px]:text-xs 2xl:text-sm rounded-sm transition hover:bg-opacity-75'>
                <ShoppingCart className='w-3.5 h-4 min-[370px]:w-4 min-[370px]:h-4 min-[500px]:w-5 min-[500px]:h-5 2xl:w-[22px]' />
                <span>Add to <span className="hidden min-[430px]:inline-block">cart</span></span>
              </button>
              <button className='w-1/6 p-1 min-[370px]:p-1.5 min-[500px]:py-1.5 min-[500px]:px-2 2xl:p-2 bg-primary100 text-gray900 flex items-center justify-center rounded-sm transition hover:bg-primary200'>
                { }
                <Eye className='w-3.5 h-4 min-[370px]:w-4 min-[370px]:h-4 min-[500px]:w-5 min-[500px]:h-5 2xl:w-[22px]' />
              </button>
            </div>

            {
              product.new_arrival === true ? (
                <div className='bg-danger500 absolute top-2 left-2 min-[400px]:top-3 min-[400px]:left-3 2xl:top-4 2xl:left-4 px-1 py-0.5 min-[400px]:px-2 2xl:px-3 min-[400px]:py-1 font-medium uppercase rounded-sm text-white text-[10px] min-[500px]:text-xs 2xl:text-sm'>
                  hot
                </div>
              ) : null
            }
            {
              product.discount ? (
                <div className='bg-warning400 absolute top-2 right-2 min-[400px]:top-3 min-[400px]:right-3 2xl:top-4 2xl:right-4 px-1 py-0.5 min-[400px]:px-2 2xl:px-3 min-[400px]:py-1 font-medium uppercase rounded-sm text-gray900 text-[10px] min-[500px]:text-xs 2xl:text-sm'>
                  {product.discount}% off
                </div>
              ) : null
            }

          </div>
        ))}

      </div>
    </section>
  )
}

export default BestDeals