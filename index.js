// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of my project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'what is the decription of my project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'what is the installation instructions for my project?',
        name: 'installationInstructions',
      },
      {
        type: 'input',
        message: 'what are the contribution guidelines for my project?',
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: 'what are the test instructions for my project?',
        name: 'testInstructions',
      },
      {
        type: 'list',
        message: 'what license is my project under?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'ISC'],
      },
      {
        type: 'input',
        message: 'what is your github username?',
        name: 'githubUsername',
      },
      {
        type: 'input',
        message: 'what is your email address?',
        name: 'emailAddress',
      },
      {
        type: 'input',
        message: 'how is my project used?',
        name: 'Usage',
      },
  ])
  .then((response) =>
    fs.writeFile('readme.md', generatemarkdown(response), (err) =>
      err ? console.error(err) : console.log('Success!')
  ));
}

// Function call to initialize app
init();





// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README