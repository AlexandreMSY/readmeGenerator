import React from "react";
import Header from "../Header";
import MarkdownEditor from "@uiw/react-markdown-editor";

const Acknowledgments = (props) => {
  const { handleChange, value } = props;

  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          formTitle="Acknowledgments"
          formDescription="Use this space to list resources you find helpful and would like to give credit to."
        />
        <MarkdownEditor height="300px" value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default Acknowledgments
