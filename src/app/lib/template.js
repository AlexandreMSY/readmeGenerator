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
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
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
    aboutText,
    techs,
    gettingStarted,
  } = valuesObject;

  const header = generator.header(
    projectName,
    description,
    projectLink,
    logoUrl
  );
  const about = generator.about(aboutText);
  const builtWith = generator.builtWith(techs);
  const prerequisites = generator.prerequisites(gettingStarted.prerequisites);
  const installationSteps = generator.installationSteps(
    gettingStarted.installation
  );

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

    ${about}

    ${builtWith}

    ## Getting Started
    
    ${prerequisites}

    ${installationSteps}
  `;
};

export default template;
