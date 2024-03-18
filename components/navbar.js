import Image from "next/image"
import logo from "../public/Humankind_Assets/Humankind_Assets/images/62c34c43823219cb54a56164_icon.svg"
import arrowd from "../public/Humankind_Assets/Humankind_Assets/images/62c1e461b44ea9b9a18dbfae_chevron-down.svg"

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between h-14 sticky top-0 bg-white z-[100]">
            <div className="flex flex-row justify-center mx-5">
            <Image className="" src={logo}></Image>
            <h1 className="self-center mx-2 f1 text-xl cursor-pointer" >humankind</h1>
            </div>
            <div className="flex flex-row justify-center mx-5">
            <h2 className="mx-4 self-center f2 hover:opacity-40 cursor-pointer">Art</h2>
            <h2 className="mx-4 self-center f2 hover:opacity-40 cursor-pointer">Collectibles</h2>
            <h2 className="mx-4 self-center f2 hover:opacity-40 cursor-pointer">Studios</h2>
            <div className="flex group cursor-pointer">
            <h2 className="ml-4 self-center f2 ">Community</h2>
            <Image className=" ml-1 mr-2 group-hover:-scale-100" src={arrowd}></Image>
            </div>
            <h2 className="mx-4 self-center f2 hover:opacity-40 cursor-pointer">Subscribe</h2>
            <div className="flex bg-black rounded-full h-10 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer">
            <button className="transition ease-in-out duration-100 bg-black rounded-full h-8 self-center text-white px-6 f2  group-hover:bg-red-600">Burn a Lunchbox</button>
            </div>
            </div>
        </div>
    )
}