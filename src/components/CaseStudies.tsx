import Image from 'next/image';

const ClientDescription = ({ logo, description }: { logo: string, description: string}) => (<div className='w-1/3'>
  <div>
    <Image alt='logo of the client' src={logo} width={40} height={40} />
  </div>
  {description}
</div>);
const AppDescription = ({ image }: { image: string}) => (
  <div className='w-2/3'>
    <Image alt='logo of the client' src={image} height={500} width={500} />
  </div>
);
function CaseStudy({ logo, description, image, left = false }: {logo: string, description: string, image: string, left?: boolean}) {
  if (left) {
    return (
      <div className='flex w-full justify-center py-24'>
        <AppDescription image={image} />
        <ClientDescription description={description} logo={logo} />
      </div>
    )
  }

  return (
    <div className='flex w-full justify-center'>
      <ClientDescription description={description} logo={logo} />
      <AppDescription image={image} />
    </div>
  )
}
export default function CaseStudies() {
  return (
    <>
      <CaseStudy description='10log is awesome' logo='/10log_logo.png' image='/supersonic/img.png'/>
      <CaseStudy description='10log is awesome' logo='/10log_logo.png' image='/10logio/screenshot.png' left/>
      <CaseStudy description='10log is awesome' logo='/10log_logo.png' image='/10logcom/rtcalculator.png'/>
    </>
  )
}