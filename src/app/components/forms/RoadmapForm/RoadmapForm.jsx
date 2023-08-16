import React from "react";
import Header from "../Header";
import MDEditor, { selectWord, commands } from "@uiw/react-md-editor";

const Roadmap = (props) => {
  const { value, handleChange } = props;
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header formTitle="Roadmap" formDescription="List the features you're planning or already completed."/>
        <MDEditor
          height={600}
          value={value}
          onChange={handleChange}
          preview="edit"
          visibleDragbar={false}
          commands={[
            commands.checkedListCommand,
            commands.bold,
            commands.italic,
            commands.strikethrough,
          ]}
        />
        <p className="mb-8">
          If the task is done, you can place an <strong>x</strong> inside the square brackets. 
        </p>
      </div>
    </>
  );
};

export default Roadmap;
