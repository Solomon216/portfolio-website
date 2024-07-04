import React, { useState } from "react";
import HomeIcon from "../images/icons/home.png";
import ProfileIcon from "../images/icons/profile.png";
import SkillsIcon from "../images/icons/skill.png";
import ProjectsIcon from "../images/icons/projects.png";
import ContactIcon from "../images/icons/contact.png";

const images = [
  { src: HomeIcon, name: 'Home' },
  { src: ProfileIcon, name: 'Profile' },
  { src: SkillsIcon, name: 'Skills' },
  { src: ProjectsIcon, name: 'Projects' },
  { src: ContactIcon, name: 'Contact' }
];

export default function Navbar({ setCurrentComponent }) {
  const [activeButton, setActiveButton] = useState('Home');

  const handleClick = (component) => {
    setCurrentComponent(component);
    setActiveButton(component);
  };

  return (
    <div className="desktop_nav fixed bottom-0 left-0 w-full py-6 flex justify-center items-center">
      <div className="flex flex-row gap-4 justify-center items-center bg-zinc-300/15 p-3 rounded-lg w-fit backdrop-blur-[100px]">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(image.name)}
            className={`p-3 rounded-xl cursor-pointer ${
              activeButton === image.name ? 'bg-gray-900' : 'bg-white hover:bg-gray-900'
            }`}
          >
            <img src={image.src} alt={image.name} className="h-8 w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
