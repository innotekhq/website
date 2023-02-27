import Image from 'next/image';
import {ReactNode} from "react";
import Link from "next/link";

function CaseStudy({ logo, children, image, left = false, tech }: {logo: string, children: ReactNode, image: string, left?: boolean, tech: Array<string>}) {
  const techPills = tech.map((techName) => (
    <div key={techName} className="px-4 py-2 font-semibold text-sm bg-lblue text-dpurple rounded-full shadow-sm">{techName}</div>
  ));

  return (
    <div className='flex flex-col gap-6 items-center'>
      <div>
        <Image alt='logo of the client' src={image} height={500} width={700} />
      </div>
      <div>
        <Image alt='logo of the client' src={logo} width={100} height={40} />
        {children}
      </div>
      <div className='flex flex-row flex-wrap gap-2'>
        {techPills}
      </div>
    </div>
  )
}
export default function Page() {
  return (
    <>
      <CaseStudy logo='/10log_logo.png' image='/supersonic/img.png' tech={['TypeScript', 'Electron', 'FusionAuth', 'GraphQL', 'OAuth', 'Draw2D', 'Auto-updates']}>
        <p>10log hired us to build a desktop application tool for graphical analysis of mechanical system, environmental, and architectural noise control.</p>
        <p>We worked closely with acoustical engineers to implement visual charts, display complex formulas with LaTeX and build an overall intuitive drawing tool for the industry.</p>
      </CaseStudy>
      <div className='divide-y border-dashed border-t-2'></div>
      <CaseStudy logo='/10log_logo.png' image='/10logio/screenshot.png' tech={['TypeScript', 'Electron', 'FusionAuth', 'GraphQL', 'OAuth', 'Digital Ocean', 'Docker', 'Autodesk Viewer']}>
        <p>We worked closely with 10log to create a comprehensive web-based acoustical design and project management tools with a modern user interface.</p>
        <p>The project management tool contains our custom gantt-chart and integration with <Link href='https://viewer.autodesk.com/'>Autodesk Viewer</Link>.</p>
      </CaseStudy>
    </>
  )
}