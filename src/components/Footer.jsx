import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../assets/logo.png"

function Footer() {
  return (
    <footer className='bg-[#0F1624] py-5'>
      <div className="container mx-auto 2xl:w-[1280px] px-3">
        <div className='flex gap-3 md:gap-0  flex-col md:flex-row md:items-center md:justify-between'>
          <div className="hidden md:block">
            <Link className='flex items-center gap-2' to={'/'}>
              <img className='w-5 md:w-10 h-5 md:h-10' src={img} alt="image" />
            </Link>
          </div>
          <div className="flex gap-3 md:gap-0 flex-col md:flex-row md:items-center">
            <p className='text-white mr-8 flex items-center'>
              <FaPhone className="mr-3" />
              <span className="mr-2">Call me:</span>
              +994-77-270-08-18
            </p>
            <p className='text-white flex items-center'>
              <MdEmail className="mr-3" />
              <span className="mr-2">Email:</span>
              zahid.hzade001@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer