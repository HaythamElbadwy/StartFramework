import React from 'react'

export default function Home() {
  return (
    <div className='home text-center py-20'>
      <div className='py-10'>
      <div className='imag py-8'>
        <img src="./src/assets/Image/avataaars.svg" alt="" />
      </div>
      <div className='title'> 
        <h3 className='text-white font-bold'>START FRAMEWORK</h3>
      </div>
      <div className='line-star items-center py-5'>
        <h1 className='line mx-3'></h1>
        <i className='fa-solid fa-star text-white'></i>
        <h1 className='line mx-3'></h1>
      </div>
      <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
