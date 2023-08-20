import React from "react";
import Header from "../Header";
import MDEditor from "@uiw/react-md-editor";

const ContributingForm = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header
          formTitle="Contributing"
          formDescription="Give instructions on how to contribute to your project."
        />
        <MDEditor value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default ContributingForm;
