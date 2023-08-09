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
    gettingStarted: {
      prerequisites: [],
      installation: [],
    },
  });
  const refs = useRef({});
  const [currentComponent, setCurrentComponent] = useState("details");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const builtWithAddBtnAction = () => {
    const { techName } = refs.current;
    const name = techName.value;
    const techListLength = input.techs.length;

    setInput((values) => ({
      ...values,
      techs: [...values.techs, { id: techListLength, name: name }],
    }));
    techName.current.value = "";
  };

  
  const createPrerequisite = () => {
    const { prerequisiteName, prerequisiteCode } = refs.current;
    const prerequisiteNameValue = prerequisiteName.value;
    const prerequisiteCodeValue = prerequisiteCode.value;
    const id = input.gettingStarted.prerequisites.length;
    
    setInput((values) => ({
      ...values,
      gettingStarted: {
        ...values.gettingStarted,
        prerequisites: [
          ...values.gettingStarted.prerequisites,
          {
            id: id,
            name: prerequisiteNameValue,
            code: prerequisiteCodeValue,
          },
        ],
      },
    }));

    prerequisiteName.value = ""
    prerequisiteCode.value = ""
  };

  const createInstallation = () => {
    const { installationStep, installationCode } = refs.current;
    const installationStepValue = installationStep.value;
    const installationCodeValue = installationCode.value;
    const id = input.gettingStarted.installation.length;
    
    setInput((values) => ({
      ...values,
      gettingStarted: {
        ...values.gettingStarted,
        installation: [
          ...values.gettingStarted.installation,
          {
            id: id,
            name: installationStepValue,
            code: installationCodeValue,
          },
        ],
      },
    }));

    installationStep.value = ""
    installationCode.value = ""
  };
  
  const builtWithDeleteBtnAction = (id) => {
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
        addButtonAction={builtWithAddBtnAction}
        deleteButtonAction={builtWithDeleteBtnAction}
      />
    ),
    gettingStarted: (
      <GettingStartedForm
        prerequisiteTextRef={(ref) => (refs.current["prerequisiteName"] = ref)}
        prerequisiteTextAreaRef={(ref) =>
          (refs.current["prerequisiteCode"] = ref)
        }
        prerequisiteAddButtonAction={createPrerequisite}
        installationTextRef={(ref) => (refs.current["installationStep"] = ref)}
        installationTextAreaRef={(ref) =>
          (refs.current["installationCode"] = ref)
        }
        installationAddButtonAction={createInstallation}
        prerequisites={input.gettingStarted.prerequisites}
        installationSteps={input.gettingStarted.installation}
      />
    ),
  };

  const changeFormComponent = (formComponentName) => {
    setCurrentComponent(formComponentName);
  };

  return (
    <>
      <div className="bg-[#121212] flex flex-col lg:flex-row">
        <div className="lg:w-40 border-r border-neutral-700 ">
          <SideNavBar handleClick={changeFormComponent} />
        </div>
        <div className="overflow-x-auto lg:w-3/6 border-r border-neutral-700">
          <FormContainer children={components[currentComponent]} />
        </div>
      </div>
    </>
  );
};

export default page;
