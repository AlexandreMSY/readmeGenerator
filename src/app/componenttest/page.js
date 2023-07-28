"use client";

import React, { useState, useRef } from "react";
import FormContainer from "../components/formContainer/FormContainer";
import DetailsForm from "../components/forms/DetailsForm";
import AboutForm from "../components/forms/AboutForm";
import BuiltWithForm from "../components/forms/BuiltWithForm";
import SideNavBar from "../components/sideNavBar/SideNavBar";

const page = () => {
  const [input, setInput] = useState({
    projectName: "",
    description: "",
    projectLink: "",
    aboutText: "",
    techs: [],
  });
  const techRef = useRef();
  const [currentComponent, setCurrentComponent] = useState("details");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleAddButtonClick = () => {
    const name = techRef.current.value;
    const techListLength = input.techs.length
    setInput((values) => ({
      ...values,
      techs: [...values.techs, { id: techListLength, name: name }],
    }));
    techRef.current.value = "";
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
        techNameRef={techRef}
        technologiesList={input.techs}
        addButtonAction={handleAddButtonClick}
        deleteButtonAction={deleteBuiltWithItem}
      />
    ),
  };

  const changeFormComponent = (formComponentName) => {
    setCurrentComponent(formComponentName);
  };

  const sendData = async () => {
    const req = await fetch("http://localhost:3000/api/createreadme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const res = await req.json();

    console.log(res);
  };

  return (
    <>
      <div className="font-sourceSans bg-gray-950 flex flex-col lg:flex-row">
        <div className="border-r lg:w-40">
          <SideNavBar handleClick={changeFormComponent} />
        </div>
        <div className="border-r lg:w-3/6">
          <FormContainer children={components[currentComponent]} />
        </div>
        <div className="flex justify-center items-center content-center bg-black text-5xl w-3/6">
          <h1 className="text-white">ABC</h1>
        </div>
      </div>
    </>
  );
};

export default page;
