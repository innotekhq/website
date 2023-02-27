import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar4() {
  return (
    <section className='flex flex-col items-center w-full mt-10'>
      <a className='w-full' href='/'>
        <div className='pb-5 bg-contain bg-no-repeat bg-center h-[60px] dark:bg-[url("/full_logo_dark.png")] bg-[url("/full_logo_light.png")]'></div>
      </a>
      <div className='flex flex-row gap-10 underline text-xl mt-5'>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/contact-us'}>Contact Us</Link>
      </div>
    </section>
  );
}