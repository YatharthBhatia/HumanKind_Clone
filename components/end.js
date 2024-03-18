import Image from "next/image"
import sit from "../public/Humankind_Assets/Humankind_Assets/images/62bfedd27389251b68a114f7_maya-sitting_201.png"
import discord from "../public/Humankind_Assets/Humankind_Assets/images/62bae5cb17d544e7f6288958_discord.svg"
import twitter from "../public/Humankind_Assets/Humankind_Assets/images/62bae5cc1647601a516b845a_twitter_squared.svg"
import instagram from "../public/Humankind_Assets/Humankind_Assets/images/62d8a8b45ba814e93a968a58_icons8-instagram.svg"
import linkedin from "../public/Humankind_Assets/Humankind_Assets/images/63110e27a37cd09493dd6637_icons8-linkedin.svg"
import opensea from "../public/Humankind_Assets/Humankind_Assets/images/63765eeec1b3276b14eebe49_OpenSea.svg"
import bueno from "../public/Humankind_Assets/Humankind_Assets/images/63988f4e787e410a776a1718_Bueno-logo.svg"

export default function End(){
    return(
        <div>

        <div className="justify-evenly flex flex-row mt-52">
            <div className="flex flex-col justify-center mr-36">
            <h1 className="f1 text-6xl">humankind</h1>
            <h2 className="f3 text-2xl">stay human. be kind.</h2>
            <div className="mt-8 flex flex-row">
            <Image className="hover:opacity-40 cursor-pointer mr-5 w-8 " src={discord}></Image>
            <Image className="hover:opacity-40 cursor-pointer mr-5 w-8 " src={twitter}></Image>
            <Image className="hover:opacity-40 cursor-pointer mr-5 w-8 " src={instagram}></Image>
            <Image className="hover:opacity-40 cursor-pointer mr-5 w-8 " src={linkedin}></Image>
            <Image className="hover:opacity-40 cursor-pointer mr-5 w-8 " src={opensea}></Image>
            </div>
            <div className="flex flex-row mt-8">
            <div className="flex bg-black rounded-full h-12 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button className="transition ease-in-out duration-100 bg-black rounded-full h-10 self-center text-white px-6 f2  group-hover:bg-red-600">Burn a Lunchbox</button>
            </div>
            <div className="flex bg-black  rounded-full h-12 self-center pr-[4px] pl-[4px] group hover:pr-[2px] hover:scale-105 hover:pb-1  cursor-pointer mx-1">
            <button className="transition ease-in duration-75 bg-white rounded-full h-10 self-center text-black px-6 f2  group-hover:">Join our Discord</button>
                </div>
            </div>
            <h4 className="f3 text-sm mt-10 text-gray-600">Humankind Industries Inc. 2023</h4>
            </div>
            <Image className="w-[40rem]" src={sit}></Image>
        </div>
            <div className="mt-8 flex flex-row justify-center mb-5 ">
            <h4 className="f3 mx-1">Powered by </h4>
            <Image className="mx-1" src={bueno}></Image>
            </div>
        </div>
    )
}