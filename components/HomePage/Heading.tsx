import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Separator } from '../ui/separator'

function Heading() {
  return (
    <div className='w-50% flex  flex-col justify-center my-12 sm:w-80%'>
       <div className='text-5xl flex flex-col text-center sm:text-8xl'>
        <p>AN R&D STUDIO</p>
        <p>RUNNING TECH </p>
        <p>EXPERIMENTS</p>
        <p>TO</p>
        <p>FIX IT ALL.</p>
        
    </div>
    </div>
  )
}


export function HeadingBotton(){
return(
<>
<div className='w-50% flex  flex-col justify-center my-12 sm:w-80%'>
  <div className='text-5xl flex flex-col text-center sm:text-8xl'>
   <p>BE PART OF OUR</p>
   <p>BUILDING FEATURE</p>
   <div>
    <button className='bg-blue-200 flex gap-4 text-xl mx-auto my-4 rounded-3xl border border-black py-4 px-6'>LETS COLLABRATE
    <ArrowUpRight className='bg-white rounded-full w-8 h-8'/>
    </button>
   </div>
   
</div>
</div>
<Separator className="bg-black" />
</>
)
}

export default Heading
