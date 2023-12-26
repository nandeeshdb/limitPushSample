"use client";
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Separator } from '../ui/separator';

function ReadOurBlog() {
  const items = [
    {
      date: "JANUARY 27, 2022",
      name: "UNLOCKING THE SECRETS OF SOCIAL MEDIA",
      image: '/images/product.png'
    },
    {
      date: "JANUARY 27, 2022",
      name: "STRATEGIES TO BOOST YOUR ONLINE PRESENCE",
      image: '/images/product.png'
    },
  ];

  const gridcondition = "sm:row-span-2 "
  return (
    <>
    <div className='mx-20 my-20'>
  <h1 className='font-semibold text-4xl text-center italic mb-8'>READ OUR BLOG</h1>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className={`border border-slate-900 rounded-xl ${gridcondition} `}>
      <div className='flex flex-col items-start p-6 cursor-pointer sm:col-span-2'>
        <p className='border border-black rounded-lg bg-slate-200 p-1'>JANUARY 27, 2022</p>
        <p className='text-2xl font-medium my-8'>STRATEGIES TO BOOST YOUR ONLINE PRESENCE</p>
        <button className='text-slate-600 flex gap-2 text-xl'>
          Learn more
          <ArrowUpRight />
        </button>
      </div>
      <img
        src="/images/product.png"
        alt="no"
        className='p-0 border border-t-black rounded-lg sm:w-full'
      />
    </div>
    {
      items.map((item) => (
        <div key={item.name} className='border border-slate-900 rounded-xl flex flex-col-reverse items-start cursor-pointer gap-4 sm:grid sm:grid-cols-2 '>
            <img
            src={item.image}
            alt="no"
            className=' border border-t-black rounded-lg sm:border-t-0 sm:border-r-black sm:h-full sm:w-min'
          />


          <div className='p-6'>
            <p className='border border-black rounded-lg bg-slate-200 p-1'>{item.date}</p>
            <p className='text-2xl font-medium my-8'>{item.name}</p>
            <button className='text-slate-600 flex gap-2 text-xl'>
              Learn more
              <ArrowUpRight />
            </button>
           
          </div>
        </div>
      ))
    }
  </div>
</div>
    <Separator  className='bg-black'/>
    </>

  );
}

export default ReadOurBlog;
