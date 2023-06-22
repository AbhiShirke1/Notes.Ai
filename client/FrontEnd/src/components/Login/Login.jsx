import React from 'react'
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src='https://www.pngmagic.com/product_images/green-color-background.jpg' alt="" className='absolute w-full h-full object-cover mix-blend-lighten'/>
    <div className='flex justify-center items-center h-full bg-blend-overlay'>
        <form action="" className='max-w-[400px] w-full mx-auto bg-white p-8 text-black rounded-3xl'>
            <h2 className='text-4xl text-black font-bold text-center py-8'>NoteIn.Ai</h2>
            <div className='flex justify-between mb-5'>
                <p className='border mx-auto shadow-lg hover:shadow-xl px-6 py-2 relative flex  items-center'>
                    <FcGoogle className='mr-2'/>Google
                </p>
            </div>
            <div className='flex flex-col mb-4'>
                <label >Username</label>
                <input type="text" className='border relative p-2 bg-gray-100'/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative p-2 bg-gray-100' type="password" />
            </div>
            <button className='w-full py-3 mt-5 bg-indigo-600 hover:bg-indigo-500  relative text-white' onClick={()=>navigate('/dashboard')}>Login</button>
            <p className='relative top-3 left-1/4'>New Member?<button className='w-full right-8 bottom-6 relative text-indigo-600' onClick={()=>navigate('/register')}>Sign Up</button></p>
            
        </form>
    </div>
    </div>
    
  )
}

export default Login