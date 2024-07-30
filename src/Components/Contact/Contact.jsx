import React from 'react'

export default function Contact() {
  return (
    <form className='mx-auto'>
      <div className='contact text-center p-8 d-flex items-center'>
    <div className='m-20 p-8'>

      <div className='title'>
        <h3 className=' font-bold'>CONATCT SECTION</h3>
      </div>
      <div className='line-star-contact items-center py-2'>
        <h1 className='line-contact mx-3' ></h1>
        <i className='fa-solid fa-star'></i>
        <h1 className='line-contact mx-3'></h1>
      </div>
      <div className="relative z-0 w-full mb-5 group py-5">
                <input type="text" name="floating_text" id="floating_text" 
                className="block py-2.5 px-0 w-full text-sm border-bottom rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="userName" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm border-bottom rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="userAge" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm border-bottom rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="userEmail" required />
            </div>
       
        <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm border-bottom rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder="userPassword" required />
            </div>
        <button className='text-white mx-0'>Send Message</button>
    </div>
    </div>
    </form>
  )
}
