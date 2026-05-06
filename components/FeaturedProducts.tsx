import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

export interface FeaturedProducts{
 image: {
    src: string
    height: number
    width: number
    alt?: string
  };
  description: string;
  price?: number
}

export default function FeaturedProducts({image,description, price}: FeaturedProducts) {
  return (
    <div>
        <div className='overflow-hidden'>
        <Image 
             src={image.src}
              width={400}
              height={400}
              alt={''}
              className='w-full h-125 object-cover px-1 transition-transform duration-300 hover:scale-110'
        />
        </div>
        <p className='flex items-center gap-2 text-2xl font-bold py-4'>{description} <MoveRight size={18} /></p>
        {price && <p>${price} CAD</p>}
    </div>
  )
}
