import React from "react";

export default function Tabs({ setCurrentComponent }) {
  const tabs = [
    { name: "Home", comp: "Hero" },
    { name: "About", comp: "Profile" },
    { name: "Skills", comp: "Skills" },
    { name: "Projects", comp: "Projects" },
    { name: "Contact", comp: "Contact" }
  ];

  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="bg-white/45 rounded-xl backdrop-blur-[100px] w-fit justify-center items-center align-middle inline-flex flex-col mt-[100px] p-6">
      <div className="inline-flex flex-col gap-4">
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => handleClick(tab.comp)} className="text-2xl text-white bg-slate-700 rounded-md p-6 cursor-pointer">{tab.name}</div>
        ))}
      </div>
    </div>
  );
}
