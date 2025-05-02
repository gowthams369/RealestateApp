import React from 'react'

const Main=()=> {
  return (
    <div className='w-[100%] h-[88vh] bg-slate-200 flex flex-col justify-center px-[50px]'>
        <h1 className='text-[3rem]'>WELCOME TO THE WORLD<br/>
        of Real Estate</h1>
        <p className='w-[50%]'>At DreamNest Reality,we make home buying journey seemless and exciting. adipisicing elit. Quo ratione in error pariatur quisquam asperiores porro, quos totam deleniti suscipit, architecto autem officia unde veritatis quasi, maiores exercitationem. Nihil, quae.</p><br></br>
        <div className='flex gap-2 w-[40%]'>
          <input type="text" placeholder='Search your Property' className='h-[40px] pl-[15px] rounded-lg w-[80%] bg-white border-none outline-none' name=''id=''/>
          <button className='px-[8px] h-[45px] rounded-lg bg-green-400'>Search</button>
        </div>
    </div>
  )
}

export default Main
