import { ProductType } from "@/types";
import { Separator } from "../ui/separator";
import { Dot } from "lucide-react";

interface ImageCardProps {
  product: ProductType[];
}

function ImageCard({ product }: ImageCardProps) {
  return (
    <>
      {product.map((p) => (
        <div  className="border border-black rounded-2xl">
          <div>
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-auto  rounded-2xl " />
            </div>
           
           <div className="flex gap-4 items-center my-8 mx-8">
              <p className="bg-slate-200 border border-black p-0.5 rounded-xl">DESIGN</p>
              <p className="bg-slate-200 border border-black p-0.5 rounded-xl">DEVELOPMENT</p>
           </div>
           <div className=" mb-2 mx-2 flex items-center">
            <Dot size={"80px"}/>
          <p className="text-2xl font-large">{p.name}</p>
          </div>

          
          
        </div>
      ))}
    </>
  );
}

export default ImageCard;
