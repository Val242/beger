'use client';

import HamburgerMenu from '@/components/HamburgerMenu'
import { Search, User, ShoppingCart, MoveRight } from 'lucide-react'
import Image from 'next/image'
import logo from '@/images/logo.png';
import React from 'react'
import FeaturedProducts from '@/components/FeaturedProducts';
import { featuredProducts } from '@/data/featuredProducts';

export default function page() {



  return (
        <div style={{ fontFamily: 'Times New Roman, serif' }}>
          <header className='bg-black'>
                <h2 className='text-center text-white py-4 text-2xl font-bold'>
                  Welcome to our Chrome Shop
                </h2>
          </header>
    <nav className='flex justify-between items-center px-8 relative'>
      <div className='flex items-center gap-4'>
        <HamburgerMenu />
        <Image src={logo} alt='Logo' width={250} height={250} />
      </div>
              <div className='flex gap-6 text-2xl cursor-pointer'>
                <Search/>
                <User/>
                <ShoppingCart/>
              </div>
          </nav>
          <div className='flex justify-center bg-black text-white items-center gap-4'>
          <p className='text-center  py-2 text-[16px] font-bold '>
                For USA Sales please email or text to order 
          </p>
          <MoveRight/>
          </div>

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
