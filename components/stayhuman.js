import Image from "next/image"
import bg from "../public/Humankind_Assets/Humankind_Assets/images/62e481b3e4a0474dbafb520e_home-background.png"
import gatsu1 from "../public/Humankind_Assets/Humankind_Assets/images/62bff77649a83b488feffb57_Fund.png"
import gatsu2 from "../public/Humankind_Assets/Humankind_Assets/images/62bff77773892535e8a14d13_Studios.png"

export default function Stayhuman(){
    return(
        <div className="flex flex-col bg-black h-[60rem] overflow-hidden">
            <h1 className="-mt-28 z-[25] f1 text-white text-[300px] self-center">stayhuman</h1>
            <div className="flex flex-row z-[27] justify-center">
                <div className="transition ease-in-out duration-150 hover:border-l-[9px] hover:border-b-[9px] hover:-translate-y-1 hover:translate-x-1 cursor-pointer mx-2 py-10 px-10 rounded-2xl border-black border-[6px] bg-white w-[35rem] h-[20rem] -mb-80">
                    <Image className="mb-3 w-28" src={gatsu2}></Image>
                    <h1 className="mb-3 f1 text-4xl">Humankind Studios</h1>
                    <h2 className="f3 text-xl w-[25rem]">A creative studio designing the stories, world and brand of Humankind.</h2>
                </div>
                <div className="transition ease-in-out duration-150 hover:border-l-[9px] hover:border-b-[9px] hover:-translate-y-1 hover:translate-x-1 cursor-pointer mx-2 px-10 py-10 rounded-2xl border-black border-[6px] bg-white w-[35rem] h-[20rem] -mb-80">
                    <Image className="mb-3 w-36" src={gatsu1}></Image>
                    <h1 className="mb-3 f1 text-4xl">Humankind Fund</h1>
                    <h2 className="f3 text-xl w-[25rem]">A fund that helps artists conceive their creations free of economic dependencies.</h2>
                </div>
            </div>
            <Image className="-mt-52 z-[26]" src={bg}></Image>
        </div>
    )
}