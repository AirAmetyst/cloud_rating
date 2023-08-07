"use client"

import {useSearchParams} from "next/navigation";

export default function DashBoard({data}) {


    return (
        <div className = "max-w-[1920px] bg-white">
            <div className="flex flex-row">


                <div className= "w-[1100px] h-[1280px] ">
                    <h1 className="font-aqum_2 text-3xl px-8 py-8">
                        {"Добрый день, " + data["name"]}
                    </h1>
                </div>
                <div className= " h-[1280px] border-l-2 border-solid ">    </div>
            </div>








        </div>
    )
}
