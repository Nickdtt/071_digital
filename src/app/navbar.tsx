import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <div className="relative flex items-center justify-between p-4 h-[52px] md:h-[72px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between" >
                <Image src="/logo_071.svg" alt="071 Soluções digitais" width={35} height={35} className="  md:w-[59px] md:h-[59px] " />
                <h1 className="text-[16px] md:text-[24px] md:text-nowrap font-normal text-green-800 p-3 font-istok-web"><span className="text-[#DE3EA6]" >071 </span>Soluções digitais</h1>
            </div>
            <div className="hidden lg:flex lg:space-x-4 absolute lg:left-[350px] ">
                <h2 className="text-[#4D4D4D] font-inter font-medium " >Serviços</h2>
                <h2 className="text-[#4D4D4D] font-inter font-medium" >Soluções</h2>
                <h2 className="text-[#4D4D4D] font-inter font-medium" >Orçamentos</h2>
                <h2 className="text-[#4D4D4D] font-inter font-medium" >Sobre nós</h2>
            </div>
            <div className="hidden md:flex md:justify-between md:space-x-4 md:items-center ">
                <Search className=" text-black text-[24px]" />
                <Button className="bg-[#60884E] border-[2.78px] px-[22.78px] py-[9.74px]" >Entrar</Button>
                <Button className="bg-[#316919] border-[2.78px] px-[22.78px] py-[9.74px] " >Cadastrar</Button>
            </div>
            <Menu className="text-green-800 md:hidden"/>
        </div>
    );
}