import React from "react";

const items = [
  { id: 1, text: "Details", changeTo: "details" },
  { id: 2, text: "About", changeTo: "about" },
  { id: 3, text: "Built With", changeTo: "built" },
];

const SideNavBar = (props) => {
  const { handleClick } = props;
  return (
    <>
      <div className="flex flex-col gap-3 text-md items-center mt-16 text-white">
        <div className="flex flex-col gap-3">
          {items.map((items) => (
            <button
              key={items.id}
              className="hover:border-b border-lime-400 transition-400 ease-in-out"
              onClick={() => handleClick(items.changeTo)}
            >
              <h1 className="items-center">{items.text}</h1>
            </button>
          ))}
        </div>
        <button className="border rounded bg-lime-400 p-2">Generate</button>
      </div>
    </>
  );
};

export default SideNavBar;
