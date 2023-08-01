"use client"
import Image from "next/image";
import logo from "public/logo.png"
import { PiStudentThin } from 'react-icons/pi'
import { PiChalkboardTeacherThin } from 'react-icons/pi'
import Link from 'next/link'
import {Metadata} from "next";



export default function AccountType() {
    return (
        <div className = "max-w-[1920px]">
            <div className = "content flex flex-col items-center py-8" >
                <div className="flex flex-col items-center py-8">
                    <Image className="w-[200px]"  src={logo} alt="logo_image"/>
                </div>

                <div className = "w-[300px] sm:w-[500px] h-[100px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-4 sm:py-8 px-20 border-2 items-center justify-between flex flex-col sm:flex-row">
                    <Link href="/RegisterTeacher">
                        <button className="bg-gradient-to-t from-[#9464D7] to-[#CE6B85] border-solid border-2 rounded-[37px] px-4 font-aqum_2 text-white flex flex-row">
                            <PiStudentThin size={20} />
                            Учитель
                        </button>
                    </Link>

                    <Link href="/RegisterStudent">
                        <button className="bg-gradient-to-t from-[#9464D7] to-[#CE6B85] border-solid border-2 rounded-[37px] px-2 font-aqum_2 text-white flex flex-row">
                            <PiChalkboardTeacherThin size={20}/>
                            Обучающийся
                        </button>
                    </Link>






                </div>

            </div>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>





        </div>
    )
}
