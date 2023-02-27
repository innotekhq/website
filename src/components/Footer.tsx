import Image from 'next/image'
import React from "react";
export default function Footer() {
  return (
    <div className='flex flex-col items-center mt-20 py-5 divide-y border-dashed border-t-2 dark:border-t-lblue border-t-dpurple'>
      <a href='/'>
        <div className="bg-cover bg-no-repeat bg-center w-16 h-16 bg-[url('/logo.png')]"></div>
      </a>
    </div>
  )
}