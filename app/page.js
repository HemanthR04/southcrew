import Clients from '@/components/Clients'
import React from 'react'

const page = () => {
  return (
    <main>
      <div className='hero-section text-center flex flex-col justify-center w-full h-[400px]'> 
        <h1 className='text-white text-[48px] px-40 font-bold'>Your one stop solution for Design/Dev/Branding/Video Production</h1>
        <h3 className='text-white text-[24px] px-40 font-bold'>Growing your brand now made easy</h3>
        <div className='py-2 mt-4'>
        <button className='border-2 w-28 text-white px-4 py-2'>
          Call us
        </button>
        </div>
        
        <Clients/>
      </div>
    </main>
  )
}

export default page