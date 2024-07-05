import React from "react";

const services=["Web Development","Python Development","Machine Learning","Computer Vision","Data Analysis","UI/UX Design"]

export default function Profile(){
    return(
        <div className="h-full w-full bg-black/25 flex flex-col justify-center items-center p-9 pb-[110px]">
            <div className="w-[700px] max-[435px]:w-fit bg-black rounded-xl backdrop-blur-[100px] p-6 max-[435px]:p-3">
                <h1 className="text-white text-4xl max-[435px]:text-xl">About Me</h1>
                <p className="text-white text-lg futura mt-6 opacity-80 text-wrap">I am a versatile professional with a unique blend of skills in full-stack development, data analysis, computer vision engineering, and UI design. With a passion for crafting innovative solutions, I excel in both the technical and creative aspects of technology. Whether it's building robust web applications, extracting valuable insights from data, creating visually stunning user interfaces, or developing cutting-edge computer vision systems, I am committed to delivering excellence in every project I undertake. My diverse skill set allows me to bridge the gap between data-driven insights and user-centric design, resulting in impactful and user-friendly solutions that drive success.</p>
            </div>
            <div className="w-[700px] max-[435px]:w-[400px] bg-black rounded-xl backdrop-blur-[100px] mt-5 p-6 max-[435px]:p-3">
                <h1 className="text-white text-2xl">What I can do</h1>
                <div className="mt-4 grid grid-cols-2 max-[435px]:flex max-[435px]:flex-col max-[435px]:justify-center items-center gap-7">
                    {
                        services.map((service,index)=>{
                            return(
                                <div className="w-[300px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 p-1">
                                    <div className=" bg-neutral-800 rounded-full p-1">
                                        <h1 className="text-white">{service}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}