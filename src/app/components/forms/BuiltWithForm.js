import React from "react";
import TechCard from "./TechCard";

const BuiltWithForm = (props) => {
  const { techNameRef, addButtonAction, deleteButtonAction, technologiesList } =
    props;
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl tracking-wide font-medium">Built With</h1>
        <p>
          Here you can list all the frameworks/libraries used in your project.
        </p>
        <div className="flex flex-row justify-center gap-4">
          <input
            type="text"
            name="techName"
            id="techName"
            className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
            ref={techNameRef}
          />
          <button
            onClick={addButtonAction}
            className="border rounded bg-lime-400 w-[15%]"
          >
            Add
          </button>
        </div>
        <div className="text-white flex flex-row gap-4 flex-wrap">
          {technologiesList.map((item) => (
            <TechCard
              deleteBtnAction={() => {deleteButtonAction(item.id)}}
              key={item.id}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BuiltWithForm;