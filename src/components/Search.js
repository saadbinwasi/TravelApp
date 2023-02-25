import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
       <div>
        <h2>There's a World of Trips Out There. Bring Us With You. Let's Go.</h2>
        <p className='py-4'>
        Travel can represent financial risk. No matter your destination, there’s always a chance you could face an unanticipated cancellation, interruption, mishap, or emergency.

HeyTravels offers travel insurance and travel assistance services to guide you through the unexpected and help ease your stress. We enable travelers to explore the world with confidence. 
        </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py'>
         <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
            <RiCustomerService2Fill size={50}/>
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLISIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
         <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
                <MdOutlineTravelExplore size={50}/>
                </button>
                <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLISIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
                </div>
        </div>
        
        </div>
      <div>
        <div className='border text-center'>
            <p> Get an additional 20% off</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2 cursor-pointer'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounded-md p-2' >
                    <option>Pakistan</option>
                    <option>Thailand</option>
                    <option>Tokyo</option>
                    <option>Srilanka</option>
                </select>
            </div>
            <div>
                <label className='flex flex-col my-2' >CHECK-IN</label>
                <input className='border rounded-md p-2' type="date"/>
            </div>
            <div>
                <label className='flex flex-col my-2' >CHECK-OUT</label>
                <input className='border rounded-md p-2' type="date"/>
            </div>
            <button className='w-full my-4'>RATES & AVAILABILITIES</button>
           
        </form>
        </div>
    </div>
  )
}

export default Search
