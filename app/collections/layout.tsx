import Image from 'next/image';
import logo from '@/images/logo.png';
import Footer from '@/components/Footer'
import Subscribe from '@/components/Subscribe'
import amex from '@/images/amex.png';
import dinersClub from '@/images/dinersClub.png';
import discover from '@/images/discover.webp';
import mastercard from '@/images/mastercard.png';
import paypal from '@/images/paypal.jpg';
import shop from '@/images/shop.png';
import visa from '@/images/visa.png';
import applePay from '@/images/applePay.png';
import googlePay from '@/images/googlePay.png';
import React, { ReactNode } from 'react'
import HamburgerMenu from '@/components/HamburgerMenu';
import { MoveRight, Search, ShoppingCart, User } from 'lucide-react';

export default function layout({children}: {children: ReactNode}) {
    const  paymentLogos = [
    { id: 1, image: amex, alt: 'Amex' },
    { id: 2, image: applePay, alt: 'Apple Pay' },
    { id: 3, image: dinersClub, alt: 'Dinners club' },
    { id: 4, image: discover, alt: 'Discover' },
    { id: 5, image: googlePay, alt: 'Google Pay' },
    { id: 6, image: mastercard, alt: 'Mastercard' },
    { id: 7, image: paypal, alt: 'Paypal' },
    { id: 8, image: shop, alt: 'Shop' },
    { id: 9, image: visa, alt: 'Visa' }
  ];
  return (
    <div>
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
          {children}
               <Subscribe/>
               <Footer paymentLogos={paymentLogos}/>
          </div>
  )
}
