import Image from "next/image"
import group from "../public/Humankind_Assets/Humankind_Assets/images/62d769d7aeaf6503ae33a1d2_kinds-p-1600.png"

export default function Discover(){
    return(
        <div className="flex flex-col  items-center mt-36 mb-24">
            <Image className="w-[70rem]" src={group}></Image>
            <div className="flex flex-row mt-16">
                <h1 className="text-5xl f1 mx-10">Designing a universe</h1>
                <div className="flex flex-col mx-10">
                    <h2 className="w-[30rem] f3 text-2xl">We’re building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</h2>
                    <button className="transition ease-in-out duration-75 hover:-translate-y-px hover:translate-x-px hover:border-l-[3.5px] hover:border-b-[3.5px] mt-4 f1 px-5 py-4 rounded-full  self-start bg-white border-[3px] border-black">Discover the Art</button>
                </div>
            </div>
        </div>
    )
}