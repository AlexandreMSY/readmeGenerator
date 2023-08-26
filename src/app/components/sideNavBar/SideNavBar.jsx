import React from "react";
import items from "./items";

const SideNavBar = (props) => {
  const { handleClick, generateButtonAction } = props;
  return (
    <>
      <div className="flex flex-col gap-3 text-md items-center m-16 mx-5 text-white bg-[#121212]">
        <div className="flex flex-col gap-3">
          {items.map((items) => (
            <button
              key={items.id}
              className="hover:bg-gray-700 px-1 border border-transparent rounded-lg "
              onClick={() => handleClick(items.changeTo)}
            >
              <h1 className="items-center">{items.text}</h1>
            </button>
          ))}
        </div>
        <button
          type="submit"
          onClick={generateButtonAction}
          className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white rounded p-2 px-4"
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default SideNavBar;
