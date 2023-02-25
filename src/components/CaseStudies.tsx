import Image from 'next/image';
import {ReactNode} from "react";

const AppDescription = ({ image }: { image: string}) => (
  <div className='w-2/3 p-6'>
    <Image alt='logo of the client' src={image} height={500} width={900} />
  </div>
);
function CaseStudy({ logo, children, image, left = false, tech }: {logo: string, children: ReactNode, image: string, left?: boolean, tech: Array<string>}) {
  const techPills = tech.map((techName) => (
    <div key={techName} className="px-4 py-2 font-semibold text-sm bg-lblue text-dpurple rounded-full shadow-sm">{techName}</div>
  ));

  if (left) {
    return (
      <div className='flex w-full justify-center py-24'>
        <AppDescription image={image} />
        <div className='flex flex-col gap-6 w-1/3 p-6'>
          <div>
            <Image alt='logo of the client' src={logo} width={100} height={40} />
          </div>
          <div>
            {children}
          </div>
          <div className='flex flex-row flex-wrap gap-2'>
            {techPills}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex w-full py-24'>
      <div className='flex flex-col gap-6 w-1/3 p-6'>
        <div>
          <Image alt='logo of the client' src={logo} width={100} height={40} />
        </div>
        <div>
          {children}
        </div>
        <div className='flex flex-row flex-wrap gap-2'>
          {techPills}
        </div>
      </div>
      <AppDescription image={image} />
    </div>
  )
}
export default function CaseStudies() {
  return (
    <>
      <CaseStudy logo='/10log_logo.png' image='/supersonic/img.png' tech={['TypeScript', 'Electron', 'FusionAuth', 'GraphQL', 'OAuth', 'Digital Ocean', 'Docker']}>
        <p>Source-Path-Receiver tool for graphical analysis of mechanical system, environmental, and architectural noise control.</p>
        <p>Consultant oriented. Organize sound level sources by mechanical equipment type or simple blocks. Analyze with ASHRAE-derived and standard calculations of noise paths. Review methodologies with live equations and graphs.</p>
      </CaseStudy>
      <CaseStudy logo='/10log_logo.png' image='/10logio/screenshot.png' left tech={['TypeScript', 'Electron', 'FusionAuth', 'GraphQL', 'OAuth', 'Digital Ocean', 'Docker']}>
        10log creates comprehensive web-based acoustical design and project management tools with a modern user interface.

        Our tools are based on the generally accepted formulas and methods described by academic texts, ISO & ASTM standards, and whitepapers. Any deviations from these methods are described within the tool. 10log provides exposure to emerging research by including methods and formulas from recent whitepapers and presentations that will be marked EXPERIMENTAL while being vetted by our industry.
      </CaseStudy>
      {/*<CaseStudy logo='/10log_logo.png' image='/10logcom/rtcalculator.png' tech={['TypeScript', 'Electron', 'FusionAuth', 'GraphQL']}>10log is awesome</CaseStudy>*/}
    </>
  )
}