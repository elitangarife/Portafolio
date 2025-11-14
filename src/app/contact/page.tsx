import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='justify-center items-center md:m-10 min-h-screen'>
        <h1 className='font-bold text-3xl md:text-4xl text-center '>Contactáme</h1>
         
      <div className='bg-red-50 w-200 '>
        <form action="" className='grid grid-cols-1'>
            <label htmlFor="text">Name</label>
            <input type="text" className='border'/>
            <label htmlFor="text">Email</label>
            <input type="text" className='border'/>
            <label htmlFor="text">Mensaje</label>
            <input type="text" className='border'/>
        </form>
      </div>

    </div>
  )
}

export default Contact