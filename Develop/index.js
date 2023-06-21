// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter how to install your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage of your project:",
    },
    {
        type: "input",
        name: "credits",
        message: "Enter the credits of your project:",
    },
    {
        type: "input",
        name: "license",
        message: "Enter the license of your project:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("README.md created successfully!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        const markdown = generateReadme (answers);

        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
