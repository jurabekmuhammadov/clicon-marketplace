import React from 'react'
import CategoriesCarousel from './carousel'

const ShopWithCategories = () => {
    return (
        <section className='mb-[72px]'>
            <h1 className='text-xl min-[500px]:text-2xl lg:text-3xl text-gray900 font-semibold text-center'>Shop with Categories</h1>
            <CategoriesCarousel />
        </section>
    )
}

export default ShopWithCategories