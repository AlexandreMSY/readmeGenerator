import React from "react";
//import trash from "../../../../public/trash.svg";
import Image from 'next/image'

const TechCard = (props) => {
  const { name, deleteBtnAction, children } = props;

  return (
    <>
      <div className="flex flex-col bg-slate-800 p-3 min-w-[20%]">
        <h1 className="text-center">{name}</h1>
        <button className="text-red-500" onClick={deleteBtnAction}>X</button>
      </div>
    </>
  );
};

export default TechCard;
