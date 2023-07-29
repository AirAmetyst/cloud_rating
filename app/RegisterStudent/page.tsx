import Image from "next/image";
import logo from "public/logo.png";


export default function RegisterStudent() {
    return (
        <div>
            <div className = "max-w-[1920px]">
                <div className = "content flex flex-col items-center py-8" >
                    <div className="flex flex-col  py-8">
                        <Image className="w-[200px]"  src={logo} alt="logo_image"/>
                    </div>

                    <div className = "items-center w-[750px] h-[465px] bg-white/70  rounded-[37px] border-solid border-[#7D3ECE] py-8 border-2  flex flex-col">
                        <h2 className="font-aqum_2 text-center text-2xl text-[#7009F4]/70">Регистрация</h2>
                        <div className="grid grid-cols-2 gap-8 px-12">
                            <div className="flex flex-col">
                                <input className="outline-none w-[250px] placeholder-[#7D3ECE]/50 my-4 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Город'/>
                                <input className="w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Школа'/>
                                <div
                                    className="outline-none w-[250px] h-[202px] rounded-[10px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x my-4">
                                    <textarea placeholder="Расскажите о себе" className=" outline-none  resize-none break-all w-[245px] h-[200px] rounded-[10px]"/>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <input className="outline-none my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Ваше имя'/>
                                <input className="outline-none w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Возраст'/>
                                <input className="outline-none my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Email'/>
                                <input className="outline-none w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Пароль'/>
                                <input className="outline-none my-4 w-[250px] placeholder-[#7D3ECE]/50 border-b border-[#7D3ECE]/50 bg-white/5" placeholder='Повторите пароль'/>

                            </div>



                        </div>
                        <div
                            className="w-[250px] col-span-2 rounded-[37px] bg-gradient-to-b from-[#A93ECE] to-[#CE3E3E] py-0.5 px-0.5 shadow-2x">
                            <button className="w-[246px]  font-aqum_2 text-[#7D3ECE] opacity-100 bg-[#FFFFFF] text-center rounded-[37px]">Зарегистрироваться</button>
                        </div>







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
        </div>
    )
}
