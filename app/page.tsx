import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import { MoveRight, Search, ShoppingCart, User } from 'lucide-react';
import FeaturedProducts from '@/components/FeaturedProducts';
import HamburgerMenu from '@/components/HamburgerMenu';
import logo from '@/images/logo.png';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';
import amex from '@/images/amex.png';
import dinersClub from '@/images/dinersClub.png';
import discover from '@/images/discover.webp';
import mastercard from '@/images/mastercard.png';
import paypal from '@/images/paypal.jpg';
import shop from '@/images/shop.png';
import visa from '@/images/visa.png';
import applePay from '@/images/applePay.png';
import googlePay from '@/images/googlePay.png';
import Products from '@/components/Products';
import bg1 from '@/images/bg1.jpg'
import bg2 from '@/images/bg2.jpg'
import TopComponent from '@/components/TopComponent';
//ssh

function page() {
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
    <div style={{ fontFamily: 'Times New Roman, serif' }}>
  <TopComponent/>
<div className="relative w-full h-125">
  {/* Background images */}
  <div className="absolute inset-0 flex">
    <Image src={bg1} alt="first bg" className="w-1/2 h-full object-cover" />
    <Image src={bg2} alt="second bg" className="w-1/2 h-full object-cover" />
  </div>

  {/* Overlay content */}
  <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 text-center text-white">
    <h2 className="text-6xl font-bold mb-4">
      Browse our latest products
    </h2>

<Link href="/collections/all">
<button
  className="
    text-white
    border border-white
    px-8 py-3
    text-[1.5rem]
    tracking-[0.1rem]
    leading-[1.2]
    bg-transparent
    transition-all duration-300 ease-in-out
    hover:ring-2 hover:ring-white
  "
>
  Show all
</button>
</Link>
  </div>
</div>

      <Products/>

      <div className='flex justify-center items-center py-8'>
         <button className='bg-black text-white px-8 py-4'>View all</button>
      </div>

     <Subscribe/>
     <Footer paymentLogos={paymentLogos}/>

    </div>
  )
}

export default page