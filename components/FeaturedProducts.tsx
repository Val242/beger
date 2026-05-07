import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export interface FeaturedProducts {
  image: {
    src: string;
    height: number;
    width: number;
    alt?: string;
  };
  description: string;
  price?: number;
}

export default function FeaturedProducts({
  image,
  description,
  price,
}: FeaturedProducts) {
  return (
    <div className="w-full">
      
      {/* Image container */}
      <div className="overflow-hidden rounded-sm">
        <Image
          src={image.src}
          width={600}
          height={600}
          alt={image.alt || description}
          className="
            w-full
            h-80 sm:h-105 md:h-130
            object-cover
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Text section */}
      <div className="py-3">
        <p className="flex items-center gap-2 text-base sm:text-lg md:text-2xl font-bold">
          {description}
          <MoveRight size={18} />
        </p>

        {price && (
          <p className="text-sm sm:text-base text-gray-700 mt-1">
            ${price} CAD
          </p>
        )}
      </div>

    </div>
  );
}