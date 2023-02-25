import React from "react";
import Image from 'next/image';

function Player({ name, position, image }: { name: string, position: string, image: string}) {
  return (
    <div className='flex flex-col items-center'>
      <Image src={image} height={300} width={300} alt={`Photo of ${name}`}/>
      <div className='text-bold text-2xl mt-2'>{name}</div>
      <div className='text-xl mt-2'>{position}</div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="flex gap-2 w-full place-content-center">
      <div className='w-1/2'>
        <Player name="Keszei Patrik" position="Front End Developer" image={'/team/patrik.jpeg'}/>
      </div>
      <div className='w-1/2'>
        <Player name="Kőműves Ákos" position="CTO/Founder" image={'/team/akos.jpeg'}/>
      </div>
    </div>
  )
}