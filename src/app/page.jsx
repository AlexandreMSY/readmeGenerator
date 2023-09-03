"use client";

import React, { useState, useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import FormContainer from "./components/formContainer/FormContainer";
import Details from "./components/forms/Details/Details";
import About from "./components/forms/About/About";
import BuiltWith from "./components/forms/BuiltWith/BuiltWith";
import SideNavBar from "./components/sideNavBar/SideNavBar";
import GettingStarted from "./components/forms/GettingStarted/GettingStarted";
import Roadmap from "./components/forms/Roadmap/Roadmap";
import Contributing from "./components/forms/Contributing/Contributing";
import Contact from "./components/forms/Contact/Contact";
import Acknowledgments from "./components/forms/Acknowledgments/Acknowledgments";
import items from "./components/sideNavBar/items";
import MobileNavBar from "./components/mobileNavBar/MobileNavBar";
import MarkdownViewer from "./components/markdownViewer/MarkdownViewer";
import Usage from "./components/forms/Usage/Usage";
import placeholders from "./placeholders/placeholders";
import MarkdownViewerMobile from "./components/markdownViewerMobile/MarkdownViewerMobile";

const page = () => {
  const [input, setInput] = useState({
    projectName: "",
    description: "",
    projectLink: "",
    logoUrl: "",
    about: placeholders.about,
    techs: [],
    gettingStarted: {
      prerequisites: [],
      installation: [],
    },
    usage: "",
    roadmap: placeholders.roadmap,
    contributing: placeholders.contributing,
    acknowledgments: placeholders.acknowledgments,
  });
  const refs = useRef({});
  const [currentComponent, setCurrentComponent] = useState("details");
  const [componentId, setComponentId] = useState(0);
  const [markdownCode, setMarkdownCode] = useState("");

  useEffect(() => {
    setCurrentComponent(items[componentId].changeTo);
  }, [componentId]);

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
      <Details
        projectNameValue={input.projectName}
        descriptionValue={input.description}
        projectLinkValue={input.projectLink}
        handleChange={handleChange}
      />
    ),
    about: (
      <About
        handleChange={(value, viewUpdate) =>
          setInput((values) => ({
            ...values,
            aboutText: value,
          }))
        }
        value={input.about}
      />
    ),
    built: (
      <BuiltWith
        techNameRef={(ref) => (refs.current["techName"] = ref)}
        technologiesList={input.techs}
        addButtonAction={builtWithAddBtnAction}
        deleteButtonAction={builtWithDeleteBtnAction}
      />
    ),
    gettingStarted: (
      <GettingStarted
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
    usage: (
      <Usage
        value={input.usage}
        handleChange={(e) => {
          setInput((values) => ({
            ...values,
            usage: e,
          }));
        }}
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
    contributing: (
      <Contributing
        value={input.contributing}
        handleChange={(e) => {
          setInput((values) => ({
            ...values,
            contributing: e,
          }));
        }}
      />
    ),
    //contact: <Contact />,
    acknowledgments: (
      <Acknowledgments
        value={input.acknowledgments}
        handleChange={(e) => {
          setInput((values) => ({
            ...values,
            acknowledgments: e,
          }));
        }}
      />
    ),
    markdownViewerMobile: <MarkdownViewerMobile source={markdownCode} />,
  };

  const nextFormComponent = () => {
    if (componentId < items.length - 1) {
      setComponentId(componentId + 1);
    }
  };

  const prevFormComponent = () => {
    console.log(componentId);
    if (componentId > 0) {
      setComponentId(componentId - 1);
    }
  };

  return (
    <>
      <div className="text-white flex flex-col gap-2 h-screen bg-black sm:p-2 md:flex-row">
        <div className="hidden lg:inline-block bg-[#121212]">
          <SideNavBar
            handleClick={(componentName) => setCurrentComponent(componentName)}
            generateButtonAction={async () => {
              const req = await fetch("/api/createreadme", {
                method: "POST",
                body: JSON.stringify(input),
              });
              const res = await req.json();

              setMarkdownCode(res.mdCode);
            }}
          />
        </div>
        <div className="bg-[#121212] h-[95%] w-[100%] overflow-auto lg:h-[100%]">
          <FormContainer children={components[currentComponent]} />
        </div>
        <div className="hidden lg:inline-block w-[70%] overflow-auto bg-[#121212]">
          <MarkdownViewer source={markdownCode} />
        </div>
      </div>
      <MobileNavBar
        currentComponentId={componentId}
        nextButtonAction={nextFormComponent}
        prevButtonAction={prevFormComponent}
        generateButtonAction={async () => {
          const req = await fetch("/api/createreadme", {
            method: "POST",
            body: JSON.stringify(input),
          });
          const res = await req.json();

          setMarkdownCode(res.mdCode);
          setCurrentComponent("markdownViewerMobile");
        }}
      />
    </>
  );
};

export default page;
