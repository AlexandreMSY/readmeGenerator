import React from "react";
import forwardArrow from "../../../../public/forwardArrow.svg";
import items from "../sideNavBar/items";

const MobileNavBar = (props) => {
  const {
    nextButtonAction,
    prevButtonAction,
    generateButtonAction,
    currentComponentId,
  } = props;
  return (
    <>
      <div className="flex flex-row justify-between mx-3 mt-2 text-teal-500 lg:hidden">
        <button
          className="border border-teal-500 px-3 rounded-full bg-teal-950"
          onClick={prevButtonAction}
        >
          <p>Prev</p>
        </button>
        {currentComponentId == items.length - 1 ? (
          <button
            onClick={generateButtonAction}
            className="border border-teal-500 px-3 rounded-full bg-teal-950"
          >
            <p>Generate</p>
          </button>
        ) : (
          <button
            onClick={nextButtonAction}
            className="border border-teal-500 px-3 rounded-full bg-teal-950"
          >
            <p className="flex flex-row">Next</p>
          </button>
        )}
      </div>
    </>
  );
};

export default MobileNavBar;
