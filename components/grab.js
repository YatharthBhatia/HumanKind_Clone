import Image from "next/image"
import lunchboxes from "../public/Humankind_Assets/Humankind_Assets/images/63765b76de5f1356947d9d23_Lunchboxes.gif"

export default function Grab(){
    return(
        <div className="flex justify-center mt-24 bg-gray-100 overflow-x-hidden">
        <div className="flex flex-row w-[65rem] h-[35rem] p-5 border-4 rounded-2xl border-black bg-white mt-28 mb-28">
            <Image className="w-1/2 h-2/3 self-center" src={lunchboxes}></Image>
            <div className="px-3 flex flex-col justify-center">
                <h1 className="f1 text-4xl">Grab your lunchbox. It will be a long journey.</h1>
                <h2 className="f3 my-6 text-xl">We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!
                <br></br>
                <br></br>
                Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.</h2>
                <div className="flex justify-start">
                <div className="flex bg-black rounded-full h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button className="transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 f2  group-hover:bg-red-600">Get one from OpenSea</button>
            </div>
            <div className="flex bg-black  rounded-full h-16 self-center pr-[4px] pl-[4px] group hover:pr-[2px] hover:scale-105 hover:pb-1  cursor-pointer mx-1">
            <button className="transition ease-in duration-75 bg-white rounded-full h-14 self-center text-black px-6 f2  group-hover:">Learn more</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
}