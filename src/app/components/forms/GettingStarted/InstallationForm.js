import React from "react";
import SubHeader from "./SubHeader";

const InstallationForm = (props) => {
  const {textRef, textAreaRef, addButtonAction} = props
  return (
    <>
      <div className="flex flex-col gap-6">
        <SubHeader
          title="Installation"
          description="
          All the steps needed to install the project on the machine.
          "
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="installationStep">Step</label>
          <input
            type="text"
            name="installationStep"
            ref={textRef}
            minLength={1}
            className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
          />
          <label htmlFor="installationCode">Code/Command</label>
          <textarea
            name="installationCode"
            ref={textAreaRef}
            minLength={1}
            className="bg-gray-900 outline-none h-[10em] p-2"
          ></textarea>
        </div>
        <button onClick={addButtonAction} className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded bg-lime-500">
          Add
        </button>
      </div>
    </>
  );
};

export default InstallationForm;
