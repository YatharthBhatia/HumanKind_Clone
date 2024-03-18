import Image from "next/image"
import robot from "../public/Humankind_Assets/Humankind_Assets/images/6310a4518beef1d8f521fd6a_mechaWEBbaja.gif"

export default function Trade(){
    return(
        <div className=" bg-[url('../public/Humankind_Assets/Humankind_Assets/images/62b9d5bca5a6730b3e977966_Weapons_20Section.png')]">
            <div className="justify-center mt-40 flex flex-row mb-40">
            <div className="items-center justify-center rounded-lg flex flex-col w-[40rem] h-[22rem] bg-white">
            <h1 className="mb-5 w-[30rem] mx-10 f1 text-5xl">Art and kindness are our tools of trade</h1>
            <h2 className=" w-[30rem] text-xl f3 mx-10">Humankind is a creative force developing relatable characters and epic stories for a global audience across various formats powered by decentralization.</h2>
            <button className="transition ease-in-out duration-75 hover:-translate-y-px hover:translate-x-px hover:border-l-[3.5px] hover:border-b-[3.5px] mt-4 f1 px-5 py-4 rounded-full ml-20 self-start bg-white border-[3px] border-black"   >Learn About Us</button>
            </div>
            <Image src={robot}></Image>
            </div>
        </div>
    )
}