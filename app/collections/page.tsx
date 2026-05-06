'use client';


import React from 'react'
import Link from "next/link";
import FeaturedProducts from '@/components/FeaturedProducts';
import { featuredProducts } from '@/data/featuredProducts';

export default function page() {



  return (
        <div style={{ fontFamily: 'Times New Roman, serif' }}>


             <div>
           
             <h1 className='text-4xl font-bold px-18 py-4'>Collections</h1> 

      
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 px-18 py-4'>
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/collections/${product.slug}`}>
                <div key={product.id}>
                  <FeaturedProducts
                    image={product.image}
                    description={product.description}
                  />
                </div>
                </Link>
              ))}
            </div>
            </div>
          </div>
  )
}
