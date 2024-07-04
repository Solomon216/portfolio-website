import React from "react";
import Python from "../images/skills/python.png"
import ReactIocn from "../images/skills/react.png"
import Node from "../images/skills/node.png"
import Express from "../images/skills/express.png"
import MongoDB from "../images/skills/mongodb.png"
import JavaScript from "../images/skills/javascript.png"
import Tailwind from "../images/skills/tailwind.png"
import Nextjs from "../images/skills/nextjs.svg"
import Opencv from "../images/skills/opencv.png"
import Pytorch from "../images/skills/pytorch.png"
import Tensorflow from "../images/skills/tensorflow.png"
import File from "../images/assests/icons8-file-60.png"
import Git from "../images/assests/github.png"
import Web from "../images/assests/web.png"


const projects_info=[
    {"name" : "Portfolio Website", "skills" : [ReactIocn,Tailwind],"view":[
        {"name" : [Web],"link" : "https://solomonparthi.netlify.app"},
        {"name" : [Git],"link" : "https://github.com/Solomon216/cv"}
    ]},
    {"name" : "Face Recognition","skills" : [Python,Opencv],"view":[
        {"name":Git,"link":"https://github.com/Solomon216/face-detection"}
    ]},
    {"name" : "Object Detection","skills" :[Python,Opencv,Tensorflow],"view":[
        {"name":Git,"link":"https://github.com/Solomon216/object-detection"}
    ]},
    {"name" : "Optical Character Recognition" , "skills" : [Python,Opencv],"view":[
        {"name":Git,"link":"https://github.com/Solomon216/optical-character-detection"}
    ]},
    {"name" : "Blog Website" , "skills" : [JavaScript,Node,Express,MongoDB],"view":[
        {"name" : [Web],"link" : "https://ideahorizon.onrender.com"},
        {"name" : [Git],"link" : "https://github.com/Solomon216/blog-website"}
    ]},
    {"name" : "Events Website" , "skills" : [Nextjs,Tailwind,MongoDB],"view":[
        {"name" : [Web],"link" : ["https://jap-tau.vercel.app"]},
        {"name" : [Git],"link" : ["https://github.com/Solomon216/jap"]}
    ]},
    {"name" : "Keep notes clone" , "skills" : [ReactIocn],"view":[
        {"name" : [Web],"link" : ["https://keeper-265i.onrender.com"]},
        {"name" : [Git],"link" : ["https://github.com/Solomon216/keeper-clone"]}
    ]},
    {"name" : "Diabetes Prediction App" , "skills" : [Python],"view":[
        {"name":Git,"link":"https://github.com/Solomon216/diabetes-prediction"}
    ]},
    {"name" : "Melanoma Detection" , "skills" : [Python,Opencv,Pytorch],"view":[
        {"name":Git,"link":"https://github.com/Solomon216/melanoma-detection"}
    ]}
]

export default function Projects(){
    return(
        <div className="h-full w-full bg-black/25 flex flex-col justify-center items-center pb-[60px]">
            <div className="bg-[#212121] p-12 max-[435px]:p-6 mt-5 rounded-lg mx-[60px]">
                <div>
                    <h1 className="lemon text-white text-6xl max-[435px]:text-3xl">Projects</h1>
                    <div className="flex flex-wrap gap-[30px] mt-7">
                        {
                            projects_info.map((project)=>{
                            return(
                                <div className="flex flex-row gap-3 justify-between bg-gray-200 w-[465px] max-[435px]:w-[330px] p-4 rounded-2xl hover:bg-slate-100">
                                    <div className="grid grid-cols-[max-content_1fr]">
                                        <div className="row-span-2 w-fit">
                                            <img src={File} alt="" className="h-[80px] max-[435px]:h-[40px]" />
                                        </div>
                                        <div className="flex flex-col items-center justify-center mb-3">
                                            <h1 className="mons font-bold text-black text-2xl max-[435px]:text-xl">{project.name}</h1>
                                        </div>
                                        <div className="flex justify-center items-center flex-wrap gap-4">
                                                {
                                                    project.skills.map((skill)=>{
                                                        return(
                                                            <img src={skill} alt="" className="w-10 max-[435px]:w-8" />
                                                        )
                                                    })
                                                }
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {
                                            project.view.map((view)=>{
                                                return(
                                                    <a href={view.link} className=" bg-black/20 h-fit rounded-full p-[6px]">
                                                        <img src={view.name} alt="" className="w-10 max-[435px]:w-7" />
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}