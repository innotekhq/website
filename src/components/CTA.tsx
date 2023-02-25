import WorkWithUs from "@/components/WorkWithUs";

export default function CTA() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your life and drive your success with custom software solutions?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Contact us today to schedule a consultation and see how we can help you achieve your goals.
          </p>
          <div className="mt-10 flex flex-col gap-6 items-center justify-center gap-x-6 lg:justify-start">
            <div className="flex justify-center">
              <div
                className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
            <WorkWithUs />
          </div>
        </div>
      </div>
    </div>
  )
}