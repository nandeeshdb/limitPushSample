import ImageCard from "./imageCard"

function FeaturedProducts() {
  const products =[
    {
      name:"GABLOX WEBSITE DESIGN",
      image:"/images/product.png"
    },
    {
      name:"DRIVEN NETWORK APP",
      image:"/images/product.png"
    },
    {
      name:"MONTIVE DASHBOARD",
      image:"/images/product.png"
    },
    {
      name:"SOUTHEAST WEBSITE",
      image:"/images/product.png"
    },
    {
      name:"GABLOX WEBSITE DESIGN",
      image:"/images/product.png"
    },
    {
    name:"DRIVEN NETWORK APP",
    image:"/images/product.png"
  },
  ] 
  return (
    <div className="mx-20 my-20">
      <div className=" italic text-4xl font-semibold flex flex-col sm:flex-row gap-2 w-full items-center justify-center">
        <p>Featured</p>
        <p>Proucts</p>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 sm:mt-16">
       <ImageCard product={products} />
  </div>
      
    </div>
  )
}

export default FeaturedProducts