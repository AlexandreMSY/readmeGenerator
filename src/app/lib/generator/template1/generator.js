import { html, stripIndents } from "common-tags";
const backToTopButton = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;

// prettier-ignore
const generator = {
  header(projectName, description, projectLink, logoUrl) {
    const projectLogo = html`
      <br />
      <a href="${projectLink}">
        <img src="${logoUrl}" alt="Logo" width="80" height="80" />
      </a>
    `;
  
    const projectTitle = html`<h3 align="center">${projectName}</h3>`;
  
    const projectDescriptionAndLinks = html`
      <p align="center">
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
      </p>
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
  prerequisites(prerequisitesArray){
  const prerequisites = prerequisitesArray.map((item) => html`
      * ${item.name}
      ${item.code && `
        ${'```'}sh
          ${item.code}
        ${'```'}
      `}
    `)
    return html`
      ### Prerequisites

      ${prerequisites}

      ${backToTopButton}
    `
  },
  installationSteps(installationArray){
    const prerequisites = installationArray.map((item, index) => html`
        ${index + 1}. ${item.name}
          ${item.code && `
          ${'```'}sh
            ${item.code.trim()}
          ${'```'}
          `}
      `)
      return html`
        ### Installation

        ${prerequisites}

        ${backToTopButton}
      `
  }
};

export default generator;

//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dolor sit veritatis ipsa aliquid est accusamus dignissimos, similique tempora corporis fugit animi ipsum. Eius accusamus deleniti voluptas explicabo exercitationem modi.
