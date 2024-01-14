// app/layout.tsx is UI common to all URLs, including '/'
import type { Metadata } from "next"
import { Links } from "./components/Links/links"

// These styles apply to every route in the application
import './globals.css'

// it is required to have a layout.tsx at the top level of the app directory
export const metadata: Metadata = {
  title: 'Sortes Vergilianae',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono bg-[#FAF9F6] selection:bg-[lightseagreen] selection:bg-opacity-50">
        <div className="h-screen w-screen text-slate-500">
        {children}
        <Footer />
        </div>
        <nav className='fixed w-screen top-0 left-0 h-28 bg-slate-500 flex items-center select-none'>
          <h1 className="font-bold font-mono text-3xl italic ml-5">Sortes Vergilianae</h1>
          <Links />
        </nav>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <a href="https://www.github.com/jaimanm">
    <div className="fixed bottom-3 right-4 bg-[lightseagreen] w-auto h-auto bg-opacity-40 rounded-lg hover:text-[lightseagreen] hover:italic ">
      <p className="p-3">
        Made by Jaiman Munshi
      </p>
    </div>
    </a>
  );
}
