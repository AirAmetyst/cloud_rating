
import Image from "next/image";
import logo from "public/DashLogo.png"

import govservice from "public/govserv.png"
import Portfolio from "@/app/components/Portfolio";
import {cookies} from "next/headers";
import {getDimplomasById, getUserDataID} from "@/lib/Functions";

export default async function PortfolioPage() {
    const token = cookies().get("jwt").value
    const userID = cookies().get("userID").value
    const science = await getDimplomasById(userID, "Наука" ,token)
    const art = await getDimplomasById(userID, "Искусство" ,token)
    const sport = await getDimplomasById(userID, "Спорт" ,token)
    const other = await getDimplomasById(userID, "Другое" ,token)



    return (
        <Portfolio science={science} art={art} sport={sport} other={other} />
    )
}
