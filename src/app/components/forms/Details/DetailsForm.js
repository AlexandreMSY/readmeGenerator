import React from "react";
import Header from "../Header";

const DetailsForm = (props) => {
  const { handleChange, projectNameValue, descriptionValue, projectLinkValue } =
    props;

  return (
    <>
      <div className="flex flex-col gap-8">
        <Header
          formTitle="Details"
          formDescription={
            <>
              Enter the basic details for your project.
              <br />
              These are going to be displayed on the top of the Readme.
            </>
          }
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              placeholder="Readme Generator"
              onChange={handleChange}
              value={projectNameValue}
              className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="projectDescription">Project Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Generate READMES for your Github project"
              onChange={handleChange}
              value={descriptionValue}
              className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="projectLink">Project Link</label>
            <input
              type="link"
              name="projectLink"
              id="projectLink"
              placeholder="https://github.com/AlexandreMSY/readmeGenerator"
              onChange={handleChange}
              value={projectLinkValue}
              className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              name="logo"
              id="logo"
              className="duration-1000 w-full bg-transparent outline-none text-sm focus:border-lime-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
