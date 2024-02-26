// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("render link, license: " + license);
  let licenseLink;
  switch(license){
    case 'Apache':
      licenseLink = "[License](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GNU':
      licenseLink = "[License](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'MIT':
      licenseLink = "[License](https://opensource.org/licenses/MIT)";
      break;
    case 'Mozilla':
      licenseLink = "[License](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      licenseLink = "";

  }
  console.log("license link is: " + licenseLink);
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license.trim() == 'NONE'){
     return '';
   }
   else{
    return `## License\n${renderLicenseLink(license)}`
  }
}


//export function generateMarkdown ({ title, description, usage, installation,test, license, githubName, email }) { return
const generateMarkdown = ({ title, description, usage, installation,test, license, githubName, email }) => 
`
${renderLicenseBadge(license)}
# ${title}

## Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [License](#license)

## Description
${description}

## Usage
${usage}

## Installation
${installation}

## Test Instructions
${test}

## Questions
Github : [Profile](https://github.com/${githubName})
Email: [${email}](mailto:${email})
 
${renderLicenseSection(license)}
    
`;

module.exports = generateMarkdown;
