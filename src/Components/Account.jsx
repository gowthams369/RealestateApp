import React from 'react'

const Account=()=> {
  return (
    <div className='w-[100%] h-[88vh] p-[30px]'>
      {/* {name,email,place,address buttons:edit,enquery} */}
      <h1 className='text-[1.5rem] font-medium'>My Account</h1>
      <div className='w-[60% p-[10px] rounded-lg mt-2 bg-slate-200'>
        <p className='text-[1.1rem]'><span className='font-medium'>Name</span> : Gowtham</p>
        <p className='text-[1.1rem]'><span className='font-medium'>Phone</span> : +91 6377829202989</p>
        <p className='text-[1.1rem]'><span className='font-medium'>Email</span> : gowtham@gmail.com</p>
        <p className='text-[1.1rem]'><span className='font-medium'>Place</span> : Kollam</p>
        <p className='text-[1.1rem]'><span className='font-medium'>Address</span> : Kochi,India</p>

      </div>
      <div className='flex gap-2'>
        <button className='px-[15px] py-[8px] text-white rounded-lg bg-green-500 mt-2'>Edit Account</button>
        <button className='px-[15px] py-[8px] text-white rounded-lg bg-blue-500 mt-2'>Enquires</button>
      </div>
    </div>
  )
}

export default Account
