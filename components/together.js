import Image from "next/image"
import tree from "../public/Humankind_Assets/Humankind_Assets/images/62d76a66cddf7a1a50d2a8b9_teamwork-p-1080.png"

export default function Together(){
    return(
        <div className="flex flex-row mb-10">
            <Image className="w-[70rem]" src={tree}></Image>
            <div className="mx-10 flex flex-col justify-end">
            <h1 className="mb-5 f1 text-4xl">Building together</h1>
            <h2 className="f3 text-2xl w-[16rem]">Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</h2>
            <button className="mb-16 transition ease-in-out duration-75 hover:-translate-y-px hover:translate-x-px hover:border-l-[3.5px] hover:border-b-[3.5px] mt-4 f1 px-5 py-4 rounded-full  self-start bg-white border-[3px] border-black">Explore Careers</button>
            </div>
        </div>
    )
}