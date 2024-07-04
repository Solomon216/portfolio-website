import React from "react";

export default function Hero(){
    return(
        <div className="flex justify-center items-center flex-col mt-12 h-full w-full pb-[400px] pb-[150px] ">
            <p className="text-white text-[50px] max-[435px]:text-[30px]">Hey I'm</p>
            <p className="text-[120px] max-[435px]:text-[70px] prod h-[150] bg-gradient-to-r from-cyan-300 via-purple-400 to to-blue-300 bg-clip-text text-transparent w-fit">Solomon</p>
        </div>
    )
}