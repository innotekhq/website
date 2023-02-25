import Image from 'next/image'
import WorkWithUs from "@/components/WorkWithUs";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <section className='flex justify-center items-center w-full flex-col md:flex-row'>
        <div className="flex flex-col gap-10 justify-items-start">
          <div className='text-2xl  font-bold'>Scale your Business with us</div>
          <div className='text-4xl  font-extrabold'>
            <span className='text-purple-400'>Inno</span>vative software solutions for your <span className='text-purple-400'>Tech</span> business.
          </div>
          <div>
            <WorkWithUs />
          </div>
        </div>
        <Image src='/undraw_programming_lblue.svg' alt='programmer' width={600} height={200}/>
      </section>
      <section  className='flex justify-center items-center w-full flex-col mt-24'>
        <div className='text-5xl pb-20 font-extrabold'>We Develop</div>
        <Services />
      </section>
      <section className='flex justify-center items-center w-full flex-col mt-24'>
        <div className='text-5xl pb-20 font-extrabold'>About Us</div>
        <Values />
      </section>
      <section className='flex justify-center items-center w-full flex-col mt-24'>
        <div className='text-4xl pb-20  font-extrabold'>Team</div>
        <Team />
      </section>
      <section className='flex justify-center items-center w-full flex-col mt-24'>
        <div className='text-4xl pb-20  font-extrabold'>Case Studies</div>
        <CaseStudies />
      </section>
      <section  className='justify-center items-center w-full mt-24'>
        <CTA />
      </section>
    </>
  )
}
