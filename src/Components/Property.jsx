import React from 'react'

const Property=()=> {
    let tags=["All","kollam","Kochi"]
  return (
    <div  className='w-[100%] bg-gray-100 px-[50px] min-h-[100vh] h-auto'>
      <h1 className='text-[2.1rem] font-medium'>Our Property</h1>
      <div className='flex my-2 gap-2'>
        {
          tags.map((val)=>{
            return( <div className='px-[15px] py-[7px] rounded-lg bg-slate-300'>
                {val}
                </div>)
          })   
        }
      </div>
      <div className='flex flex-wrap mt-2 gap-2 w-[100%] h-auto'>
        <div className='bg-slate-200 p-[10px] rounded-sm w-[300px]'>
            <div className='w-[100%] h-[170px] rounded-md bg-slate-100'></div>
            <h1>Residential Land,Wayand</h1>
            <p>1.5 ACRE Land WITH RESIDENTAL
                HOUSE FOR SALE LOCATION:Padichira,
                Pulapally Wayand 1.5 acre land</p>
                <p>$20 - 25 Lacks</p>
                <p className='text-green-600 text-[1.2rem]'>20-25 Lacks</p>
                <button className='w-[100%] py-[7px] bg-green-400'>Book Enquery</button>

        </div>
      </div>
    </div>
  )
}

export default Property
