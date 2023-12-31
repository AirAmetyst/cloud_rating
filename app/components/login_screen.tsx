"use client"
import Image from "next/image";
import logo from "public/logo.png"
import govservice from "public/govserv.png"

import {Login, getUserData, getUserDataID} from "@/lib/Functions";
import Link from "next/link";



export default function LoginForm() {


    const submit = async (event) =>  {
        event.preventDefault();


        const {email, password} = document.forms[0]
        var token = await Login(email.value,password.value)
        console.log(token)








        window.location.href = "/Profile/DashBoard"
    };











    return (

        <div className = "max-w-[1920px]">
            <div className = "content flex flex-col items-center py-8" >
                <div className="flex flex-col items-center py-8">
                    <Image className="w-[200px]"  src={logo} alt="logo_image"/>
                </div>
                <form onSubmit={submit}  id="login-form">


                    <div className = "w-[360px] h-[465px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-8 border-2 items-center flex flex-col">
                        <h2 className = "text-3xl font-aqum_2 text-[#7009F4]/50 ">Вход</h2>

                        <input id="email"  name="login"  className=" outline-none placeholder-[#7D3ECE]/50 my-4 w-[250px] border-b border-[#7D3ECE]/50 bg-white/10" placeholder="Email"/>
                        <input type="password" id="password" name="password" className="outline-none placeholder-[#7D3ECE]/50 w-[250px] border-b border-[#7D3ECE]/50 bg-white/10" placeholder= "Пароль"/>
                        <div className= "flex flex-row my-4">
                            <p className = " text-[#7D3ECE]/50 text-sm">Забыли пароль?&#160;</p>

                            <p className = "font-aqum_2 text-[#7D3ECE]/50 text-sm"> Восстановить</p>
                        </div>

                        <div
                            className="w-[149px] rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x">





                            <button  type="submit"   className="w-[145px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">

                                <Link onClick={(e)=>{submit(e)}} href="/Profile/DashBoard">Войти</Link>


                            </button>



                        </div>

                        <div className= "flex flex-col my-16 items-center justify-center" >
                            <p className = " text-[#7D3ECE]/50 text-sm">Или войти с помощью</p>
                            <Image className="w-[50px]"  src={govservice} alt="logo_image"/>

                        </div>





                    </div>
                </form>

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
