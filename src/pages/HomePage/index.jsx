import React, { useState } from 'react'
import './styles.css'

function HomePage() {
  const [openCBD, setOpenCBD] = useState(false)
  return (
    <>
      <div className='bg-homepage relative h-full'>
        <div className='score-bar absolute left-[50%] top-[25px] translate-x-[-50%]'></div>
        <div
          onClick={() => {
            setOpenCBD(true)
          }}
          className='cbd-btn absolute left-[50%] top-[50%] translate-x-[-50%] cursor-pointer bg-transparent p-8 px-32'
        ></div>
      </div>

      <div className={`${openCBD ? 'block' : 'hidden'} fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-40`}>
        <div className='flex h-full items-center justify-center'>
          <div className='popup-cbd relative h-[400px] w-[910px]'>
            <div className='overlay-blur'></div>
            <div
              onClick={() => {
                setOpenCBD(false)
              }}
              className='top absolute right-[80px] top-[28px] cursor-pointer bg-transparent p-4'
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
