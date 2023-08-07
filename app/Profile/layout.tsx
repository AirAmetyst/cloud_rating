
import React from "react";

import MenuLayout from "@/app/Profile/menus";
import {cookies} from "next/headers";
import {getSortedCityUsersList, getSortedSchoolUsersList, getUserDataID} from "@/lib/Functions";
export default async function ProfileLayout({children}) {
    const token = cookies().get("jwt").value
    const userID = cookies().get("userID").value
    const data = await getUserDataID(userID, token)

    const schoolUsersList = await getSortedSchoolUsersList(data["school"], token)
    const cityUsersList = await getSortedCityUsersList(data["city"], token)
    console.log(cityUsersList)







    return (
        <div >
            <MenuLayout children={children} data={data} schoolUsersList={schoolUsersList} cityUsersList={cityUsersList}/>
        </div>
    )
}
