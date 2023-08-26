import React from "react";
import Header from "../Header";
import MarkdownEditor from "@uiw/react-markdown-editor";

const Contributing = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header
          formTitle="Contributing"
          formDescription="Give instructions on how to contribute to your project."
        />
        <MarkdownEditor height="300px" value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default Contributing;
