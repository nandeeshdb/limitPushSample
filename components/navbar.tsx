import { MenuIcon } from "lucide-react"
import Link from "next/link"

function NavBar() {
  return (
    <div className="flex items-center p-10 justify-between ">
    
    <div className="flex flex-col gap-1">
    <h1 className="text-2xl font-extrabold">LIMIT PUSH</h1>
    <p className="text-xl italic">Learn. Innovate. Inspire.</p>
    </div>
    
    <div>
        <button className="flex gap-2 items-center border border-black rounded-3xl px-8 py-4">
            <MenuIcon className="w-6 h-6 text-black" />
            <span className="text-l"> Menu</span>
        </button>
    </div>

    </div>
  )
}

export default NavBar