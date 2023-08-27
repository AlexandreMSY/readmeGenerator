import React from "react";
import forwardArrow from "../../../../public/forwardArrow.svg";
import items from "../sideNavBar/items";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobileNavBar = (props) => {
  const {
    nextButtonAction,
    prevButtonAction,
    generateButtonAction,
    currentComponentId,
  } = props;
  return (
    <>
      <div className="fixed bottom-0 left-0 p-4 w-full h-fit flex flex-row justify-between bg-black text-teal-500 lg:hidden">
        <button
          className="border border-teal-500 px-2 rounded-full bg-teal-950"
          onClick={prevButtonAction}
        >
          <p className="flex flex-row"><ArrowBackIcon/>Prev</p>
        </button>
        {currentComponentId == items.length - 1 ? (
          <button
            onClick={generateButtonAction}
            className="border border-teal-500 px-2 rounded-full bg-teal-950"
          >
            <p>Generate</p>
          </button>
        ) : (
          <button
            onClick={nextButtonAction}
            className="border border-teal-500 px-2 rounded-full bg-teal-950"
          >
            <p className="flex flex-row">Next<ArrowForwardIcon /></p>
          </button>
        )}
      </div>
    </>
  );
};

export default MobileNavBar;
