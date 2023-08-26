import React from "react";
import TechCard from "./TechCard";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import lightTheme from "../../materialUiTheme";

const backgroundColor = {
  backgroundColor: "#000000",
};

const BuiltWith = (props) => {
  const { techNameRef, addButtonAction, deleteButtonAction, technologiesList } =
    props;
  return (
    <>
      <div className="flex flex-col gap-8">
        <Header
          formTitle="Built With"
          formDescription="Here you can list all the frameworks/libraries used in your project."
        />
        <div className="flex flex-row justify-center gap-4">
          <ThemeProvider theme={lightTheme}>
            <TextField
              id="techName"
              name="techName"
              label="Tech Name"
              variant="standard"
              className="w-[100%]"
              inputRef={techNameRef}
            />
          </ThemeProvider>
          <button
            onClick={addButtonAction}
            className="rounded-md w-24 bg-gradient-to-r from-green-400 to-blue-500"
          >
            <AddIcon />
          </button>
        </div>
        <div className="text-white flex flex-row gap-3 flex-wrap">
          {technologiesList.map((item) => (
            <TechCard
              deleteBtnAction={() => {
                deleteButtonAction(item.id);
              }}
              key={item.id}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BuiltWith;
