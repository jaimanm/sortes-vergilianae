'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './links.css'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <div className='w-full flex justify-around border-blue-500 text-2xl'>
          <Link className={`link ${pathname === '/' ? 'active' : ''} hover:italic active:text-[lightseagreen]`} href="/">
            Home
          </Link>
          <Link
            className={`link ${pathname === '/prophecy' ? 'active' : ''} hover:italic active:text-[lightseagreen]`}
            href="/prophecy"
          >Prophecy
          </Link>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''} hover:italic active:text-[lightseagreen]`}
            href="/about"
          >
            About
          </Link>
    </div>
  )
}