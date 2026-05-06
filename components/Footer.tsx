import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface PaymentLogo {
  id: number;
  image: StaticImageData;
  alt: string;
}

interface FooterProps {
  paymentLogos: PaymentLogo[];
}

export default function Footer({ paymentLogos }: FooterProps) {
  return (
    <div className='p-8'>
      <div className='border-t border-t-gray-300 p-8 flex justify-center items-center gap-8'>
        {paymentLogos.map((payment) => (
          <div key={payment.id} className='shrink-0 '>
            <Image 
              src={payment.image}
              alt={payment.alt}
              width={80}
              height={50}
              className='object-contain'
            />
          </div>
        ))}
      </div>
      <p className='text-center mt-8'>© {new Date().getFullYear()}, Berger Industries Inc Powered by Shopify
Privacy policy</p>
    </div>
  )
}
