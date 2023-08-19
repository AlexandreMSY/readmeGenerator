import { html } from "common-tags";

const generator = {
  header(projectName, description, projectLink, logoUrl) {
    const projectLogo = html`
      <a href="${projectLink}">
        <img src="${logoUrl}" alt="Logo" width="80" height="80" />
      </a>
    `;

    const projectTitle = html`
      <h3 align="center">${projectName}</h3>
    `;

    return html`
      <div align="center">
        ${projectLogo}
        ${projectTitle}
      </div>
    `
  },
};

const template = (valuesObject) => {
  const header = generator.header(
    valuesObject.projectName,
    valuesObject.description,
    valuesObject.projectLink,
    valuesObject.logoUrl
  );

  return html`
    ${header}
  `;
};

export default template;
