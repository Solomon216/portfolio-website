import React from "react";
import Git from "../images/assests/github.png"
import mail from "../images/assests/gmail.png"
import download from "../images/assests/download (2).png"
import linkedin from "../images/assests/linkedin.png"

const icons = [
    {"name":"Github","image":Git,"url":"https://github.com/Solomon216"},
    {"name":"Linkedin","image":linkedin,"url":"https://www.linkedin.com/in/solomon-p-413a14227/"}
]

const mailid="solomonfrankli600@gmail.com"

export default function Contact(){
    return(
        <div className="pb-[250px]">
            <div className=" bg-black/75 rounded-xl backdrop-blur-[100px] w-fit justify-center items-center align-middle inline-flex flex-col mt-[100px] p-6 ">
                <h1 className="text-2xl font-bold text-white">Contact Me</h1>
                <div className="inline-flex flex-col gap-4 mt-7">
                    <a href="/public/resume/Solomon_Resume.pdf" className="rounded-lg flex gap-3 bg-gray-700 w-[200px] justify-center items-center p-4" download>
                        <img src={download} alt="" className="h-7" />
                        <h1 className="text-white text-xl">Download CV</h1>
                    </a>
                    <a href={`mailto:${mailid}`} className="rounded-lg flex gap-3 bg-gray-700 w-[200px] justify-center items-center p-4">
                        <img src={mail} alt="" className="h-7" />
                        <h1 className="text-white text-xl">E-mail</h1>
                    </a>
                    {
                        icons.map((icon)=>{
                            return(
                                <a href={icon.url} className="rounded-lg flex gap-3 bg-gray-700 w-[200px] justify-center items-center p-4">
                                    <img src={icon.image} alt="" className="w-10" />
                                    <h1 className="text-white ">{icon.name}</h1>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}