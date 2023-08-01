

import './globals.css'
import type { Metadata } from 'next'
import {motion, AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";

export const metadata: Metadata = {
    title: 'RATING.',
    description: 'YOUR DIGITAL PORTFOLIO',

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">


          <body>
          {children}

          </body>


    </html>
  )
}
