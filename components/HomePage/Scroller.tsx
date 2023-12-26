"use client"
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "ECOMMERCE",
  'ARTIFICIAL INTELLIGENCE',
  'UI/UX INNOVATIONS',
  'MEDIA & MARKETING',
  'SOCIAL',
  'GENERATIVE',
  'EDUCATION',
  'STARTUPS',
  'AI',
  'MACHINE LEARNING'
];

const InfiniteHorizontalScroll = () => {
  return (
    <div className='bg-indigo-500 w-full rounded-md'>
      <motion.div
        className='overflow-x-hidden whitespace-no-wrap p-2 flex'
        style={{ width: '100%' }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {items.map((item, index) => (
          <motion.p
            key={index}
            className='mr-4 border border-slate-800 text-slate-800  px-8 rounded-lg flex items-center'>
            {item}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
