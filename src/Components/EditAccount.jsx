import React from 'react'

const EditAccount = () => {
    return (
        <div className='w-[100%] h-[88vh] p-[30px]'>
            <h1 className='text[1.5rem] font-medium'>Edit Account</h1>
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
    )
}

export default EditAccount
