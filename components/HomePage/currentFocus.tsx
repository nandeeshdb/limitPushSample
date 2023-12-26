import OurFoccusButton from "./ourFoccusButton";
import { Separator } from "../ui/separator";


function CurrentFocus() {
  const list = [{
    id:1,
    name:"AI / ML INNOVATIONS",
    description:"We will help you to creates visually captivating interfaces that enhance the overall user experience to ensure seamless interactions, and a delightful user journey."
  },
  {
    id:2,
    name:"E-COMMERCE",
    description:"Our team of experienced developers specializes in various programming languages and frameworks, allowing us to create customized web solutions."
  },
  {
    id:3,
    name:"SOCIAL & MARKETING",
    description:"Effectively communicate your brand message and engage your target audience through compelling and persuasive written content provided by team expert."
  }
]

  return (
    <div className="mx-20 my-20 flex-flex-col">
      <div className="italic text-4xl font-semibold flex flex-col sm:flex-row gap-2 w-full items-center justify-center">
        <p>OUR</p>
        <p>CURRENT FOCUS</p>
      </div>
      <div className="border border-black rounded-lg grid grid-cols-1 sm:grid-cols-2">
      
        <div className="sm:order-1 rounded-lg">
          <img src='/images/mouse.png' alt='no'  /> 
        </div>
        
          <Separator  className="bg-black  sm:hidden"/>
          
        <div className="sm:order-2 ">
          <OurFoccusButton lists={list}/>
        </div>
      </div>
    </div>
  );
}

export default CurrentFocus;
