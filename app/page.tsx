import {Metadata} from "next";
import Image from "next/image";
import logo from "public/logo.png";
import Link from "next/link";


export const metadata: Metadata = {
    title: 'RATING.',
    description: 'Your digital portfolio',
}
export default function Home() {
  return (
      <div className = "max-w-[1920px]">
          <div className = "content flex flex-col items-center py-8" >
              <div className="flex flex-col items-center py-8">
                  <Image className="w-[200px]"  src={logo} alt="logo_image"/>
              </div>

              <div className = "w-[360px] h-[250px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-8 border-2 items-center flex flex-col">
                  <h2 className = "text-3xl font-aqum_2 text-[#7009F4] ">RATING</h2>


                  <Link href="/LoginPage">
                      <div
                          className="w-[149px] rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x my-8 ">
                          <button className="w-[145px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">Войти</button>
                      </div>
                  </Link>

                  <Link href="TypeChooser">
                      <div
                          className="w-[250px] rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x ">
                          <button className="w-[246px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px] ">Зарегистрироваться</button>
                      </div>
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
