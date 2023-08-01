import React from "react";

const InstallationForm = (props) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-xl tracking-wide">Installation</h4>
          <p className="tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, voluptate minus maiores consequuntur culpa eum repellat
          </p>
        </div>
        <div>
          <label htmlFor="1">Step</label>
          <input
            type="text"
            className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
          />
        </div>
        <div className="flex flex-col gap-3">
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
