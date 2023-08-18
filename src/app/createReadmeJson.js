const createReadmeJson = (object) => {
  const {
    projectName,
    description,
    projectLink,
    logoUrl,
    aboutText,
    techs,
    gettingStarted,
    roadmap,
    contributing,
  } = object;

  const json = {
    aboutText: aboutText,
  }

  return JSON.stringify(json);
};

export default createReadmeJson
