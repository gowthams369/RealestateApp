import React from 'react'

const Login=() =>{
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center bg-slate-200'>
        <div className='w-[30%] h-[80vh] rounded-lg bg-white p-[10px] flex flex-col justify-center'>
            <h1 className='text-[2rem] font-medium'>Sign Up</h1>
            <p className=''>Lorem ipsum dolor amet consecuter</p>
            <form className='w-[100%]' action="">
                <input className='w-[100%] h-[40px] border-[#c4c4c4] border-[2px] rounded-xl border-solid pl-[15px]'placeholder='Enter your Name' type='text'/>

                <input type='text'/>
                <input type='email'/>
                <input type='password'/>
            </form>
        </div>
    </div>
  )
}

export default Login
