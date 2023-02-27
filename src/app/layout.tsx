import './globals.css'
import Navbar4 from '@/components/Navbar4';
import {Inter} from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INNOTEK - Scale your Business with us',
  description: 'Innovative software solutions for your Tech business. React, React.js, Node.js, JavaScript, TypeScript, REST, GraphQL, PostreSQL, Electron, Browser Extensions',
  icons: {
    icon: { url: '/favicons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/favicon-32x32.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons/apple-touch-icon.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-background">
        <div className="relative dark:text-slate-50 text-slate-800">
          <div className={`${inter.className} container mx-auto max-w-2xl`}>
            <Navbar4 />
            <div className='flex flex-col gap-6 font-light mt-16 text-xl'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
