
function Testimonial() {
    
  return (
    <div className="my-10 mx-20">
        <div className="border border-black p-8 rounded-xl">
            <h1 className="font-semibold text-4xl  text-center italic my-4">OUR TESTIMONIAL</h1>
                <div className="flex flex-col gap-8 relative  justify-center mt-10 sm:flex-row sm:gap-20">
               <div>
               <img 
                src ="/images/men.png"
                alt="no"
                className="h-60 w-52 rounded-lg border border-black ml-12  sm:w-[500px] sm:h-96"
                />
                    
                </div>  

                <div className="flex flex-col gap-10 sm:mt-5 ">
                
                <p className="text-xl  text-slate-900 text-left sm:text-2xl">"Team @ LimitPush is pushing hard to build next generation and profitable businesses. Their team's problem-solving skills and attention to detail are remarkable. Waiting for their public announcements."</p>
                <div className="flex flex-col gap-2 text-left">
                    <span className="text-xl font-bold">Lorenzo Santos</span>
                    <span className="text-xl text-slate-600">Product Manager, Flash</span>
                </div>

                <p className="flex  gap-2 text-left">
                    <span className="text-5xl font-bold text-slate-800">250%</span>
                    <span className="text-xl text-slate-800">Increase in revenue</span>
                </p>
                </div>
                </div> 
                        
        </div>

    </div>
  )
}

export default Testimonial