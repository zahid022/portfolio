import React from 'react'
import { Link } from 'react-router-dom'
import Progress from '../components/Progress'
import data from '../data/data'
import Card from '../components/Card'
import img from '../assets/drawing.png'
import cv from "../../public/cv.pdf"

function Home() {
  const arr = data.slice(0, 4)

  const handleDownload = () => {
    const cvUrl = cv;

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <main className='bg-[#0F1624] py-5'>
      <div className="container mx-auto 2xl:w-[1280px] px-3">
        <section className='mb-4'>
          <div style={{ backgroundImage: `url(${img})` }} className="flex w-full md:items-center flex-wrap  bg-center bg-cover md:bg-contain md:h-[50vh] md:bg-right-bottom bg-no-repeat">
            <div className='w-full md:w-8/12 lg:w-6/12'>
              <h1 className='text-white text-[24px] md:text-[32px] md:mb-4 lg:text-[45px] font-semibold mb-2'>Hi, I'm Zahid</h1>
              <p className='text-white leading-7 text-[14px] md:text-[16px]'>Specialized as a Full-Stack Developer, I possess strong expertise in both frontend and backend
                technologies, including JavaScript, HTML, React, CSS, and Node.js. I am experienced in developing
                scalable, user-friendly, and functional web applications, utilizing modern technologies to provide
                innovative solutions. My focus is on delivering seamless user experiences while ensuring efficient serverside performance. I am dedicated to continuous learning and applying my problem-solving skills to build
                high-quality applications from start to finish</p>
              <div className='flex gap-3'>
                <button className='w-[150px] relative h-[40px] mt-4 md:mt-7 text-white overflow-hidden rounded-md'>
                  <Link className='duration-300 first' to={'/projects'} >See all projects</Link>
                  <Link className='duration-300 second' to={'/projects'}>See all projects</Link>
                </button>
                <button onClick={handleDownload} className='w-[150px] relative mt-4 md:mt-7 font-medium h-[40px] text-white overflow-hidden rounded-md'>
                  <span className='duration-300 first'>Download CV</span>
                  <span className='duration-300 second'>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className='text-white font-semibold text-[20px] md:text-[26px] lg:text-[32px] xl:text-[38px] text-center'>Projects</h2>
            <div className='flex flex-wrap py-5 w-full md:w-[85%] text-white lg:w-[70%] mx-auto'>
              {arr?.map((item, i) => {
                return <Card key={i} item={item} />
              })}
            </div>
          </div>
        </section>
        <section className='py-5'>
          <div>
            <h2 className='text-white font-semibold text-[20px] md:text-[26px] lg:text-[32px] xl:text-[38px] text-center'>Technologies</h2>
            <div className='w-full md:w-[90%] lg:w-[80%] mx-auto xl:w-[70%]'>
              <Progress ad={"CSS, Sass, MUI, Bootstrap, TailwindCSS, ShadcnUI"} level={"Advanced"} x={90} />
              <Progress ad={"JavaScript, TypeScript, React, Vue.js, JQuery"} level={"Advanced"} x={90} />
              <Progress ad={"Node.js, Nest.js, Express.js"} level={"Advanced"} x={90} />
              <Progress ad={"MySQL, PosgtreSQL, Sequelize, Mongoose, TypeOrm"} level={"Advanced"} x={80} />
            </div>
          </div>
          <div className='py-4'>
            <h2 className='text-white font-semibold text-[20px] md:text-[26px] lg:text-[32px] text-center'>Additional technologies and skills</h2>
            <div className='flex flex-wrap w-full md:w-[90%] gap-32 justify-center lg:w-[80%] mx-auto xl:w-[70%] py-4'>
              <ul className='text-white font-medium flex flex-col list-disc gap-3'>
                <li>Redux</li>
                <li>Git</li>
                <li>MUI</li>
              </ul>
              <ul className='text-white font-medium flex flex-col list-disc gap-3'>
                <li>Quick learning</li>
                <li>Teamwork</li>
                <li>Engagement</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home