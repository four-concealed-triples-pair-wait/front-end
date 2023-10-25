import React from 'react'
import background_img from '../../public/top-page-background.jpeg'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Image src={background_img} alt='a bird' layout='fill' objectFit='cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center'>
          <div className='text-5xl font-bold text-white'>WELCOME TO</div>
          <div className='text-8xl font-bold text-white'>PLATEAU</div>
        </div>
      </div>
    </div>
  )
}

export default Home
