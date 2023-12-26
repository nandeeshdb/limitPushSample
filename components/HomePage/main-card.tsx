import SocialMedia from "../SocialMedia"

function MainCard() {
  return (
    <div className="mx-20 my-20 ">
    <div className="w-full h-300px border border-black rounded-2xl sm:grid grid-flow-col sm:items-center ">
        <div>
            <img
            src="/images/MainFeature.png"
            alt="no"
            className="p-12 sm:p-10 rounded-full "
            />
        </div>

        <div>
        <div className="ml-20 sm:ml-80">
        <SocialMedia />
        </div>
        <div className="flex flex-col p-6">
            <div className="">
            <h1 className="text-2xl font-semibold">TRANSFORMING IDEAS INTO PRODUCTS OF FUTURE.</h1>
            <p className="text-xl text-slate-700">We are committed to pushing boundaries, embracing innovation to build future and create new jobs. We strive to create impactful digital experiences that empower businesses to thrive in the ever-evolving online landscape.</p>
            </div>
        </div>
        </div>
        
       
        
    </div>
    </div>
  )
}

export default MainCard