import React from "react";

const PrerequisiteCard = (props) => {
  const { name, code } = props;
  return (
    <>
      <div className="flex flex-col gap-2 bg-[#131921] p-3 w-full break-words">
        <h1 className="text-lg">{name}</h1>
        <span className="bg-slate-700 p-3 font-mono h-max">{code}</span>
      </div>
    </>
  );
};

export default PrerequisiteCard;
