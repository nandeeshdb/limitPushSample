import { Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, TwitchIcon, TwitterIcon } from "lucide-react"

function SocialMedia() {
  return (
    <div className="flex gap-8">
        <div className="w-10 h-10 bg-black rounded-full flex  items-center justify-center">
        <FacebookIcon  className="text-sm text-white"/>
        </div>
        <div className="w-10 h-10  bg-black rounded-full flex  items-center justify-center">
        <LinkedinIcon  className="text-sm text-white"/>
        </div>
        <div className="w-10 h-10  bg-black rounded-full flex  items-center justify-center">
        <TwitterIcon  className="text-sm text-white"/>
        </div>
        <div className="w-10 h-10  bg-black rounded-full flex  items-center justify-center">
        <InstagramIcon  className="text-sm text-white"/>
        </div>
    </div>
  )
}

export default SocialMedia