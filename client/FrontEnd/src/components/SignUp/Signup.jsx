import React, { useState } from 'react'

import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",email:"",password:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})
    }

    const PostData=async (e)=>{
        e.preventDefault();

        const{ name, email, password} = user;
        const res = await fetch('/auth/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data)
        {
            window.alert("Invalid Registration");
        }
        else{
            window.alert("Registration Successful");
        }
        navigate.push('/login');
    }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img src="https://www.pngmagic.com/product_images/green-color-background.jpg" alt="" className='absolute w-full h-full object-cover mix-blend-lighten'/>
    <div className='flex justify-center items-center h-full'>
        <form method='POST' className='max-w-[400px] w-full mx-auto bg-white p-8 text-black rounded-3xl'>
            <h2 className='text-4xl text-black font-bold text-center py-8'>NoteIn.Ai</h2>
            <div className='flex justify-between mb-5'>
                <p className='border mx-auto shadow-lg hover:shadow-xl px-6 py-2 relative flex  items-center'>
                    <FcGoogle className='mr-2'/>Google
                </p>
            </div>
            <div className='flex flex-col mb-4'>
                <label >Username</label>
                <input type="text" name='name' value={user.name} onChange={handleInputs} id='name' className='border relative p-2 bg-gray-100'/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative p-2 bg-gray-100' name='email' id='email' value={user.email} onChange={handleInputs} type="email" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative p-2 bg-gray-100' type="password" name='password' id='password' value={user.password} onChange={handleInputs}/>
            </div>
            <button className='w-full py-3 mt-5 bg-indigo-600 hover:bg-indigo-500  relative text-white' onClick={PostData}>Sign In</button>
            <p className='relative top-3 left-12'>Already a Member?<button className='w-full bottom-6 relative text-indigo-600' onClick={()=>navigate('/login')}>Login</button></p>
            
        </form>
    </div>
    </div>
  )
}

export default Signup