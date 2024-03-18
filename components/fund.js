import Image from "next/image"
import jam from "../public/Humankind_Assets/Humankind_Assets/images/63e09ea82ae9b06d12ea9b91_028-band-playing-p-2000.png"

export default function Fund(){
    return(
        <div className="flex justify-center mt-24">
        <div className="flex flex-row w-[70rem] h-[36rem] p-5 border-4 rounded-2xl border-black hover:border-b-8 hover:border-l-8">
            <Image className="w-1/2 h-full" src={jam}></Image>
            <div className="px-3 flex flex-col justify-center">
                <h1 className="f1 text-3xl">Bring your ideas to life with the Humankind Fund</h1>
                <h2 className="f3 my-6 text-xl">The Humankind Fund is a community-driven platform that supports and empowers projects that align with the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact in the world.</h2>
                <div className="flex justify-start">
                <div className="flex bg-amber-400 rounded-full h-16 self-center group hover:scale-105 hover:pl-1 hover:pb-2 cursor-pointer mx-1">
            <button className="transition ease-in-out duration-150 bg-amber-400 rounded-full h-16 self-center text-black px-6 f2 text-lg group-hover:bg-[#E1FF00]">Learn More</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}