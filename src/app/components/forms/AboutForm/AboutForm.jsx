import React from "react";
import Header from "../Header";
import MDEditor from "@uiw/react-md-editor";

const AboutForm = (props) => {
  const { handleChange, value } = props;

  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          formTitle="About"
          formDescription="Let people know what your project can do specifically."
        />
        <MDEditor value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default AboutForm;
