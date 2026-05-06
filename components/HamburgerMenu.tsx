'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/collections/all' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="relative">

      {/* BUTTON (summary equivalent) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 flex items-center justify-center"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* DRAWER */}
      <div
        className={`
          absolute left-0 top-full w-80 bg-white z-50
          shadow-xl border-r border-black/10
          transition-all duration-300 ease-in-out
          overflow-hidden
          ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
        style={{
          height: 'calc(100vh - 120px)' // adjust to your navbar height
        }}
      >

        <div className="flex flex-col h-full overflow-y-auto">

          {/* MAIN NAV */}
          <nav className="flex-1 py-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-8 py-4 text-lg font-medium border-b border-black/5 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* UTILITY SECTION (like Shopify) */}
          <div className="bg-gray-100 px-8 py-6 border-t border-black/5">

<div className="mt-auto px-8 py-6 border-t border-black/10">
  <div className="flex gap-6 items-center text-black/80">

    <FaFacebook size={24} className="hover:text-blue-600 transition" />

    <FaInstagram size={24} className="hover:text-pink-500 transition" />

    <FaTiktok size={24} className="hover:text-black transition" />

  </div>
</div>

        </div>
      </div>
    </div>
    </div>
    
  );
}