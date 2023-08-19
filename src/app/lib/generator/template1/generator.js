import { html } from "common-tags";

const generator = {
  // prettier-ignore
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
  // prettier-ignore
  about(text) {
    return html`
      <!-- ABOUT THE PROJECT -->
      ## About The Project 
      ${text}

      <p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
  },
  // prettier-ignore
  builtWith(techsArray) {
    return html` 
      ### Built With 
      ${techsArray.map((item) => `* ${item.name}`)}
      
      <p align="right">(<a href="#readme-top">back to top</a>)</p>
    `;
  },
};

export default generator;
