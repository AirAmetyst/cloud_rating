"use client"
import Image from "next/image";
import logo from "public/logo.png";
import Link from "next/link";
import {FormEvent, SetStateAction, useState} from "react";



import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai"

import list from "@/public/list_of_cities.json";
import schools from "@/public/list_of_school.json";


export default function RegisterStudent() {


    var error_message = ""
    const [isCityOpen, setCityIsOpen] = useState(false)
    const [isSchoolOpen, setSchoolIsOpen] = useState(false)
    const [schoolsList, setSchoolsList] = useState([""])
    const [city, setCity] = useState("Город")
    const [school, setSchool] = useState("Школа")
    const [error, setError] = useState("")
    const handleCityChange = (value:SetStateAction<string>) =>{
        setCity(value)
    }
    const handleCityToSchoolChange = (value:string[]) =>{
        setSchoolsList(value)
    }



    const handleSchoolChange = (value:SetStateAction<string>) =>{
        setSchool(value)
    }



    const submit =  async (event:FormEvent) => {
        event.preventDefault();

        const {email, password, surename, age, short,phone_number, repeated_password } = document.forms[0]
        console.log(short.value)
        if(email.value == "" || password.value == "" || surename.value == "" || age.value == "" || short.value == "" || repeated_password.value == "" || school == "Школа" || city == "Город"){
            setError("Все поля должны быть заполнены")
            console.log(error)
            return "error"

        }
        console.log(age.value)


        if(!new RegExp('^[0-9]+$').test(age.value)){
            setError("Некорректный возраст")
            console.log(error)
            return "error"
        }

        if (!new RegExp('^[0-9]+$').test(phone_number.value) || phone_number.value.length<11){
            setError("Некорректный номер телефона")
            console.log(error)
            return "error"
        }


        if(password.value.length <8){
            setError("Пароль должен быть как минимум 8 символов!")
            console.log(error)
            return "error"

        }
        if(password.value != repeated_password.value){
            setError("Пароли не совпадают!")
            console.log(error)
            return "error"

        }

        setError("")




        const reqBody = {
            "city": city,
            "dr" : 0,
            "school":school,
            "name":surename.value,
            "phone_number":phone_number.value,
            "email":email.value,
            "password":password.value,
            "profile":"123123",
            "age":age.value,
            "hobby":"science",
            "short":short.value
        }
        console.log(reqBody)
        const query = await fetch("http://192.168.0.104:5000/auth/registration",{
            method: "POST",
            credentials: "include",
            headers: {"Content-Type":"application/json",
            },

            body: JSON.stringify(reqBody)
        })
        const responce = await JSON.parse(await query.text())
        if(responce["status"] == false){
            setError(responce["success"])
            console.log(error)
        }
        console.log(responce)
    }


    return (
        <div>
            <div className = "max-w-[1920px]">
                <div className = "content flex flex-col items-center py-8" >
                    <div className="flex flex-col  py-8">
                        <Image className="w-[200px]"  src={logo} alt="logo_image"/>
                    </div>
                    <form onSubmit={submit} id="register-form">
                    <div className = "items-center md:w-[750px] h-[750px] md:h-[465px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-8 border-2  flex flex-col">
                        <h2 className="font-aqum_2 text-center text-2xl text-[#7009F4]/70">Регистрация</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12">
                            <div className="flex flex-col">
                                <button onClick={()=> setCityIsOpen((prevState) => !prevState)} type="button" className=" flex flex-row justify-between w-[250px] py-2 border-b-2 border-[#7D3ECE]/50 text-left text-[#7D3ECE]/50" >
                                    {city}
                                    {!isCityOpen?(
                                        <AiFillCaretDown/>
                                    ): (
                                        <AiFillCaretUp/>
                                    )
                                    }
                                </button>
                                {isCityOpen &&(
                                    <div className="dropDownContent w-[250px] bg-white/100 py-2 "    >
                                        {list.map((value)=>(
                                            <div onClick={()=>{handleCityChange(value.label);
                                                handleSchoolChange("Школа");
                                                setCityIsOpen((prevState) => !prevState);
                                                var index=  value.value

                                                handleCityToSchoolChange(schools[index as keyof typeof schools])

                                            }} className="py-2 px-2 " >
                                                {value.label}
                                            </div>
                                        ))

                                        }
                                    </div>
                                )}
                                <button onClick={()=> setSchoolIsOpen((prevState) => !prevState)} type="button" className=" flex flex-row justify-between w-[250px] py-2 border-b-2 border-[#7D3ECE]/50 text-left text-[#7D3ECE]/50" >
                                    {school}
                                    {!isSchoolOpen?(
                                        <AiFillCaretDown/>
                                    ): (
                                        <AiFillCaretUp/>
                                    )
                                    }
                                </button>
                                {isSchoolOpen &&(
                                    <div className="dropDownContent w-[250px] bg-white/100 py-2 "    >
                                        {schoolsList.map((value)=>(
                                            <div onClick={()=>{handleSchoolChange(value);
                                                setSchoolIsOpen((prevState) => !prevState)
                                            }} className="py-2 px-2 " >
                                                {value}
                                            </div>
                                        ))

                                        }
                                    </div>
                                )}




                                <div
                                    className="outline-none w-[250px] h-[202px] rounded-[10px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x my-4">
                                    <textarea id="short" placeholder="Расскажите о себе" className=" outline-none  resize-none break-all w-[245px] h-[198px] rounded-[10px]"/>
                                </div>
                            </div>

                            <div className="flex flex-col py-4">
                                <input  id="surename" className="outline-none  w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Ваше имя'/>
                                <input id="age" className="outline-none  my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Возраст'/>
                                <input id="email" type="email" className="outline-none w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Email'/>
                                <input id="phone_number"  className="outline-none my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Номер телефона'/>
                                <input id="password" className="outline-none w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Пароль'/>
                                <input id="repeated_password" className="outline-none my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Повторите пароль'/>
                                <div className=" w-[250px] font-aqum_2 text-[#ce6b85] text-sm ">{error}</div>
                            </div>



                        </div>
                        <div
                            className="w-[250px] col-span-2 rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x">
                            <button type="submit" onClick={submit} className="w-[246px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">Зарегистрироваться</button>
                        </div>

                        <Link href = "/TypeChooser">
                            <div
                                className="w-[250px] col-span-2 rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x my-2 ">
                                <button className="w-[246px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">Назад</button>
                            </div>
                        </Link>







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
        </div>
    )
}
