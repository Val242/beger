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
import { Search, ShoppingCart, User } from 'lucide-react';

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
  <div style={{ fontFamily: 'Times New Roman, serif' }}>
          
    </div>
  )
}
