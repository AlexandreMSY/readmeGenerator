import React from "react";
import Header from "../Header";
import MarkdownEditor from "@uiw/react-markdown-editor";

const AboutForm = (props) => {
  const { handleChange, value } = props;

  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          formTitle="About"
          formDescription="Let people know what your project can do specifically."
        />
        <MarkdownEditor height="300px" value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default AboutForm;
