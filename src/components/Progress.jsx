import React from 'react'

function Progress({ad, level, x}) {
    return (
        <div className='my-6'>
            <div className='flex text-white font-medium items-center justify-between'>
                <p>{ad}</p>
                <p className='text-[14px]'>{level}</p>
            </div>
            <div className='block h-4 w-full overflow-hidden relative bg-[#162950] rounded-[50px]'>
                <div style={{width : `${x}%`}} className='absolute pro left-0 top-0 bottom-0 rounded-[50px]'></div>
            </div>
        </div>
    )
}

export default Progress