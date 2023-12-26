

function HowItWorks() {
const items=[
  {
  id:1,
  name:"Sign up",
  descriptiopn:"Start your journey towards a better online presence by signing up a free meeting with us."
},
  {
  id:2,
  name:"Access",
  descriptiopn:"Log in and enter the platform to explore our valuable resources, tools, and content."
},
  {
  id:3,
  name:"Begin",
  descriptiopn:"Start your journey by engaging with the provided content and initiating the process."
},
  {
  id:4,
  name:"Absorb",
  descriptiopn:"Dive into the information, learnings, or experiences and absorb them for better understanding."
},
  {
  id:5,
  name:"Share",
  descriptiopn:"Spread your knowledge, insights, or experiences with others to foster collaboration."
},
  {
  id:6,
  name:"Repeat",
  descriptiopn:"Repeat the process, iterating and building upon previous learnings for continuous improvement."
},


]
  return (
    <div className="my-20 mx-20">
        <h1 className="font-semibold text-center text-4xl italic my-10">HOW IT WORKS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          

           {
            items.map(item=>(
              <div 
              key={item.id}
               className="border border-black flex flex-col gap-2 rounded-2xl ">
              <div className="flex items-center gap-4 p-4">
              <p className="border border-slate-900 bg-slate-200 py-4 px-6 text-2xl rounded-lg font-medium">{item.id}</p>
              <p className="text-xl font-semibold sm:text-2xl">{item.name}</p>
            </div>

            <div className="p-4 text-xl text-slate-500">
            {item.descriptiopn}
            </div>
            </div>

            ))
           }
         
        </div>
    </div>
  )
}

export default HowItWorks