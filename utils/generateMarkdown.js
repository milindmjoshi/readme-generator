// Render a string for the license badge. If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("render badge, license: " + license);
  let licenseBadge;
  switch(license){
    case 'Apache':
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge)";
      break;
    case 'GNU':
      licenseBadge = "![License](https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge)";
      break;
    case 'MIT':
      licenseBadge = "![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)";
      break;
    case 'Mozilla':
      licenseBadge = "![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
    default:
      licenseBadge = "";

  }
  console.log("license Badge is: " + licenseBadge);
  return licenseBadge;
}

// Render a link to the license file. If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("render link, license: " + license);
  let licenseLink;
  switch(license){
    case 'Apache':
      licenseLink = "[Apache](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GNU':
      licenseLink = "[GNU](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'MIT':
      licenseLink = "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case 'Mozilla':
      licenseLink = "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      licenseLink = "";

  }
  console.log("license link is: " + licenseLink);
  return licenseLink;
}

// Render the license section of README. If there is no license selected, return an empty string
function renderLicenseSection(license) {
   if (license.trim() == 'NONE'){
     return '';
   }
   else{
    return `## License\n${renderLicenseLink(license)}`
  }
}


// Generate the Markdown file from the response using string template
const generateMarkdown = ({ title, description, usage, installation,test, license, githubName, email, contribution }) => 
`
${renderLicenseBadge(license)}
# ${title}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Description
${description}

## Usage
${usage}

## Installation
${installation}

## Tests
${test}

## Contributing
${contribution}

## Questions
Github : [Profile](https://github.com/${githubName})\n
Email: [${email}](mailto:${email})
 
${renderLicenseSection(license)}
    
`;

// export the generateMarkdown functione 
module.exports = generateMarkdown;
