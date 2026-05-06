import React from 'react'
import bulkhead from '@/images/bulkhead.jpg';
import bulkhead2 from '@/images/bulkhead2.jpg';
import internal from '@/images/internal.jpg';
import peterbilt from '@/images/peterbilt.jpg';
import peterbilt2 from '@/images/peterbilt2.jpg';
import peterbilt3 from '@/images/peterbilt3.jpg';
import peterbilt4 from '@/images/perterbilt4.jpg';
import wiring from '@/images/wiring.jpg';
import Button from '@/components/Button';
import FeaturedProducts from './FeaturedProducts';

export default function Products() {
    const featuredProducts = [
    {
      id: 1,
      image: {
        src: bulkhead.src,
        height: bulkhead.height,
        width: bulkhead.width,
        alt: 'Bulkhead Product'
      },
      description: '1/2 NPT 304 SS Bulkhead',
      price: 75.00
    },
    {
      id: 2,
      image: {
        src: bulkhead2.src,
        height: bulkhead2.height,
        width: bulkhead2.width,
        alt: 'Bulkhead 2 Product'
      },
      description: '1/4 NPT 304 SS Bulkhead',
      price: 50.00
    },
    {
      id: 3,
      image: {
        src: wiring.src,
        height: wiring.height,
        width: wiring.width,
        alt: 'Wiring Product'
      },
      description: '11ga mirror Ss wiring and P clamp brackets',
      price: 5.00
    },
    {
      id: 4,
      image: {
        src: internal.src,
        height: internal.height,
        width: internal.width,
        alt: 'Internal Product'
      },
      description: '13 and 15 internal wm breather glow brackets',
      price: 80.00
    },
    {
      id: 5,
      image: {
        src: peterbilt.src,
        height: peterbilt.height,
        width: peterbilt.width,
        alt: 'Peterbilt Product'
      },
      description: '18 304SS peterbilt 388/389/589 bumper',
      price: 1350.00
    },
    {
      id: 6,
      image: {
        src: peterbilt2.src,
        height: peterbilt2.height,
        width: peterbilt2.width,
        alt: 'Peterbilt 2 Product'
      },
      description: '1987-2005 Peterbilt 379 door pocket stainless inserts Blank',
      price: 110.00
    },
    {
      id: 7,
      image: {
        src: peterbilt3.src,
        height: peterbilt3.height,
        width: peterbilt3.width,
        alt: 'Peterbilt 3 Product'
      },
      description: '2001-2005 Peterbilt round dash panels',
      price: 450.00
    },
    {
      id: 8,
      image: {
        src: peterbilt4.src,
        height: peterbilt4.height,
        width: peterbilt4.width,
        alt: 'Peterbilt 4 Product'
      },
      description: '2006-2024 Peterbilt 2 PIECE Dash Panel set',
      price: 450.00
    }
  ];
  return (
       <div>
      <div className='flex px-8 py-8'>
       <h1 className='text-3xl font-bold'>Featured Products</h1> 
      </div>

      <div className='grid grid-cols-4 gap-1 px-8 py-4'>
        {featuredProducts.map((product) => (
          <div key={product.id}>
            <FeaturedProducts
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
      </div>
  )
}
