"use client";

import React, { useState, useRef } from "react";
import FormContainer from "../components/formContainer/FormContainer";
import DetailsForm from "../components/forms/Details/DetailsForm";
import AboutForm from "../components/forms/AboutForm/AboutForm";
import BuiltWithForm from "../components/forms/BuiltWith/BuiltWithForm";
import SideNavBar from "../components/sideNavBar/SideNavBar";
import GettingStartedForm from "../components/forms/GettingStarted/GettingStartedForm";

const page = () => {
  const [input, setInput] = useState({
    projectName: "",
    description: "",
    projectLink: "",
    aboutText: "",
    techs: [],
  });
  const refs = useRef({});
  const [currentComponent, setCurrentComponent] = useState("details");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleAddButtonClick = () => {
    const { techName } = refs.current;
    const name = techName.value;
    const techListLength = input.techs.length;

    setInput((values) => ({
      ...values,
      techs: [...values.techs, { id: techListLength, name: name }],
    }));
    //techRef.current.value = "";*/
  };

  const deleteBuiltWithItem = (id) => {
    const builtWithItems = input.techs.filter((item) => item.id != id);
    setInput((values) => ({
      ...values,
      techs: builtWithItems,
    }));
  };

  const components = {
    details: (
      <DetailsForm
        projectNameValue={input.projectName}
        descriptionValue={input.description}
        projectLinkValue={input.projectLink}
        handleChange={handleChange}
      />
    ),
    about: <AboutForm handleChange={handleChange} value={input.aboutText} />,
    built: (
      <BuiltWithForm
        techNameRef={(ref) => (refs.current["techName"] = ref)}
        technologiesList={input.techs}
        addButtonAction={handleAddButtonClick}
        deleteButtonAction={deleteBuiltWithItem}
      />
    ),
    gettingStarted: <GettingStartedForm />,
  };

  const changeFormComponent = (formComponentName) => {
    setCurrentComponent(formComponentName);
  };

  return (
    <>
      <div className="bg-[#121212] flex flex-col lg:flex-row">
        <div className="border-r border-neutral-700 lg:w-40">
          <SideNavBar handleClick={changeFormComponent} />
        </div>
        <div className="border-r border-neutral-700 overflow-x-auto lg:w-3/6">
          <FormContainer children={components[currentComponent]} />
        </div>
      </div>
    </>
  );
};

export default page;
