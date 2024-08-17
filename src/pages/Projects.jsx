import React from 'react'
import data from '../data/data'
import Project from '../components/Project';

function Projects() {
  const arr = data
  
  return (
    <main className='bg-[#0F1624] py-10'>
      <div className="container mx-auto 2xl:w-[1280px] px-3">
        <div>
          <div className='flex justify-center'>
            <h2 className='text-white font-semibold text-[20px] md:text-[26px] lg:text-[32px]'>Some of the noteworthy projects I have built</h2>
          </div>
          <div className='py-5'>
            {arr?.map((item, i) => {
              return <Project key={i} i={i} item={item} /> 
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects