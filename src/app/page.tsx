import React from "react";

export default function Home() {
  return (
    <>
      <section className='text-xl text-center'>
        Hi! 🙇‍♂️ We're glad you're here!
      </section>
      <section>
        At Innotek we build simple, working solutions for people to help their businesses and lives.
      </section>
      <section>
        <p>We value good development practices, rigorous testing, and maintainable code.</p>
        <p>We aim for simple solutions as they are often the best.</p>
      </section>
      <section>
        <p>Share our values?</p>
        <p className='mt-5'>We'd love to <a className='underline' href='/contact-us'>chat</a>.</p>
      </section>
    </>
  )
}
