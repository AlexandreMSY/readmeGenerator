import React from "react";
import items from "./items";

const SideNavBar = (props) => {
  const { handleClick, generateButtonAction } = props;
  return (
    <>
      <div className="flex flex-col gap-3 text-md items-center mt-16 text-white">
        <div className="flex flex-col gap-3">
          {items.map((items) => (
            <button
              key={items.id}
              onClick={() => handleClick(items.changeTo)}
            >
              <h1 className="items-center">{items.text}</h1>
            </button>
          ))}
        </div>
        <button onClick={generateButtonAction} className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white rounded bg-lime-500 p-2 px-4">Generate</button>
      </div>
    </>
  );
};

export default SideNavBar;
