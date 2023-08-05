// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a brief guide on how to use you project',
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'Enter technologies used in this project',
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Enter the author(s) of this project',
    },
    {
        type: 'input',
        name: 'support',
        message: 'Enter where people can go to support the project',
    },
    {
        type: 'input',
        name: 'projectStatus',
        message: 'Enter the project status',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = `
  # ${answers.projectTitle}
  
  ## Description
  
  ${answers.description}
  
  ## Usage

  ${answers.usage}

  ## Technologies

  ${answers.technologies}

  ## Authors

  ${answers.authors}

  ## Support

  ${answers.support}

  ## Project Status

  ${answers.projectStatus}

  `;
        writeToFile('README.md', readmeContent);
      })
      .catch((err) => {
        console.error('Error while collecting user input:', err);
      });
  }

// Function call to initialize app
init();