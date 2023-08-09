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
    installationTextRef,
    installationTextAreaRef,
    installationAddButtonAction,
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
        ) : (
          <p className="text-center p-6 text-lg border border-neutral-700">
            Your prerequisites will be listed here
          </p>
        )}
        <InstallationForm
          textRef={installationTextRef}
          textAreaRef={installationTextAreaRef}
          addButtonAction={installationAddButtonAction}
        />
        {installationSteps.length > 0 ? (
          <div className="flex flex-col flex-nowrap overflow-y-auto flex-wrap gap-3 h-[40em]">
            {installationSteps.map((item, index) => (
              <InstallationCard
                key={item.id}
                stepNo={index + 1}
                name={item.name}
                code={item.code}
              />
            ))}
          </div>
        ) : (
          <p className="text-center p-6 text-lg border border-neutral-700">
            Your installation steps will be listed here
          </p>
        )}
      </div>
    </>
  );
};

export default GettingStartedForm;
