'use client';

import React from 'react';
import Link from "next/link";
import FeaturedProducts from '@/components/FeaturedProducts';
import { featuredProducts } from '@/data/featuredProducts';

export default function Page() {
  return (
    <div className="font-[Times_New_Roman] px-4 sm:px-6 md:px-10 lg:px-18">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 sm:py-6">
        Collections
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-4">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/collections/${product.slug}`}>
            
            <div className="w-full cursor-pointer">
              <FeaturedProducts
                image={product.image}
                description={product.description}
              />
            </div>

          </Link>
        ))}
      </div>

    </div>
  );
}