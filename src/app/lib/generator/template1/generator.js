//https://www.markdownguide.org/basic-syntax/

import { html, stripIndents } from "common-tags";
const backToTopButton = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;

// prettier-ignore
const generator = {
  header(projectName, description, projectLink, logoUrl) {
    const projectLogo = logoUrl && html`
      <br />
      <a href="${projectLink}">
        <img src="${logoUrl}" alt="Logo" width="80" height="80" />
      </a>
    ` ;
    const projectTitle = html`<h3 align="center">${projectName}</h3>`;
  
    const projectDescriptionAndLinks = html`
      ${description ? 
      `<p align="center">
        ${description}
        <br />
        <a href="${projectLink}"><strong>Explore the docs »</strong></a>
        <br />
        <br />
        <a href="${projectLink}">View Demo</a>
        ·
        <a href="${projectLink}/issues">Report Bug</a>
        ·
        <a href="${projectLink}/issues">Request Feature</a>
      </p>` : 
      `
      <p align="center">
        <br />
        <a href="${projectLink}"><strong>Explore the docs »</strong></a>
        <br />
        <br />
        <a href="${projectLink}">View Demo</a>
        ·
        <a href="${projectLink}/issues">Report Bug</a>
        ·
        <a href="${projectLink}/issues">Request Feature</a>
      </p> 
      `}
    `;
  
    return html` 
      <div align="center">
        ${projectLogo} 
        ${projectTitle}
        ${projectDescriptionAndLinks}
      </div> 
    `;
  },
  about(text) {
    return html`
      <!-- ABOUT THE PROJECT -->
      ## About The Project 
      
      ${text}

      ${backToTopButton}
    `;
  },
  builtWith(techsArray) {
    return html` 
      ### Built With 

      ${techsArray.map((item) => `* ${item.name}`)}
      
      ${backToTopButton}
    `;
  },

  /*
    ``` denotes a phrase as code in markdown language
    https://www.markdownguide.org/basic-syntax/#code
  */
 
  prerequisites(prerequisitesArray){
    /*
      indentation looks a bit weird so the string looks better on the .md file
      that's the only way i've found to fix the identation issue, sadly
    */
    const prerequisites = prerequisitesArray.map((item) => html`
      * ${item.name}
      ${item.code && 
      `
          ${'```'}sh
            ${item.code.trim()}
          ${'```'}
      `
      }
    `);

    return html`
      ### Prerequisites

      ${prerequisites}

      ${backToTopButton}
    `
  },
  installationSteps(installationArray){
    const prerequisites = installationArray.map((item, index) => html`
      ${index + 1}. ${item.name}
      ${item.code && 
      `
          ${'```'}sh
            ${item.code.trim()}
          ${'```'}
      `
      }
    `);

    return html`
      ### Installation

      ${prerequisites}

      ${backToTopButton}
    `
  },
  usage(text){
    return html`
      ## Usage

      ${text}

      ${backToTopButton}
    `
  },
  roadmap(text){
    return html`
      ## Roadmap

      ${text}

      ${backToTopButton}
    `
  },
  contributing(text){
    return html`
      ## Contributing

      ${text}

      ${backToTopButton}
    `
  },
  acknowledgments(text){
    return html`
      ## Acknowledgments

      ${text}

      ${backToTopButton}
    `
  }
};

export default generator;

//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolor sit veritatis ipsa aliquid est accusamus dignissimos, similique tempora corporis fugit animi ipsum. Eius accusamus deleniti voluptas explicabo exercitationem modi.
