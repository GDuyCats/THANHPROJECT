import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const handleRegisterClick = () => {
    navigate('/register')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }
  return (
    <div className='bg-white ml-[38%] max-w-sm shadow-md rounded'>
      <div className='pl-[40%] text-2xl font-bold py-5'>Login</div>
      <div className='flex items-center border mt-5 mx-5 rounded'>
        <div className='inline-block px-2'><AccountBoxRoundedIcon /></div>
        <input
          className='inline-block w-full rounded-md border-gray-500 py-2 '
          type='text'
          placeholder='your@example.com'
        />
      </div>
      <div className='flex items-center border mt-5 mx-5 rounded'>
        <div className='inline-block px-2'><HttpsRoundedIcon /></div>
        <input
          className='inline-block w-full rounded-md border-gray-500 py-2 '
          type='password'
          placeholder='your password'
        />
      </div>
      <div className='bg-black rounded mt-16 w-64 ml-[17%] py-1 flex'>
        <span onClick={handleLoginClick} className='text-base font-medium cursor-pointer pl-[39%] text-slate-100'>Login</span>
        <div className='text-slate-100'><ArrowForwardIosRoundedIcon /></div>
      </div>
      <div className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
      <div className='text-xs text-slate-500 pl-[17%] pt-1'><p>Don't have any account ? Register new account </p></div>
      <div className='bg-black rounded mt-5 w-64 ml-[17%] py-1 flex'>
        <span onClick={handleRegisterClick} className='text-base font-medium cursor-pointer pl-[35%] text-slate-100'>Register</span>
        <div className='text-slate-100'><ArrowForwardIosRoundedIcon /></div>
      </div>
      <div className='pb-5'></div>
    </div>
  )
}
