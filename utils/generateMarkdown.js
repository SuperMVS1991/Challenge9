// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'GNU') {
        return `![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)`
    } else if (license === 'Apache') {
        return `![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)`
    } else if (license === 'ISC') {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://opensource.org/licenses/MIT`
    } else if (license === 'GNU') {
        return `https://www.gnu.org/licenses/gpl-3.0`
    } else if (license === 'Apache') {
        return `https://opensource.org/licenses/Apache-2.0`
    } else if (license === 'ISC') {
        return `https://opensource.org/licenses/ISC`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return `This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details`
    } else if (license === 'GNU') {
        return `This project is licensed under the GNU License - see the [GNU License](https://www.gnu.org/licenses/gpl-3.0) for details`
    } else if (license === 'Apache') {
        return `This project is licensed under the Apache License - see the [Apache License](https://opensource.org/licenses/Apache-2.0) for details`
    } else if (license === 'ISC') {
        return `This project is licensed under the ISC License - see the [ISC License](https://opensource.org/licenses/ISC) for details`
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installationInstructions}
  ## Usage
  ${data.Usage}
  ## License
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributionGuidelines}
  ## Tests
  ${data.testInstructions}
  ## Questions
  ${data.githubUsername} https://github.com/${data.githubUsername};
  ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
