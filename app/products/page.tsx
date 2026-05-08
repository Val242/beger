'use client';

import HamburgerMenu from '@/components/HamburgerMenu'
import { Search, User, ShoppingCart, MoveRight } from 'lucide-react'
import Image from 'next/image'
import logo from '@/images/logo.png';
import React from 'react'
import FeaturedProducts from '@/components/FeaturedProducts';
import { featuredProducts } from '@/data/featuredProducts';
import TopComponent from '@/components/TopComponent';

export default function page() {



  return (
        <div style={{ fontFamily: 'Times New Roman, serif' }}>
         
             <div>
           
             <h1 className='text-4xl font-bold px-18 py-4'>Collections</h1> 

      
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 px-18 py-4'>
              {featuredProducts.map((product) => (
                <div key={product.id}>
                  <FeaturedProducts
                    image={product.image}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
  )
}
