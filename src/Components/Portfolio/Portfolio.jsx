import React from 'react'

export default function () {
  return (
    <div className='portfolio text-center p-6 d-flex items-center'>
      <div className='m-20 p-8'>

        <div className='title'>
          <h3 className=' font-bold'>PORTFOLIO COMPONENT</h3>
        </div>
        <div className='line-star-portfolio items-center py-2'>
          <h1 className='line-portfolio mx-3' ></h1>
          <i className='fa-solid fa-star'></i>
          <h1 className='line-portfolio mx-3'></h1>
        </div>
        <div className="row flex grid-cols-3 gap-9 my-8 overflow-hidden">
          <div className='img-portfolio'>
            <img src="./src/assets/Image/poert1.png" className='rounded-xl ' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
          <div className='img-portfolio '>
            <img src="./src/assets/Image/port2.png" className='rounded-xl' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
          <div className='img-portfolio '>
            <img src="./src/assets/Image/port3.png" className='rounded-xl' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
        </div>
        <div className="row flex grid-cols-3 gap-9">
          <div className='img-portfolio '>
            <img src="./src/assets/Image/poert1.png" className='rounded-xl' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
          <div className='img-portfolio '>
            <img src="./src/assets/Image/port2.png" className='rounded-xl' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
          <div className='img-portfolio '>
            <img src="./src/assets/Image/port3.png" className='rounded-xl' alt="" />
            <div className='layer absolute rounded-lg'>
              <i className='fa-solid fa-plus text-white fa-6x top-0 bottom-0'></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
