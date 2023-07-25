import React from "react";

const BuiltWithForm = (props) => {
  const { techNameRef, addButtonAction, technologiesList } = props;
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl tracking-wide font-medium">Built With</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          perspiciatis, veritatis, suscipit saepe nostrum numquam adipisci sint,
          quis reiciendis cum cumque at voluptates magnam minima! Quaerat facere
          consectetur ab saepe.
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
        <div className="text-white">
          {technologiesList.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default BuiltWithForm;
