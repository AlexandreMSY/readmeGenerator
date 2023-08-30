import React from "react";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import { InputLabel } from '@mui/material';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "../../materialUiTheme";

const Details = (props) => {
  const { handleChange, projectNameValue, descriptionValue, projectLinkValue } =
    props;

  return (
    <>
      <div className="flex flex-col gap-8 ">
        <Header
          formTitle="Details"
          formDescription="Enter the basic details of your project"
        />
        <div className="flex flex-col gap-6">
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <TextField
              label="Project Name"
              type="text"
              name="projectName"
              value={projectNameValue}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              type="text"
              name="description"
              value={descriptionValue}
              onChange={handleChange}
            />
            <TextField
              label="Github Respository URL"
              type="url"
              name="projectLink"
              value={projectLinkValue}
              onChange={handleChange}
            />
            <TextField
              label="Logo Image URL"
              type="url"
              name="logoUrl"
              onChange={handleChange}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Details;
