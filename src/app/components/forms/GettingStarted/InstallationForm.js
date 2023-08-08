import React from "react";
import SubHeader from "./SubHeader";

const InstallationForm = (props) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <SubHeader
          title="Installation"
          description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            voluptatum magnam vel provident saepe ea. Harum fugit eum nam deserunt
            tenetur, ducimus, molestias excepturi saepe ipsam quae ratione quas.
            Odio.
          "
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="1">Step</label>
          <input
            type="text"
            className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
          />
          <label htmlFor="2">Code/Command</label>
          <textarea className="bg-gray-900 outline-none h-[10em] p-2"></textarea>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded bg-lime-500">
          Add
        </button>
      </div>
    </>
  );
};

export default InstallationForm;
