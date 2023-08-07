


import DashBoard from "@/app/components/DashBoard";
import {cookies} from "next/headers";
import {getUserDataID} from "@/lib/Functions";

export default async function DashBoard_Page() {

    const token = cookies().get("jwt").value
    const userID = cookies().get("userID").value
    const data = await getUserDataID(userID, token)




    return (
        <div >
            <DashBoard data={data}/>

        </div>
    )
}
