import { html } from "common-tags";
import generator from "./generator/template1/generator";

const tableOfContents = html`
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
`;

const template = (valuesObject) => {
  const {
    projectName,
    description,
    projectLink,
    logoUrl,
    about,
    techs,
    gettingStarted,
    usage,
    roadmap,
    contributing,
    acknowledgments
  } = valuesObject;

  const header = generator.header(
    projectName,
    description,
    projectLink,
    logoUrl
  );
  const aboutSection = generator.about(about);
  const builtWithSection = generator.builtWith(techs);
  const prerequisites = generator.prerequisites(gettingStarted.prerequisites);
  const installationSteps = generator.installationSteps(
    gettingStarted.installation
  );
  const usageSection = generator.usage(usage);
  const roadmapSection = generator.roadmap(roadmap)
  const contributingSection = generator.contributing(contributing)
  const acknowledgmentsSection = generator.acknowledgments(acknowledgments)

  //prettier-ignore
  return html`
    <!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
    <a name="readme-top"></a>
    <!--
    *** Thanks for checking out the Best-README-Template. If you have a suggestion
    *** that would make this better, please fork the repo and create a pull request
    *** or simply open an issue with the tag "enhancement".
    *** Don't forget to give the project a star!
    *** Thanks again! Now go create something AMAZING! :D
    -->
    
    <!-- PROJECT LOGO --> 
    ${header} 

    ${tableOfContents}

    ${aboutSection}

    ${builtWithSection}

    ## Getting Started
    
    ${prerequisites}

    ${installationSteps}

    ${usageSection}

    ${roadmapSection}

    ${contributingSection}

    ${acknowledgmentsSection}
  `;
};

export default template;
