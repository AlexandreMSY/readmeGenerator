"use client";

import React, { useState, useRef } from "react";
import FormContainer from "../components/formContainer/FormContainer";
import DetailsForm from "../components/forms/Details/DetailsForm";
import AboutForm from "../components/forms/AboutForm/AboutForm";
import BuiltWithForm from "../components/forms/BuiltWith/BuiltWithForm";
import SideNavBar from "../components/sideNavBar/SideNavBar";
import GettingStartedForm from "../components/forms/GettingStarted/GettingStartedForm";
import Roadmap from "../components/forms/RoadmapForm/RoadmapForm";
import ContributingForm from "../components/forms/ContributingForm/ContributingForm";

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
    roadmap: "",
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
    techName.value = "";
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

    prerequisiteName.value = "";
    prerequisiteCode.value = "";
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

    installationStep.value = "";
    installationCode.value = "";
  };

  const builtWithDeleteBtnAction = (id) => {
    const builtWithItems = input.techs.filter((item) => item.id != id);
    setInput((values) => ({
      ...values,
      techs: builtWithItems,
    }));
  };

  const deletePrerequisite = (id) => {
    const newPrerequisiteList = input.gettingStarted.prerequisites.filter(
      (item) => item.id != id
    );

    setInput((values) => ({
      ...values,
      gettingStarted: {
        ...values.gettingStarted,
        prerequisites: newPrerequisiteList,
      },
    }));
  };

  const deleteInstallationStep = (id) => {
    const newInstallationStepList = input.gettingStarted.installation.filter(
      (item) => item.id != id
    );

    setInput((values) => ({
      ...values,
      gettingStarted: {
        ...values.gettingStarted,
        installation: newInstallationStepList,
      },
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
    about: (
      <AboutForm
        handleChange={(e) =>
          setInput((values) => ({
            ...values,
            aboutText: e,
          }))
        }
        value={input.aboutText}
      />
    ),
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
        prerequisiteDeleteButtonAction={deletePrerequisite}
        installationTextRef={(ref) => (refs.current["installationStep"] = ref)}
        installationTextAreaRef={(ref) =>
          (refs.current["installationCode"] = ref)
        }
        installationAddButtonAction={createInstallation}
        installationDeleteButtonAction={deleteInstallationStep}
        prerequisites={input.gettingStarted.prerequisites}
        installationSteps={input.gettingStarted.installation}
      />
    ),
    roadmap: (
      <Roadmap
        value={input.roadmap}
        handleChange={(e) =>
          setInput((values) => ({
            ...values,
            roadmap: e,
          }))
        }
      />
    ),
    contributing: <ContributingForm />
  };

  const changeFormComponent = (formComponentName) => {
    setCurrentComponent(formComponentName);
  };

  return (
    <>
      <div className="bg-[#121212] flex flex-col lg:flex-row">
        <div className="lg:w-40 border-r border-neutral-700 ">
          <SideNavBar
            handleClick={changeFormComponent}
            generateButtonAction={() => console.log(input)}
          />
        </div>
        <div className="overflow-x-auto lg:w-3/6 border-r border-neutral-700">
          <FormContainer children={components[currentComponent]} />
        </div>
      </div>
    </>
  );
};

export default page;
