import React from 'react'
import { Link } from 'react-router-dom';

function Project({ item, i }) {

    return (
        <div className='flex flex-wrap mb-8 rounded-lg overflow-hidden'>
            <div className={i % 2 === 0 ? 'w-full md:w-6/12 p-8 bg-[#374151]' : 'w-full md:w-6/12 p-8 bg-[#374151] md:order-2'}>
                <div className='overflow-hidden h-full rounded-lg'>
                    <img className='w-full h-full object-cover' src={item.img} alt="Image" />
                </div>
            </div>
            <div className='w-full md:w-6/12 bg-[#1f2937] p-8'>
                <div className='text-white'>
                    <h4 className='text-[16px] mb-4 font-normal'><span className='text-[18px] mr-1 font-medium'>Name:</span> {item.name}</h4>
                    <p className='mb-4 text-[#707d92] leading-6'>{item.desc}</p>
                    <ul className='flex flex-wrap gap-2 mb-4'>
                        {item.tools.map((item, i) => {
                            return <li key={i} className='p-2 text-[14px] rounded-[50px] bg-[#374151]'>{item}</li>
                        })}
                    </ul>
                    <div>
                        <button className='w-[120px] relative h-[40px] mt-4 md:mt-7 text-white overflow-hidden rounded-md'>
                            <Link className='duration-300 first' target='_blank' to={`${item.link}`}>Go website</Link>
                            <Link className='duration-300 second' target='_blank' to={`${item.link}`}>Go website</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project