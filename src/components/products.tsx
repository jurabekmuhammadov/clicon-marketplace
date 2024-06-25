"use client"

import React, {useEffect} from 'react';
import useProductStore from "@/store/products/productStore";
import Image from "next/image";

const Products = () => {
    const {products, loading, error, fetchProducts} = useProductStore();
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
                            <Image alt={product.name} src={product.images[0]} width={400} height={400}/>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;