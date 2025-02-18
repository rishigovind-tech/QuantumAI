import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
    return (
        <div className=' mt-20 tracking-wide'>
            <h2 className=' text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>Why They Love Us</h2>
            <div className=' flex flex-wrap justify-center'>
                {testimonials.map((testimonials, index) =>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                            <p className='text-neutral-600'>{testimonials.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img className='w-12 h-12 mr-6 rounded-full border border-neutral-200' src={testimonials.image} alt="" />

                            </div>
                            <h6 className='text-neutral-500'>{testimonials.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{testimonials.company}</span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials