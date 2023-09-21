import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdul • Dev',
  description: 'Dev portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Abdul • Dev</title>
        <meta content="Abdul • Dev" property="og:title" />
        <meta content="A simple, sophisticated dev portfolio made using the Next.js framework." property="og:description" />
        <meta content="https://bit.ly/abdulr" property="og:url" />
        <meta content="https://i.postimg.cc/J04tdVBW/Thumbnail.png" property="og:image" />
        <meta content="#14b6a4" data-react-helmet="true" name="theme-color" />
        <link rel="icon" href="favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}
        <footer class="rounded-lg shadow m-4 bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm sm:text-center text-gray-400">© 2023 <Link href={"/"} className='hover:underline'>Abdul</Link>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Link href={"/"} class="mr-4 hover:underline md:mr-6 ">Home</Link>
              </li>
              <li>
                <Link href={"/about"} class="mr-4 hover:underline md:mr-6 ">About</Link>
              </li>
              <li>
                <Link href={"/projects"} class="mr-4 hover:underline md:mr-6 ">Projects</Link>
              </li>
              <li>
                <Link href={"/toolbox"} class="mr-4 hover:underline md:mr-6 ">Toolbox</Link>
              </li>
              <li>
                <Link href={"/resume"} class="mr-4 hover:underline md:mr-6 ">Resume</Link>
              </li>
              <li>
                <Link href={"LICENSE.md"} class="mr-4 hover:underline md:mr-6 ">Legal</Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
