const changeToComponent = (input) => {
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
    gettingStarted: (
      
    )
  };
};

export default components;
