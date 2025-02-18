import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
                <div className=" container px-4 mx-auto relative text-sm">
                    <div className='flex justify-between items-center '>
                        <div className=' flex items-center flex-shrink-0 ga '>
                            <img className=' w-10 h-10' src={logo} alt="" />
                            <span className=' text-xl font-bold tracking-tight'>QuantumAI</span>
                        </div>
                        <ul className=' hidden xl:flex ml-14  '>
                        
                            <li className=' flex ml-14 space-x-12 '>
                                <a href="">Features</a>
                                <a href="">Workflow</a>
                                <a href="">Pricing</a>
                                <a href="">Testimonials</a>
                            </li>
                        </ul>
                        <div className=' hidden xl:flex justify-center space-x-12 items-center '>
                            <a href="" className=' py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href="" className=' bg-gradient-to-t from-[#5F0F40] to-[#310E68] px-3 py-2 rounded-md'> Create an Account</a>

                        </div>
                        <div className=" xl:hidden flex flex-col justify-center">
                        
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>

                        </div>

                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul className="flex flex-col items-center gap-3">
                                <a href="">Features</a>
                                <a href="">Workflow</a>
                                <a href="">Pricing</a>
                                <a href="">Testimonials</a>

                            </ul>
                            <div className="flex space-x-6 justify-center items-center mt-4">
                                <a href="" className=' py-2 px-3 w-[100px] h-[40px] border rounded-md flex items-center justify-center'>
                                    Sign In
                                </a>
                                <a href="" className=' bg-gradient-to-t from-[#5F0F40] to-[#310E68] px-3 py-2 rounded-md w-[130px] h-[40px] flex items-center justify-center '> Create Account</a>

                            </div>
                        </div>

                    )}


                </div>

            </nav>
       
    )
}

export default Navbar




