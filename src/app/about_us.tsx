import Image from "next/image";


export default function AboutUs() {
    return (
        <div className="bg-[#F2FBEE] w-full flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:items-center  px-[50.23px] py-[62.82px]" >
            <div className="w-full lg:w-2/3 lg:min-h-[522px]" >
                <Image src="/bro.png" alt="about_us image" width={883} height={522} />
            </div>
            <div className="w-full lg:w-1/3 lg:min-h-[381px]" >
                <h1 className="font-inter font-semibold text-[#4D4D4D] text-[44.55px] " >Sobre nós</h1>
                <h2 className="font-inter font-bold text-[14px] " >Chegamos a Salvador, Bahia, para transformar a presença digital da sua empresa. </h2>
                <br />
                <p className="font-inter text-[14px] " >
                    Somos uma startup cheia de energia, apaixonada por criar soluções inovadoras e eficazes, especialmente para pequenas empresas que desejam crescer e se destacar no mercado. 
                </p>
                <br />
                <p className="font-inter text-[14px] ">
                    Aqui, nossa missão é simples: levar sua marca para o próximo nível com design de ponta e tecnologia de alta performance. Contamos com uma designer especializada em criar experiências únicas e interfaces que encantam, e com um desenvolvedor full stack, que traz soluções completas e funcionais.
                </p>
                <br />
                <p className="font-inter text-[14px] ">
                    Seja para construir um site impressionante ou um aplicativo que seja tanto prático quanto incrível, estamos aqui para transformar suas ideias em realidade. Vamos juntos criar algo extraordinário para o seu negócio. Acredite, seu sonho digital está mais perto do que você imagina!
                </p>
            </div>

        </div>
    );
}