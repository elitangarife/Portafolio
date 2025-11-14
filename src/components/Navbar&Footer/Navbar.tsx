import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex md:justify-between '>
        <Link href="/" className="font-semibold p-4 hover:text-blue-700">Eli Tangarife</Link>
        <div className='mt-4 grid grid-cols-1 md:flex md:flex-row'>
            <Link href="/about" className="font-semibold p-4 hover:text-blue-700">Sobre Mi</Link>
            <Link href="/contact" className="font-semibold p-4 hover:text-blue-700" >Contactame</Link>
            <Link href="/projects" className="font-semibold p-4 hover:text-blue-700">Proyectos</Link>
      </div>

    </div>
  )
}

export default Navbar