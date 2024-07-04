import React from "react";
import ProfileIcon from "../images/icons/profile.png";
import SkillsIcon from "../images/icons/skill.png";
import ProjectsIcon from "../images/icons/projects.png";
import ContactIcon from "../images/icons/contact.png";

const images = [
  { src: ProfileIcon, name: 'Profile' },
  { src: SkillsIcon, name: 'Skills' },
  { src: ProjectsIcon, name: 'Projects' },
  { src: ContactIcon, name: 'Contact' }
];

export default function MobileMenu({ setCurrentComponent }) {


  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="mobile_nav fixed bottom-14 left-0 w-full pb-[250px]">
      <div className="grid grid-cols-4 justify-items-center mb-3">
        {
            images.map((image, index) => {
            return (
                <div
                key={index}
                onClick={() => handleClick(image.name)}
                className={`bg-neutral-900 p-3 rounded-full w-fit`}
                >
                <img src={image.src} alt={image.name} className="h-8 w-8" />
                </div>
            );
            })
        }
      </div>
    </div>
  );
}
