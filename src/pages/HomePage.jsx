import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function HomePage() {
    const navigate = useNavigate()
    const handleLoginClick = () => {
        navigate('/login')
      }
    return (
        <div>
            <div>HomePage</div>
            <div><span onClick={handleLoginClick} className='text-sm font-medium cursor-pointer'>Login</span></div>
        </div>
    )
}
