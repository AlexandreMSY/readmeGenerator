import React from "react";
import Header from "../Header";

const DetailsForm = (props) => {
  const { handleChange, projectNameValue, descriptionValue, projectLinkValue } =
    props;

  return (
    <>
      <div className="flex flex-col gap-8 ">
        <Header
          formTitle="Details"
          formDescription={<>Enter the basic details of your project.</>}
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
            <label htmlFor="projectLink">Github Repository Link</label>
            <input
              type="url"
              name="projectLink"
              id="projectLink"
              placeholder="https://github.com/AlexandreMSY/readmeGenerator"
              onChange={handleChange}
              value={projectLinkValue}
              className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="logoUrl">Logo Image URL</label>
            <input
              type="url"
              name="logoUrl"
              id="logoUrl"
              placeholder="https://example.com/your-image.png"
              className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
