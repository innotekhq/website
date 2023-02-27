'use client';

import {FormEvent, ChangeEvent, useState} from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({});
  const [sent, setSent] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch('/api/contact-us', { method: 'POST', body: JSON.stringify(formState) });
    setSent(true);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value
    }));
  }

  if (sent) {
    return (
      <p>
        We appreciate you reaching out to us, and we'll get back to you soon!
      </p>
    )
  }

  return (
    <div className="">
      <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
        <label className="block">
          <span>Name</span>
          <input
            name='name'
            type="text"
            className="
                  dark:text-slate-800
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder=""
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Email address</span>
          <input
            name='email'
            type="email"
            className="
                  dark:text-slate-800
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            placeholder="john@example.com"
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>When is your deadline?</span>
          <input
            name='deadline'
            type="date"
            className="
                  dark:text-slate-800
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <span>Additional details</span>
          <textarea
            name='description'
            className="
                  dark:text-slate-800
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            rows={10}
            onChange={handleChange}
          ></textarea>
        </label>
        <button className='hover:brightness-125 rounded-md p-2 mx-auto items-center gap-4 bg-lblue text-dpurple text-xl font-bold'>Submit</button>
      </form>
    </div>
  )
}