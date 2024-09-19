import React from 'react'
import logo from "../assets/logo-white.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 item-center">
                <img className='mx-2 w-20' src={logo} alt="" />
            </div>
            <div className='m-8 flex  items-center justify-center gap-4 text-2xl text-white'>
                <FaLinkedin/>
                <FaGithub/>
                <FaInstagram/>
             <FaXTwitter/>

            </div>
        </nav>
    </div>
  )
}

export default Navbar
