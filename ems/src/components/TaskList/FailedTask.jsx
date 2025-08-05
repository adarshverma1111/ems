import React from 'react'

const FailedTask = () => {
  return (
    <div className='text-white h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20-feb-2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Build a website</h2>
            <p className='text-sm mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis esse expedita ipsa excepturi nobis!</p>
            <div className='mt-2'>
                    <button className='w-full'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask