import React from "react";
import Header from "../Header";
import MDEditor from "@uiw/react-md-editor";

const Roadmap = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header formTitle="Roadmap" formDescription="List the features you're planning or already completed."/>
        <MDEditor value={value} onChange={handleChange} />
        <p className="mb-8">
          If the task is done, you can place an <strong>x</strong> inside the square brackets. 
        </p>
      </div>
    </>
  );
};

export default Roadmap;
