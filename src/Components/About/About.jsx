import React from 'react'

export default function About() {
  return (
    <div className='about text-center p-20 d-flex items-center'>
      <div className='m-20 p-16'>
      
      <div className='title'> 
        <h3 className='text-white font-bold'>ABOUT COMPONENT</h3>
      </div>
      <div className='line-star items-center py-2'>
        <h1 className='line mx-3'></h1>
        <i className='fa-solid fa-star text-white'></i>
        <h1 className='line mx-3'></h1>
      </div>
      
   <div className='flex '>
   <p className='text-white w-1/2 mx-2'>Freelancer is a free bootstrap theme created by Route. 
        The download includes the complete source files including HTML, CSS, 
        and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
<p className='text-white w-1/2 mx-2'>Freelancer is a free bootstrap theme created by Route.
   The download includes the complete source files including HTML, CSS, 
  and JavaScript as well as optional SASS stylesheets for easy customization</p>
   </div>
      </div>
    </div>
  )
}
