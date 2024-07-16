import React from 'react'
import CategoriesCarousel from './carousel'

const ShopWithCategories = () => {
    return (
        <section id='shop-with-categories' className='mb-10 min-[500px]:mb-14 sm:mb-16 md:mb-[72px]'>
            <h1 className='text-xl min-[500px]:text-2xl lg:text-3xl text-gray900 font-semibold text-center'>Shop with Categories</h1>
            <CategoriesCarousel />
        </section>
    )
}

export default ShopWithCategories