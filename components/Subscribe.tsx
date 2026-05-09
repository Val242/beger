import { MoveRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import React from "react";

export default function Subscribe() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-10">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl text-center md:text-left font-medium">
        Subscribe to our emails
      </h2>

      {/* Content */}
      <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 items-center">

        {/* Email input */}
        <div className="flex items-center justify-between w-full md:w-[400px] border border-black px-4 py-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none bg-transparent text-sm sm:text-base"
          />
          <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
        </div>

        {/* Social + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

          <button className="bg-blue-800 text-white px-6 sm:px-10 py-2 rounded-2xl text-sm sm:text-base">
            Follow shop
          </button>

          <div className="flex gap-5 sm:gap-6">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTiktok size={24} />
          </div>

        </div>

      </div>
    </div>
  );
}