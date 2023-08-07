"use client"
import Image from "next/image";
import logo from "public/logo.png"
import govservice from "public/govserv.png"
import {ChangeEvent, FormEvent, useState} from "react";
import {Login, getUserData, updateUserData} from "@/lib/Functions";

export default function Hobbies(email:string) {
    const initialState=[]
    const hobbies = [["Наука", "0"], ["Искусство", "1"],["Спорт","2" ], ["Скульптура", "3"], ["Книги", "4"], ["Музыка", "5"], ["Танцы", "6"], ["Театр", "7"], ["Общественная_деятельность", "8"], ["Иностранные_языки", "9"], ["Математика", "10"], ["Дизайн", "11"], ["Программирование", "12"], ["Рисование", "13"], ["Психология","14"],["Мода","15"],["Предпринимательство", "16"], ["3D_моделирование","17"]]
    for(let i = 0; i<18;i++){
        initialState.push([false, hobbies[i][0], hobbies[i][1]] )

    }
    const [hobbiesState, setHobbiesState] = useState(initialState)

    const [appState, changeState] = useState({
        activeObjects:[],
        objects:[{hobby:"science"},{hobby:"art"},{hobby:"sport"}, {hobby:"sculpture"}, {hobby:"books"}, {hobby:"music"},
            {hobby:"dances"}, {hobby:"theatre"}, {hobby:"socialwork"}, {hobby:"sport"}, {hobby:"languages"}, {hobby:"math"},
            {hobby:"design"}, {hobby:"programming"}, {hobby:"drawing"}, {hobby:"psychology"}, {hobby:"fashion"}, {hobby:"buisness"}, {hobby:"3D modeling"}
        ]
    })

    function toggleChangeColor(index:number){
        if(appState.activeObjects.includes(appState.objects[index])){
            return " w-[125px] md:w-[200px] h-[50px]  border-solid border-2 rounded-[37px] " + "bg-gradient-to-t from-[#6470D7] to-[#6B81CE]"
        }else{
            return " w-[125px] md:w-[200px] h-[50px]  border-solid border-2 rounded-[37px] " + "bg-gradient-to-t from-[#9464D7] to-[#CE6B85]"
        }
    }

    function toggleActive(index:number){
        hobbiesState[index][0] = !hobbiesState[index][0]
        setHobbiesState(hobbiesState)
        console.log(hobbiesState)
        if(appState.activeObjects.includes(appState.objects[index])){

            let items = appState.activeObjects
            delete items[items.indexOf(appState.objects[index])]
            var new_state = {
                activeObjects:items,
                objects:appState.objects
            }
            changeState(new_state)
            console.log(appState)
        }
        else{
            let items = appState.activeObjects
            items.push(appState.objects[index])
            var new_state = {
                activeObjects:items,
                objects:appState.objects
            }

            changeState(new_state)
            console.log(appState)
        }

    }




    const submit = async (event: FormEvent) =>  {
        event.preventDefault();
        var chosenHobbies = ""

        for(let i=0; i < hobbiesState.length; i++ ){
            if(hobbiesState[i][0] == true){
                chosenHobbies+= hobbiesState[i][1] + " "
            }
        }
        console.log(chosenHobbies)





    };


















    return (

        <div className = "max-w-[1920px]">
            <div className = "content flex flex-col items-center py-8" >
                <div className="flex flex-col items-center py-8">
                    <Image className="w-[200px]"  src={logo} alt="logo_image"/>
                </div>
                <form onSubmit={submit} id="login-form">


                    <div className = " md:w-[700px] md:h-[700px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-8 border-2 items-center flex flex-col px-2 ">
                        <h2 className = "text-xl font-aqum_2  text-[#7009F4]/50 my-4 ">Что тебе интересно?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 font-aqum_2 gap-8 text-white text-xs md:text-base break-all">
                            {hobbies.map((value, index) => (
                                <div key={index}>


                                    <button  className={toggleChangeColor(index)} type="button" onClick={(event)=>{toggleActive(index)}}>
                                        {hobbies[index][0]}
                                    </button>
                                </div>
                            ))

                            }
                        </div>

                        <div
                            className="w-[149px] rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x my-16">
                            <button type="submit"  className="w-[145px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">Продолжить</button>
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
