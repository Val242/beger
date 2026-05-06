import React, { ReactNode } from 'react'

export interface ButtonProps{
    children: ReactNode;
    className?: string;
    variant?: 'purple' | 'dark';
}

const variantStyles = {
  purple: 'inline-flex justify-center items-center border-0 px-12 cursor-pointer font-inherit text-2xl no-underline transition-shadow bg-purple-600 hover:bg-purple-700 text-white',
  dark: 'inline-flex justify-center items-center border-0 px-5 cursor-pointer font-inherit text-2xl no-underline transition-shadow bg-black hover:bg-gray-800 text-white'
};

export default function Button({children, className, variant = 'dark'}: ButtonProps) {
  const baseStyles = variantStyles[variant];
  const combinedClasses = `${baseStyles} ${className || ''}`.trim();
  
  return (
    <button className={combinedClasses}>{children}</button>
  )
}
