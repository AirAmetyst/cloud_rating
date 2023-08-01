"use client"

//import './globals.css'
import React from "react";
import Image from "next/image";
import logo from "public/DashLogo.png";
import {useSelectedLayoutSegment} from "next/navigation";


import {BiSolidDashboard, BiHelpCircle} from "react-icons/bi"
import {MdAnalytics, MdEmojiEvents} from "react-icons/md"
import {IoDocumentsSharp, IoSettingsOutline} from "react-icons/io5"
import {FaUniversity} from "react-icons/fa"
import {BsArrowBarLeft} from "react-icons/bs"
import {UNIVERSAL} from "postcss-selector-parser";
import Link from "next/link";




function classNames(...classes:string[]){
    return classes.filter(Boolean).join(' ')
}



export default function ProfileLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const segment =useSelectedLayoutSegment()
    console.log(segment)
    const addOptions = [
        {name:"Помошь", href: "/Profile/Help" , icon:BiHelpCircle, current: `/${segment}` === "/Help"},
        {name:"Настройки", href: "/Profile/Settings" , icon:IoSettingsOutline, current: `/${segment}` === "/Settings"},
        {name:"Выйти", href: "/Profile/Exit" , icon:BsArrowBarLeft, current: `/${segment}` === "/Exit"},
    ]


    const options = [
        {name:"Главная", href: "/Profile/DashBoard" , icon:BiSolidDashboard, current: `/${segment}` === "/DashBoard" },
        {name:"Мероприятия", href: "/Profile/Events" , icon:MdEmojiEvents, current: `/${segment}` === "/Events" },
        {name:"Портфолио", href: "/Profile/Portfolio" , icon:IoDocumentsSharp, current: `/${segment}` === "/Portfolio" },
        {name:"Аналитика", href: "/Profile/Analytics" , icon:MdAnalytics, current: `/${segment}` === "/Analytics" },
        {name:"Университеты", href: "/Profile/Universities" , icon:FaUniversity, current: `/${segment}` === "/Universities" },



    ]
    return (
        <div className="flex mx-auto w-full">
            <div>
                <div className= "flex flex-col w-[300px] h-[1280px] border-r-2 border-solid items-center py-8">
                    <Image className="w-[200px]"  src={logo} alt="logo_image"/>

                    <nav className="flex flex-1 flex-col">
                        <ul role='list'>
                            <li>
                                <ul role="list" className="justify-center items-center ">
                                    {options.map((option)=>(
                                        <li key={option.name} >
                                            <Link href={option.href}>
                                            <div className={classNames(option.current ? "flex flex-row w-[300px] font-aqum_2 h-[50px] px-16 py-4 border-l-8 border-solid border-[#9765D8] text-[#9765D8]"
                                                : "flex flex-row w-[300px] font-aqum_2 h-[50px] px-16 py-4   text-[#9E9E9E]" )}>
                                                <option.icon size={25}/>
                                                &#160;
                                                {option.name}

                                            </div>
                                            </Link>

                                        </li>
                                        )

                                    )}

                                </ul>
                            </li>
                        </ul>
                        <div className="flex flex-col items-center my-16">
                            <hr className="w-[200px] border-1 "/>
                        </div>
                        <ul role='list'>
                            <li>
                                <ul role="list" className="justify-center items-center ">
                                    {addOptions.map((option)=>(
                                            <li key={option.name} >
                                                <Link href={option.href}>
                                                    <div className={classNames(option.current ? "flex flex-row w-[300px] font-aqum_2 h-[50px] px-16 py-4 border-l-8 border-solid border-[#9765D8] text-[#9765D8]"
                                                        : "flex flex-row w-[300px] font-aqum_2 h-[50px] px-16 py-4   text-[#9E9E9E]" )}>
                                                        <option.icon size={25}/>
                                                        &#160;
                                                        {option.name}

                                                    </div>
                                                </Link>

                                            </li>
                                        )

                                    )}

                                </ul>
                            </li>
                        </ul>


                    </nav>


                </div>

            </div>
            <div className="w-full">
                {children}
            </div>

            <div className="w-full items-center flex flex-col py-8 ">
                <div className= "w-[450px] h-[200px] bg-gradient-to-t from-[#9765D8] to-[#9451EA] rounded-[50px] flex flex-col font-aqum_2 text-white px-8 justify-center" >
                    <div className="w-[200px] my-2">Вы ## в школьном рейтинге</div>
                    <div className="w-[200px] my-2">Вы ## в городском рейтинге</div>
                </div>
                <div
                    className="w-[450px] h-[100px] rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] my-8 py-0.5 px-0.5 shadow-2x ">

                    <div className="w-[445px] h-[96px] flex items-center font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px] ">

                       <p className="txt_shad text-4xl px-8">RATING:</p>

                    </div>


                </div>

                <div
                    className="w-[450px] h-[500px] rounded-[37px] bg-[#7D3ECE]  py-0.5 px-0.5 shadow-2x ">

                    <div className="w-[445px] h-[496px] flex  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px] ">
                        <div className="w-[450px] h-[96px] flex  font-aqum_2  justify-center  bg-white text-center rounded-[40px] ">
                            <div className="w-[440px] h-[96px]  flex flex-col justify-center font-aqum_2 text-white opacity-100 bg-[#9765D8] text-center rounded-[40px] ">
                                <div className="grid grid-cols-2 divide-x-2 divide-white">
                                    <div className="hover:text-[#CE3E3E]">Школьный</div>
                                    <div className="hover:text-[#CE3E3E]">Городской</div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    )
}
