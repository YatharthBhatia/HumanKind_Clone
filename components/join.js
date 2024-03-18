import Image from "next/image"
import girlboss from "../public/Humankind_Assets/Humankind_Assets/images/62bfedd174a366f04445ae7a_your-back_201.png"

export default function Join(){
    return(

        <div className="items-center justify-center flex flex-col mt-28 mb-28">
        <Image className="mb-5 w-[36rem]" src={girlboss}></Image>
        <h1 className="f1 text-4xl mb-5">Join our adventure</h1>
        <h2 className="mb-5 text-center w-[45rem] f3 text-2xl">Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We’re looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.</h2>
        <div className="flex bg-black rounded-full h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button className="transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 f2  group-hover:bg-red-600">Join our Discord</button>
            </div>
    </div>
        )
}