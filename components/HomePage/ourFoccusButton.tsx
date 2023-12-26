"use client"
import { OurFoucsType } from "@/types"
import { ChevronDown } from "lucide-react"
import { Literata } from "next/font/google"
import { useState } from "react"

interface OurFoucsButtonProps{
    lists:OurFoucsType[]
}

function OurFoccusButton({lists}:OurFoucsButtonProps) {
    
    const[index,setIndex] = useState<number | null>(null);

    const handleDropDown = (i: number) => {
        setIndex((prev) => (prev === i ? null : i));
      };
    
  return (
    <div className="flex flex-col w-full  ">
        {
            lists.map(list=>(
                <div key={list.id} className={`flex relative flex-col items-center border sm:border-l-black sm:border-b-black ${index===list.id && 'bg-blue-200'}` }>
                <button
                    onClick={()=>handleDropDown(list.id)} 
                    className=" p-10 flex items-center gap-8 sm:p-14 "
                >
                <ChevronDown className="ml-10"/> 
                    
                    <span className="text-xl">{list.name}</span>
                  
                </button>

                {index === list.id && (
                    <div className=" bg-blue-200 text-center text-xl p-2 ">
                        {list.description}
                    </div>
                )}
                </div>

            ))
        }

    </div>
  )
}

export default OurFoccusButton