import Image from "next/image"
import run from "../public/Humankind_Assets/Humankind_Assets/images/63769a6d9860171f31131050_Maya_20and_20Dallas_20Running.png"

export default function Danger(){
    return(
        <div className="flex justify-center mt-28 flex-col">
        <Image className="w-[50rem] self-center" src={run}></Image>
        <div className="flex flex-row mt-8 justify-center" >
            <div className="w-[30rem] ">
        <h1 className="f1 text-4xl">The land of Kinds is in danger!</h1>
            </div>
            <div className="flex flex-col  w-[40rem] ">
                <h1 className="f3 text-3xl">Chiquito Village has been attacked by the giant Mechas. Maya and Dallas need you to join the adventure.</h1>
                <div className="flex w-40 bg-black  rounded-full h-16  justify-center group hover:pl-[2px] hover:scale-105 hover:pb-1  cursor-pointer mt-10">
            <button className="bg-white rounded-full h-14 self-center text-black px-[24px] f1  group-hover:">Go help them!</button>
                </div>
            </div>
        </div>
        </div>
    )
}