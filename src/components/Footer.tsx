import Image from 'next/image'
export default function Footer() {
  return (
    <div className='flex flex-col items-center mt-20 p-20 divide-y border-dashed border-t-2 dark:border-t-lblue border-t-dpurple'>
      <div className='flex flex-col gap-6'>
        <div>
          <a href='/'>
            <Image src={'/full_logo.png'} width={300} height={200} alt='Innotek logo'/>
          </a>
        </div>
        <div>
          Copyright © 2023 | All rights reserved
        </div>
      </div>
    </div>
  )
}