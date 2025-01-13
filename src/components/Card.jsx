import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item }) {
    return (
        <div className='w-full mb-4 px-3 md:w-6/12'>
            <div style={{ borderRadius: '50px 20px 70px 10px' }} className='duration-300 hover:scale-[1.05] shadow-md shadow-[#8F61D6] p-5'>
                <div className='rounded-lg overflow-hidden'>
                    <img src={item.img} alt="Image" />
                </div>
                <div className='pt-3 pb-2'>
                    <div className='flex justify-center mb-3'>
                        <h3 className='text-center font-medium inline-block pb-1 border-b rounded-md border-[#8f61d6]'>{item.name}</h3>
                    </div>
                    <p className='text-[14px] flex flex-wrap items-center font-medium mb-4'>
                        <span className='pr-1'>Tools: </span> {item.tools.map((item, i) => {
                        return <span className='mr-1 text-[14px] font-normal' key={i}>{item},</span>
                        })}
                    </p>
                    <div className='flex justify-center'>
                        <button className='w-[150px] relative h-[40px] overflow-hidden rounded-md'>
                            <Link className='duration-300 first' target='_blank' to={`${item.link}`}>Go Website</Link>
                            <Link className='duration-300 second' target='_blank' to={`${item.link}`}>Go Website</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card