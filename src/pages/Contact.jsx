import React from 'react'
import FormikMessage from '../components/FormikMessage'

function Contact() {
    return (
        <main className='bg-[#0F1624] py-10 min-h-[80vh]'>
            <div className="container mx-auto 2xl:w-[1280px] px-3">
                <div className='flex justify-center'>
                    <FormikMessage />
                </div>
            </div>
        </main>
    )
}

export default Contact