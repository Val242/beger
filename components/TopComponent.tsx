import { Search, User, ShoppingCart, MoveRight } from 'lucide-react'
import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import logo from '@/images/logo.png';
import Image from 'next/image';

export default function TopComponent() {
  return (
    <div>      <header className='bg-black'>
            <h2 className='text-center text-white py-4 text-2xl font-bold'>
              Welcome to our Chrome Shop Valentine
            </h2>
      </header>
<nav className="relative px-8 flex justify-between items-center">
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
      </div></div>
  )
}
