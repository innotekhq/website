// `app/page.js` is the UI for the root `/` URL
import ContactForm from "@/app/contact-us/ContactForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className='max-w-3xl flex flex-col items-center mx-auto'>
      <div className='flex flex-col gap-6 justify-center place-content-center'>
        <p>
          How we can help?
        </p>
        <p>
          Let us know more about your project by sending an email to <Link className='dark:text-lblue text-dpurple underline' href='mailto:info@innotek.hu'>info@innotek.hu</Link>.
        </p>
        {/*<p>*/}
        {/*  Let us know more about your project by filling out the form below or sending an email to <a className='dark:text-lblue text-dpurple underline' href='mailto:info@innotek.hu'>info@innotek.hu</a>.*/}
        {/*</p>*/}
        {/*<ContactForm />*/}
      </div>
    </div>
  );
}