import React from 'react'

const BookEnquiry =()=> {
  return (
    <div className='w-[100%] h-[88vh] p-[30px]'>
      <h1 className='text-[1.5rem] font-medium'>Book Enquery</h1>
      <div className='w-[50%] h-auto p-[10px] flex items-center rounded-lg bg-slate-100 my-2'>
        <div className='w-[150px] h-[150px] rounded-md bg-slate-200'>
        </div>

        <div className='h-[100%] pl-[15px]'>
            <h1 className='mt-1 text-[1.3rem] font-medium'>Residential Land,Wayand</h1>
            <p>Kollam,kottarakara</p>
            <p className='text-green-600 text-[1.2rem]'>$20-25Lacks</p>
        </div>
      </div>
      <div className='mt-2'>
        <h1>Enquery Details</h1>
          <div className='w-[100%] min-h-[88vh] p-[30px]'>
            <h1 className='text[1.5rem] font-medium'>Book Enquery</h1>
            <form action="">
                <div className='flex flex-col'>
                    <label htmlFor=''>Name</label>
                    <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Phone</label>
                    <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Email</label>
                    <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Place</label>
                    <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>Address</label>
                    <input className='w-[40%] h-[40px] bg-slate-200 rounded-lg' type='text'/>
                </div>
                <button className='w-[40%] h-[40px] mt-2 text-center bg-green-500 rounded-lg'>Edit Account</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default BookEnquiry
