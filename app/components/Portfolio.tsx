"use client"


import React, {useState} from "react";
import Image from "next/image";

export default function Portfolio({science, art, sport, other}) {
    const [isFilterScience, setFilterScience] = useState(true)
    const [isFilterSport, setFilterSport] = useState(true)
    const [isFilterArt, setFilterArt] = useState(true)
    const [isFilterOther, setFilterOther] = useState(true)
    function handleColorChange(buttonName){
        if(buttonName == "science"){
            if(isFilterScience){
                return "bg-[#ce6b85] rounded-l-[40px] my-1  text-white"
            }
            else{
                return "bg-white rounded-l-[40px] my-1  text-[#ce6b85]"
            }
        }
        if(buttonName == "art"){
            if(isFilterArt){
                return "bg-[#ce6b85]  my-1  text-white"
            }
            else{
                return "bg-white  my-1  text-[#ce6b85]"
            }
        }
        if(buttonName == "sport"){
            if(isFilterSport){
                return "bg-[#ce6b85]  my-1  text-white"
            }
            else{
                return "bg-white  my-1  text-[#ce6b85]"
            }
        }
        if(buttonName == "other"){
            if(isFilterOther){
                return "bg-[#ce6b85] rounded-r-[40px] my-1  text-white"
            }
            else{
                return "bg-white rounded-r-[40px] my-1  text-[#ce6b85]"
            }
        }

    }
    function handleFilterChange(buttonName){
        if(buttonName == "science"){
            setFilterScience(!isFilterScience)
        }
        if(buttonName == "art"){
            setFilterArt(!isFilterArt)
        }
        if(buttonName == "sport"){
            setFilterSport(!isFilterSport)
        }
        if(buttonName == "other"){
            setFilterOther(!isFilterOther)
        }

    }
    return (
        <div className = "max-w-[1920px] bg-white">
            <div className="flex flex-row">


                <div className= "w-[1100px] h-[1280px] flex flex-col">
                    <h1 className="font-aqum_2 text-3xl px-8 py-8">
                        Портфолио
                    </h1>
                    <div className="px-8">
                        <div className="w-[1000px] h-[1100px] bg-white border-solid border-2 rounded-[40px] font-aqum_2 flex flex-col items-center py-4 " >
                            <div className="w-[700px] h-[150px] bg-[#9765D8] divide-x-2 divide-[#9765D8] px-1 rounded-[40px] grid grid-cols-4">
                                <button onClick={()=>handleFilterChange("science")} className={handleColorChange("science")}>Наука</button>
                                <button onClick={()=>handleFilterChange("art")} className={handleColorChange("art")}>Искусство</button>
                                <button onClick={()=>handleFilterChange("sport")} className={handleColorChange("sport")}>Спорт</button>
                                <button onClick={()=>handleFilterChange("other")} className={handleColorChange("other")}>Другое</button>

                            </div>
                            <div className="w-full h-[600px] flex flex-col items-center my-4 overflow-scroll">
                                {isFilterScience && science.map((value,index)=>(
                                    <div key={index} className="grid grid-cols-2 bg-gray-100 w-[700px] my-4 text-center px-8 py-8">
                                        <Image width={130} height={130}    src={"data:image/png;base64,"+value["image"]} alt={"Uploaded image"}/>
                                        <div className="w-[100px]">
                                            {value.label}
                                        </div>

                                    </div>
                                ))}
                                {isFilterSport && sport.map((value,index)=>(
                                    <div key={index} className="grid grid-cols-2 bg-gray-100 w-[700px] my-4 text-center px-8 py-8">
                                        <Image width={130} height={130}    src={"data:image/png;base64,"+value["image"]} alt={"Uploaded image"}/>
                                        <div className="w-[100px]">
                                            {value.label}
                                        </div>

                                    </div>
                                ))}
                                {isFilterArt && art.map((value,index)=>(
                                    <div key={index} className="grid grid-cols-2 bg-gray-100 w-[700px] my-4 text-center px-8 py-8">
                                        <Image width={130} height={130}    src={"data:image/png;base64,"+value["image"]} alt={"Uploaded image"}/>
                                        <div className="w-[100px]">
                                            {value.label}
                                        </div>

                                    </div>
                                ))}
                                {isFilterOther && other.map((value,index)=>(
                                    <div key={index} className="grid grid-cols-2 bg-gray-100 w-[700px] my-4 text-center px-8 py-8">
                                        <Image width={130} height={130}    src={"data:image/png;base64,"+value["image"]} alt={"Uploaded image"}/>
                                        <div className="w-[100px]">
                                            {value.label}
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <button  className="text-white my-8 w-[450px] h-[50px] bg-gradient-to-t from-[#9765D8] items-center px-8 to-[#9451EA] rounded-[50px]">Добавить достижение</button>
                            <button  className="text-white w-[450px] h-[50px] bg-gradient-to-t from-[#9765D8] items-center px-8 to-[#9451EA] rounded-[50px]">Скачать в PDF</button>

                        </div>
                    </div>

                </div>
                <div className= " h-[1280px] border-l-2 border-solid ">    </div>
            </div>








        </div>
    )
}
