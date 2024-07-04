import React from "react";
import tech_icons from "./Tech";

export default function Skills(){
    return(
        <div className="h-full w-full bg-black/25 flex flex-col justify-center items-center pb-[200px] max-[435px]:pb-20">
            <div className="bg-[#212121] mx-[130px] p-12 max-[435px]:p-5 mt-20 max-[435px]:mt-10 max-[435px]:w-[380px] rounded-lg">
                <h1 className="league text-white text-6xl max-[435px]:text-4xl">SKILLS</h1>
                <div className="flex flex-wrap gap-5 justify-center mt-8">
                    {
                        tech_icons.map((image,index) => (
                            <div key={index} className="rounded-lg bg-[#323132] w-fit h-fit p-6 flex flex-row gap-2">
                                <img src={image.image} alt="" className="w-[40px] max-[435px]:w-[30px] h-[40px] max-[435px]:h-[30px]" />
                                <p className=" text-3xl max-[435px]:text-xl font-bold text-white">{image.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}