import React from 'react'

export default function Footer() {
    return (
        <footer >
            <div className='p-10'>
                <div className='flex justify-around py-5 text-center'>
                    <div className='text-center w-1/3'>
                        <h2 className='py-1'>LOCATION</h2>
                        <p className='py-1'>2215 John Daniel Drive</p>
                        <p className='py-2'>Clark, MO 65243</p>
                    </div>
                    <div className='text-center w-1/3'>
                        <h2 className='py-1'>AROUND THE WEB</h2>
                        <div className="icons py-1">
                            <i className='fa-brands fa-facebook mx-1'></i>
                            <i className='fa-brands fa-twitter mx-1'></i>
                            <i className='fa-brands fa-linkedin mx-1'></i>
                            <i className='fa-solid fa-globe mx-1'></i>
                        </div>
                    </div>
                    <div className='text-center w-1/3'>
                        <h2 className='py-1'>ABOUT FREELANCER</h2>
                        <p className='py-1'>Freelance is a free to use, licensed Bootstrap theme</p>
                        <p> created by Route</p>
                    </div>
                </div>

            </div>
            <div className='copyright my-5 p-6'>
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
