import { MoveRight, Music } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import React from 'react'

export default function Subscribe() {
  return (
    <div className='p-8'>
        <h2 className='text-2xl text-center md:text-left'>Subscribe to our emails</h2>
        
        <div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 items-center md:items-stretch'>
<div className="flex justify-between items-center gap-1 border w-200 border-black px-4 py-2 md:w-auto">
  <button className="">Email</button>
  <MoveRight />
</div>

        
            <div className='flex  gap-4 items-center'>
            <button className=' bg-blue-800 rounded-2xl text-white px-12 py-2 '>Follow shop</button>
            <div className='flex gap-6 px-4'>
            <FaFacebook size={28}/>
            <FaInstagram size={28}/>
            <FaTiktok size={28}/>
            </div>
            </div>
        </div>
    </div>
  )
}
