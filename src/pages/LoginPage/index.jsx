import React from 'react'
import './styles.css'

const colorSet = {
  'title-1': '#FFFFFF',
  'title-2': '#FFD518',
  label: '#FFF5B1',
  'border-input': '#FFFCE6',
  'bg-input': 'transparent',
  'text-input': '#FFFFFF',
  'text-contact': '#DD321F'
}

function LoginPage() {
  return (
    <div className='bg-login relative h-full'>
      <div className='bg-login-form absolute right-[168px] top-[50%] z-10 h-[546px] w-[442px] translate-y-[-50%] rounded-2xl bg-transparent px-[40px] py-[58px]'>
        <div className='flex w-full flex-col justify-between gap-y-[32px]'>
          <div className='title-login'>
            <div className='w-[320px]'>
              <h2 className='font-gotham mb-2 text-[28px] font-bold text-white'>Sales Brief 2025 </h2>
              <p className='font-transformer text-5xl leading-[1.2] text-[#FFD518]'>Login into your account</p>
            </div>
          </div>
          <div className='login-fields'>
            <div className='fields-contol space-y-3'>
              <div>
                <label className='font-gotham mb-2 block text-base text-[#FFF5B1]' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  type='text'
                  className='font-gotham w-full rounded-xl border border-white bg-white bg-opacity-10 p-3 text-[14px] text-white placeholder-white outline-none'
                  placeholder='name@mail.com'
                />
              </div>

              <div>
                <label className='font-gotham mb-2 block text-base text-[#FFF5B1]' htmlFor='email'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='font-gotham w-full rounded-xl border border-white bg-white bg-opacity-10 p-3 text-[14px] text-white placeholder-white outline-none'
                  placeholder='your password'
                />
              </div>
            </div>

            <div className='actions mt-5'>
              <div className='flex items-center justify-between'>
                <p className='font-inter text-[12px] text-[#DD321F]'>
                  Forgot password? <span className='cursor-pointer font-bold'>Contact admin.</span>
                </p>

                <button className='font-gotham rounded-md border border-[#FFF5B1] bg-gradient-to-b from-[#FFD518] to-[#FF8E00] px-[24px] pb-[10px] pt-[6px] text-[14px] text-[#7A1C11]'>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
