import React from "react";
import SubHeader from "./SubHeader";
import { TextField } from "@mui/material";
import lightTheme from "../../materialUiTheme";
import { ThemeProvider } from "@emotion/react";

//List all the things you need to get your project running locally

const PrerequisiteForm = (props) => {
  const { textRef, textAreaRef, addButtonAction } = props;
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <div className="flex flex-col gap-6">
          <SubHeader
            title="Prerequisites"
            description="List all the things needed to run the project."
          />
          <div className="flex flex-col gap-4">
            <TextField
              id="prerequisite"
              name="prerequisite"
              label="Prerequisite"
              inputRef={textRef}
            />
            <TextField
              label="Code/Command"
              id="prerequisiteCode"
              name="prerequisiteCode"
              inputRef={textAreaRef}
              multiline
              rows={4}
              maxRows={Infinity}
            />
            <button
              onClick={addButtonAction}
              className="bg-green-700 text-white rounded"
            >
              Add
            </button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default PrerequisiteForm;
