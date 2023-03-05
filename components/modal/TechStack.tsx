import React, {useState} from "react";
import Image from 'next/image';
import GridModal from "@/components/GridModal";
import { RxDotFilled } from "react-icons/rx";


interface TechStackDataType {
    src : string
    alt : string
    desc : string[]
}

const TechStack = () => {
    const techStackData = require('/public/data/tech-stack-data.json');
    const [stackName, setStackName] = useState('Javascript');

    const onClickLogo = (name : string) => {
        setStackName(name);
    }

    return (
        <GridModal title="# Tech Stack" className="item-c bg-blue-green">
            <div className="w-full flex flex-wrap justify-center gap-20 laptop:gap-10 md:gap-2 mt-6">
                {
                    techStackData?.map((data : TechStackDataType)=>{
                        return (
                            <div key={data.alt} onClick={()=>onClickLogo(data.alt)} className="text-center cursor-pointer md:mt-4">
                                <button className="relative w-[100px] h-[100px] md:w-[50px] md:h-[50px] hover:scale-[1.02]">
                                    <Image
                                        src={data.src}
                                        alt={data.alt}
                                        fill
                                    />
                                </button>
                                <div className="mt-3 px-2 py-3 md:p-1 md:text-sm md:font-normal font-medium blue-btn rounded-[20px]">
                                    {data.alt}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="h-[60%] flex-center">
                <div className="w-[90%] h-[300px] laptop:h-[220px] md:h-[200px] mt-10 md:mt-2 md:p-2 flex-col-center border-solid-gray desc-shadow rounded-2xl">
                    {
                        techStackData?.map((data: TechStackDataType) => {
                            return (
                                stackName === data.alt &&
                                data.desc.map(el => {
                                    return (
                                        <div key={el} className="flex items-center mb-2 text-lg md:text-sm">
                                            <RxDotFilled/>
                                            {el}
                                        </div>
                                    )
                                }))
                        })
                    }
                </div>
            </div>
        </GridModal>
    )
}

export default TechStack