import React from 'react'
import { Product } from '@/types'
import Image from 'next/image'
import { StarRating } from '@/functions/star-rating'
import { Eye, Heart, ShoppingCart } from 'lucide-react'
import { calculateDiscountedPrice } from '@/functions/discounted-price'


const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div key={product.id} className="border border-gray100 rounded-md p-2 min-[400px]:p-3 2xl:p-4 flex flex-col justify-between gap-3 relative">
            <div className={`flex items-center justify-center h-auto min-[500px]:h-[170px]`}>
                <Image src={product.images[0]} alt={product.name} width={220} height={200} className='w-[90px] h-[90px] min-[400px]:w-28 min-[400px]:h-28 min-[500px]:h-40 min-[500px]:w-40 2xl:h-[170px] 2xl:w-[170px] object-contain' />
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
    )
}

export default ProductCard