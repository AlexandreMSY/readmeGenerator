import React from "react";
import SubHeader from "./SubHeader";
import { TextField } from "@mui/material";
import lightTheme from "../../materialUiTheme";
import { ThemeProvider } from "@emotion/react";

const InstallationForm = (props) => {
  const { textRef, textAreaRef, addButtonAction } = props;
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <div className="flex flex-col gap-6">
          <SubHeader
            title="Installation"
            description="All the steps needed to install the project on the machine."
          />
          <div className="flex flex-col gap-4">
            <TextField
              id="installationStep"
              name="installationStep"
              label="Installation Step"
              inputRef={textRef}
            />
            <TextField
              label="Code/Command"
              id="installationCode"
              name="installationCode"
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

export default InstallationForm;
