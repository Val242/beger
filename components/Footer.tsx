import React from "react";
import Image, { StaticImageData } from "next/image";

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
    <footer className="p-4 sm:p-6 md:p-8">
      {/* Payment logos */}
      <div className="border-t border-gray-300 pt-6">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {paymentLogos.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-center"
            >
              <Image
                src={payment.image}
                alt={payment.alt}
                width={80}
                height={50}
                className="
                  object-contain
                  w-[60px] sm:w-[70px] md:w-[80px]
                  h-auto
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-center text-xs sm:text-sm mt-6 text-gray-600 px-2">
        © {new Date().getFullYear()} Berger Industries Inc. Powered by Shopify
        <br className="sm:hidden" />
        <span className="block sm:inline"> Privacy policy</span>
      </p>
    </footer>
  );
}