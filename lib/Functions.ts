


export  async function  Login(email:string, password:string) {
    const reqBody ={
        email:email,
        password:password

    }
    const query = await fetch("http://localhost:5000/auth/login",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
        },

        body: JSON.stringify(reqBody)
    })




    return await JSON.parse(await query.text())

}

export async function Register(
    city:string,
    school:string,
    name:string,
    password:string,
    email:string,
    hobby:string,
    short:string,
    phone_number:string,
    dr:number,
    profile:string,
    age:string,


){
    const reqBody = {
        "city": city,
        "dr" : dr,
        "school":school,
        "name":name,
        "phone_number":phone_number,
        "email":email,
        "password":password,
        "profile":profile,
        "age":age,
        "hobby":hobby,
        "short":short


    }


    const query = await fetch("http://192.168.0.104:5000/auth/registration",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
        },

        body: JSON.stringify(reqBody)
    })

    return await JSON.parse(await query.text())
}

export async function  getUserData(email:string, token:string) {
    const reqBody ={
        email:email,


    }
    const data = await fetch("http://192.168.0.104:5000/data/userdata",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })


    const responce = await JSON.parse(await data.text())
    return responce

}

export async function  getUserDataID(id:string, token:string) {
    const reqBody ={
        id:id,


    }
    const data = await fetch("http://192.168.0.104:5000/data/userdataID",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })


    const responce = await JSON.parse(await data.text())
    return responce

}

export async function updateUserData(email:string, field:string, newdata:string, token:string){
    const reqBody ={
        email:email,
        field:field,
        newdata:newdata


    }
    const result = await fetch("http://192.168.0.104:5000/data/updateUserData",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })
    console.log(result)

}


export async function getSortedSchoolUsersList(school , token){
    const reqBody ={
        school:school


    }
    const result = await fetch("http://localhost:5000/data/usersBySchool",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })



    const responce = await JSON.parse(await result.text())
    return responce


}

export async function getSortedCityUsersList(city , token){
    const reqBody ={
        city:city


    }
    const result = await fetch("http://localhost:5000/data/usersByCity",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })



    const responce = await JSON.parse(await result.text())
    return responce


}

export async function getDimplomasById(id, field, token){
    const reqBody ={
        id:id,
        field:field


    }
    const result = await fetch("http://localhost:5000/portfolio/getDiplomasID",{
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json",
            "authorization": `Bearer ${token}`,
        },

        body: JSON.stringify(reqBody)
    })



    const responce = await JSON.parse(await result.text())
    return responce


}




