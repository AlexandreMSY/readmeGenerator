import React from "react";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import Header from "../Header";

const ContributingForm = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header
          formTitle="Contributing"
          formDescription="Give instructions on how to contribute to your project."
        />
        <div className="mb-6">
          <MDEditor height={600} value={value} onChange={handleChange} visibleDragbar={false}/>
        </div>
      </div>
    </>
  );
};

export default ContributingForm;