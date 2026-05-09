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
    <footer className="px-4 sm:px-6 md:px-8 py-8">

      {/* Payment logos */}
      <div className="border-t border-gray-300 pt-6">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10">

          {paymentLogos.map((payment) => (
            <div key={payment.id} className="flex items-center justify-center">
              <Image
                src={payment.image}
                alt={payment.alt}
                width={90}
                height={60}
                className="
                  object-contain
                  w-[55px] sm:w-[70px] md:w-[85px]
                  h-auto
                "
              />
            </div>
          ))}

        </div>
      </div>

      {/* Footer text */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-xs sm:text-sm leading-relaxed">
          © {new Date().getFullYear()} Berger Industries Inc. Powered by Shopify
        </p>

        <p className="text-xs sm:text-sm mt-1">
          Privacy policy
        </p>
      </div>

    </footer>
  );
}