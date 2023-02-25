import './globals.css'
import Navbar from '@/components/Navbar';
import {Inter} from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INNOTEK - Scale your Business with us',
  description: 'Innovative software solutions for your Tech business. React, React.js, Node.js, JavaScript, TypeScript, REST, GraphQL, PostreSQL, Electron, Browser Extensions',
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
          <Navbar />
          <div className={`${inter.className} container mx-auto px-48 mt-56`}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
