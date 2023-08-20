import React from "react";
import Header from "../Header";
import MDEditor from "@uiw/react-md-editor";

const Usage = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          formTitle="Usage"
          formDescription="Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space."
        />
        <MDEditor value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default Usage;
