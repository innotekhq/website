import Desktop from "@/components/icons/Desktop";
import {ReactNode} from "react";
import Extension from "@/components/icons/Extension";
import Fullstack from "@/components/icons/Fullstack";

const ServiceCard = ({ children, name, logo }: { children: ReactNode, name: string, logo: ReactNode }) => {
  return (
    <div className='w-1/3'>
      <div className='w-full'>{logo}</div>
      <h4 className="mt-4 text-3xl mb-5">{name}</h4>
      <p className="lg:text-xl">
        {children}
      </p>
    </div>
  )
}
export default function Services() {
  return (
    <div className='flex gap-8 place-content-center'>
      <ServiceCard name="Desktop Applications" logo={<Desktop />}>
        We can help you develop powerful, custom desktop applications that run on all major operating systems. Whether you need a software solution for your business or a personal project, we have the expertise to deliver.
      </ServiceCard>
      <ServiceCard name="Browser Extensions" logo={<Extension />}>
        Build custom browser extensions with us that extend the functionality of your web applications. Our team has experience working with all major browsers, and we can help you develop extensions that are both user-friendly and highly functional.
      </ServiceCard>
      <ServiceCard name="Full Stack Applications"logo={<Fullstack />}>
       Front-end and back-end development, database design and integration, and server-side programming. Our team has years of experience in working with the Node.js, React and TypeScript ecosystem.
      </ServiceCard>
    </div>
  )
}