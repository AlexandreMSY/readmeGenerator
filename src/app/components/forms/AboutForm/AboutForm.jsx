import React from "react";
import Header from "../Header";
import MDEditor, { selectWord } from "@uiw/react-md-editor";

const AboutForm = (props) => {
  const { handleChange, value } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header formTitle="About" formDescription="Let people know what your project can do specifically."/>
        <div className="mb-8">
          <MDEditor height={600} value={value} onChange={handleChange} visibleDragbar={false}/>
        </div>
      </div>
    </>
  );
};

export default AboutForm;
