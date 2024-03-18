import Image from "next/image"
import hero1 from "../public/Humankind_Assets/Humankind_Assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.png"
import hero2 from "../public/Humankind_Assets/Humankind_Assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.png"

export default function Hero(){
    return(
        <div className="bg-white mt-20 flex flex-col">
            <div className="flex justify-center ">
            <Image className="mt-10 w-11/12" src={hero1}></Image>
            <Image className="absolute top-52 w-11/12 z-10 " src={hero2}></Image>
            </div>
            <div className="flex mt-64 justify-center items-center flex-col">
            <h1 className="f3 text-3xl">Creating a magical world for the kid in all of us.</h1>
            <div className="flex flex-row mt-10">
                <div className="flex bg-black  rounded-full h-16 self-center pr-[4px] pl-[4px] group hover:pr-[2px] hover:scale-105 hover:pb-1  cursor-pointer mx-1">
            <button className="transition ease-in duration-75 bg-white rounded-full h-14 self-center text-black px-6 f2  group-hover:">Get a Lunchbox</button>
                </div>
            <div className="flex bg-black rounded-full h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button className="transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 f2  group-hover:bg-red-600">Burn a Lunchbox</button>
            </div>
            </div>
            <h1 className="f3 mt-4 text-lg">Lunchbox burn starts Dec 13th, 2022</h1>
            </div>
        </div>
    )
}