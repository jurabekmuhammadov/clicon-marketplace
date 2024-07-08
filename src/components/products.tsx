"use client"

import React, { useEffect } from 'react';
import useProductStore from "@/store/products/productStore";

const Products = () => {
    const { products, loading, error, fetchProducts } = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    return (
        <div>
            {loading && <p className='text-9xl'>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="">
                        {
                            <p>{product.name}</p>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;