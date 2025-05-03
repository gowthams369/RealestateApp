import React, { useState } from 'react'

const Login=() =>{
  let [email,setEmail]=useState();
  let [password,setPassword]=useState();

  function handleLogin(e){
    e.preventDefault();
    alert("Login sucessfull")

  }
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-slate-200'>
        <div className='w-[30%] h-[80vh] rounded-lg bg-white p-[10px] flex flex-col justify-center'>
            <h1 className='text-[2rem] font-medium'>LogiIn</h1>
            <p className='text-[#646464]'>Login to your account</p>
            <form className='w-[100%] my-2' action="">
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[100%] mb-2 h-[40px] border-[#c4c4c4] border-[2px] rounded-xl border-solid pl-[15px]'placeholder='Enter your Email' type='text'/>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} className='w-[100%] mb-2 h-[40px] border-[#c4c4c4] border-[2px] rounded-xl border-solid pl-[15px]'placeholder='Enter your Email' type='text'/>
                <button className='w-[100%] py-[8px] rounded-lg bg-green-400'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
