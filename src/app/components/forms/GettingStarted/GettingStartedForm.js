import React from "react";
import Header from "../Header";
import InstallationForm from "./InstallationForm";
import PrerequisiteForm from "./PrerequisiteForm";
import InstallationCard from "./InstallationCard";
import PrerequisiteCard from "./PrerequisiteCard";
import "scrollable-component";

const GettingStartedForm = (props) => {
  const {
    prerequisites,
    installationSteps,
    prerequisiteTextRef,
    prerequisiteTextAreaRef,
    prerequisiteAddButtonAction,
  } = props;
  return (
    <>
      <div className="flex flex-col gap-3">
        <Header formTitle="Getting Started" />
        <PrerequisiteForm
          textRef={prerequisiteTextRef}
          textAreaRef={prerequisiteTextAreaRef}
          addButtonAction={prerequisiteAddButtonAction}
        />
        {prerequisites.length > 0 ? (
          <div className="flex flex-col flex-nowrap overflow-y-auto flex-wrap gap-3 h-[40em]">
            {prerequisites.map((item) => (
              <PrerequisiteCard
                key={item.id}
                name={item.name}
                code={item.code}
              />
            ))}
          </div>
        ) : 
          <p className="text-center p-6 text-lg border border-neutral-700">
            Your prerequisites will be listed here
          </p>
        }
        <InstallationForm />
        <div className="flex flex-col flex-nowrap overflow-y-auto flex-wrap gap-3 h-[40em] mb-8">
          <InstallationCard
            stepNo="1"
            name="Clone the repo"
            code="git clone https://github.com/your_username_/Project-Name.git"
          />
          <InstallationCard
            stepNo="2"
            name="Clone the repo"
            code="git clone https://github.com/your_username_/Project-Name.git"
          />
          <InstallationCard
            stepNo="3"
            name="Clone the repo"
            code="git clone https://github.com/your_username_/Project-Name.git"
          />
          <InstallationCard
            stepNo="4"
            name="Clone the repo"
            code="git clone https://github.com/your_username_/Project-Name.git"
          />
        </div>
      </div>
    </>
  );
};

export default GettingStartedForm;
