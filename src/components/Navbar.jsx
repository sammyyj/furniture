
'use client'

import React from 'react'
import './Navbar.css'
import { useState } from 'react';

import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
// import { TbCaretDownFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";


import logo from './images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({theColorFunc, navBarcolor}) => {
    
    AOS.init();
    
    const [showSideBar, setShowSideBar] = useState(false)
    
    const handleShowSideBar = () => {
        setShowSideBar(true)
    }

    const handleHideSideBar = () => {
        setShowSideBar(false)
    }
    

  return (
    <div >
        <div className={navBarcolor === true ? 'myNavBar lightMode' : 'myNavBar darkMode'}>

            <div className='topNav'>
                <p>Welcome to our Organic store</p>

                <ul>
                    <li><IoMailUnreadOutline />groshop@gmail.com</li>
                    <li><MdOutlineLocationOn />Washington, New York City</li>
                    <li>English <TbCaretDownFilled /></li>
                    <li>$USDC <TbCaretDownFilled /></li>

                    {/* <li onClick={theColorFunc}>{navBarcolor === true ? 'Dark' : 'Light'}
                    {navBarcolor === true ? <IoMdMoon /> : <IoSunnySharp />}
                    </li> */}


                    <div onClick={theColorFunc}>
                        {
                            navBarcolor === true ?
                            <li>Dark <IoMdMoon /></li> :
                            <li>Light <IoSunnySharp /></li>
                        }
                    </div>
                    
                </ul>
            </div>

            <div className='bottomNav'>
                <Image src={logo} alt='this is logo'/>

                <div className='bottomNavRight'>
                    <ul>
                        <li>Browse Category <IoIosArrowDown /></li>
                        <li className='blogDrop2'>Home <IoIosArrowDown />
                            <div className='blogDropDown2' data-aos="fade-up" data-aos-duration="1000">
                                <Link href={'/products'}>
                                    <p>Blog Grid</p>
                                </Link>
                                
                                <p>Blog List</p>
                                <p>Blog Details</p>
                            </div>
                        </li>
                        <li>Product <IoIosArrowDown /></li>
                        <li className='blogDrop'>Blog <IoIosArrowDown />
                            <div className='blogDropDown' data-aos="fade-up" data-aos-duration="1000">
                                <p>Blog Grid</p>
                                <p>Blog List</p>
                                <p>Blog Details</p>
                            </div>
                        </li>
                        <li>Pages <IoIosArrowDown /></li>
                    </ul>

                    <div className='bottomNavIcons'>
                        <p><FiSearch /></p>
                        <p><IoPersonOutline /></p>
                        <p><RiShoppingBasketLine /></p>
                        <p><IoCallOutline /></p>
                    </div>

                    <div className='bottomNavContact'>
                        <div>
                            <p>Phone Number</p>
                            <h3>+234 08094455876</h3>
                        </div>

                        <p className='menu' onClick={handleShowSideBar}><CgMenuGridO /></p>
                    </div>
                </div>
                
                <p className='menu2' onClick={handleShowSideBar}><CgMenuGridO /></p>
            </div>
        </div>


        {showSideBar === false ? ('') : (

            <div className='sideBar'>
                <div className='closeDiv'>
                    <Image src={logo} alt='' />
                    <p onClick={handleHideSideBar}><IoMdClose /></p>
                </div>

                <div className='aboutDiv'  >
                    <h2>About Us</h2>
                    <p className='myP' data-aos="fade-up" data-aos-duration="3000">
                        Explain to you how all this 
                        mistaken denouncing pleasure 
                        and praising pain was born and 
                        we will give you a complete 
                        account of the system, and 
                        expound the actual teachings.
                    </p>
                    <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                        Mistaken denouncing pleasure and 
                        praising pain was born and we will 
                        give you complete account of the 
                        system expound.
                    </p>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <button>About Us</button>
                        <h3>Contact Info</h3>
                    </div>

                    <div className='contactDiv' data-aos="fade-up" data-aos-duration="3000">
                        <p>Chicago 12, Melborne City, USA</p>
                        <p className='contactP'>+8801682648101</p>
                        <p className='contactP'>info@example.com</p>
                    </div>

                    <div className='iconDiv' data-aos="fade-up" data-aos-duration="3000">
                        <p><FaFacebook /></p>
                        <p><FaInstagram /></p>
                        <p><FaLinkedin /></p>
                    </div>
                </div>
            </div>
        ) }


    </div>

  )
}

export default Navbar
