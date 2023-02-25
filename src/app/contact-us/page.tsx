// `app/page.js` is the UI for the root `/` URL
import ContactForm from "@/app/contact-us/ContactForm";

export default function Page() {
  return (
    <div className='max-w-3xl flex flex-col items-center mx-auto'>
      <div className='flex flex-col gap-6 justify-center place-content-center'>
        <div className='text-6xl font-extrabold'>
          How we can help?
        </div>
        <div className='text-4xl'>
          Let us know more about your project by filling out the form below or sending an email to <a className='dark:text-lblue text-dpurple underline' href='mailto:info@innotek.hu'>info@innotek.hu</a>.
        </div>
        <ContactForm />
      </div>
    </div>
  );
}