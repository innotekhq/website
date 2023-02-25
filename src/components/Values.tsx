'use client'

import React from "react";

const Title = ({ title }: {title: string}) => (<div className='text-3xl text-center pb-5'>{title}</div>);

export default function Values() {
  return (
    <div className="flex flex-col gap-2 justify-center items-start w-full place-content-center">
      <div>
        <Title title='Core Values'/>
        <div className='text-xl text-center'>
          <p>At Innotek we uphold a set of values that guide everything we do.</p>
          <p>We believe in the importance of good software development practices, rigorous testing, and creating robust and easily maintainable code.</p>
          <p>We also strive for simplicity in everything we do, because we know that the best solutions are often the simplest.</p>
          <p>Most importantly, we measure our success by the satisfaction of our clients.</p>
          <p>Our values are not just words on a page, but a way of life for us.</p>
        </div>
      </div>
    </div>
  )
}