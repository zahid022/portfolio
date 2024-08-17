import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/logo.png"
import cv from "../../public/cv.pdf"

function Header() {
    const handleDownload = () => {
        const cvUrl = cv;

        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "CV.pdf";
        link.click();
    };
    return (
        <header className='bg-[#0F1624] py-5 sticky top-0 z-[900]'>
            <div className="container mx-auto 2xl:w-[1280px] px-3">
                <nav className='flex justify-between items-center'>
                    <Link className='flex items-center gap-2' to={'/'}>
                        <img className='w-5 md:w-10 h-5 md:h-10' src={img} alt="image" />
                        <p className='text-white'>Portfolio</p>
                    </Link>
                    <div>
                        <ul className='flex items-center gap-5 text-white'>
                            <li>
                                <Link target='_blank' to={'https://github.com/zahid022'}>
                                    <FaGithub className='text-[20px]' />
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' to={'https://www.linkedin.com/in/zahid-hesenzade/'}>
                                    <FaLinkedin className='text-[20px]' />
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleDownload} className='w-[130px] relative text-[14px] font-medium h-[35px] text-white overflow-hidden rounded-md'>
                                    <span className='duration-300 first'>Download CV</span>
                                    <span className='duration-300 second'>Download CV</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header