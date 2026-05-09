import React from "react";
import bulkhead from "@/images/bulkhead.jpg";
import bulkhead2 from "@/images/bulkhead2.jpg";
import internal from "@/images/internal.jpg";
import peterbilt from "@/images/peterbilt.jpg";
import peterbilt2 from "@/images/peterbilt2.jpg";
import peterbilt3 from "@/images/peterbilt3.jpg";
import peterbilt4 from "@/images/perterbilt4.jpg";
import wiring from "@/images/wiring.jpg";
import FeaturedProducts from "./FeaturedProducts";

export default function Products() {
  const featuredProducts = [
    {
      id: 1,
      image: {
        src: bulkhead.src,
        height: bulkhead.height,
        width: bulkhead.width,
        alt: "Bulkhead Product",
      },
      description: "1/2 NPT 304 SS Bulkhead",
      price: 75.0,
    },
    {
      id: 2,
      image: {
        src: bulkhead2.src,
        height: bulkhead2.height,
        width: bulkhead2.width,
        alt: "Bulkhead 2 Product",
      },
      description: "1/4 NPT 304 SS Bulkhead",
      price: 50.0,
    },
    {
      id: 3,
      image: {
        src: wiring.src,
        height: wiring.height,
        width: wiring.width,
        alt: "Wiring Product",
      },
      description: "11ga mirror SS wiring and P clamp brackets",
      price: 5.0,
    },
    {
      id: 4,
      image: {
        src: internal.src,
        height: internal.height,
        width: internal.width,
        alt: "Internal Product",
      },
      description: "13 and 15 internal WM breather glow brackets",
      price: 80.0,
    },
    {
      id: 5,
      image: {
        src: peterbilt.src,
        height: peterbilt.height,
        width: peterbilt.width,
        alt: "Peterbilt Product",
      },
      description: "18 304SS peterbilt 388/389/589 bumper",
      price: 1350.0,
    },
    {
      id: 6,
      image: {
        src: peterbilt2.src,
        height: peterbilt2.height,
        width: peterbilt2.width,
        alt: "Peterbilt 2 Product",
      },
      description:
        "1987-2005 Peterbilt 379 door pocket stainless inserts Blank",
      price: 110.0,
    },
    {
      id: 7,
      image: {
        src: peterbilt3.src,
        height: peterbilt3.height,
        width: peterbilt3.width,
        alt: "Peterbilt 3 Product",
      },
      description: "2001-2005 Peterbilt round dash panels",
      price: 450.0,
    },
    {
      id: 8,
      image: {
        src: peterbilt4.src,
        height: peterbilt4.height,
        width: peterbilt4.width,
        alt: "Peterbilt 4 Product",
      },
      description: "2006-2024 Peterbilt 2 PIECE Dash Panel set",
      price: 450.0,
    },
  ];

  return (
    <div>
      {/* Title */}
      <div className="px-4 sm:px-6 md:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Featured Products
        </h1>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          px-4
          sm:px-6
          md:px-8
          py-4
        "
      >
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
  );
}