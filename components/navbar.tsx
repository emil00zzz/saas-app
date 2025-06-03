import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from '@/components/navitems'
const navbar = () => {
  return (
    <nav className='navbar'>
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={46}
            height={44}
            className='rounded-full'
          />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems />
      </div>
    </nav>
  )
}

export default navbar