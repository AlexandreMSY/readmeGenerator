import React from "react";
import Header from "../Header";
import PrerequisiteCard from "./PrerequisiteCard";
import PrerequisiteForm from "./PrerequisiteForm";
import InstallationForm from "./InstallationForm";
import "scrollable-component";

const GettingStartedForm = (props) => {
  const { prerequisites } = props;
  return (
    <>
      <div className="flex flex-col gap-12">
        <Header formTitle="Getting Started" />
        <PrerequisiteForm />
        <div className="flex flex-row overflow-y-auto flex-wrap gap-3 h-[40em]">
          <PrerequisiteCard
            name="npm"
            code="npm create vite@latest my-vue-app --template vue"
          />
          <PrerequisiteCard name="npm" code="npm install" />
          <PrerequisiteCard name="npm" code="npm install" />
          <PrerequisiteCard name="npm" code="npm install" />
          <PrerequisiteCard name="npm" code="npm install" />
          <PrerequisiteCard name="npm" code="npm install" />
          <PrerequisiteCard name="npm" code="npm install" />
        </div>
        <InstallationForm />
        <div className="flex flex-row flex-nowrap overflow-y-auto flex-wrap gap-3">

        </div>
      </div>
    </>
  );
};

export default GettingStartedForm;
