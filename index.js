// import Node FS module
const fs = require('fs');
// import the inquirer package
const inquirer = require('inquirer');
// import the generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt user for sections in readme file
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project tile?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your application used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines on how to contribute',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT', 'APACHE 2.0', 'GNU', 'Mozilla', 'NONE'],
        default: 0
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Please enter your github user name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    }
]).then((response) => {
    // console.log(response);
    createReadme(response);
})

// Creates README file from responses
function createReadme(response) {
    const readmeFileText = generateMarkdown(response);
    console.log(readmeFileText);
    fs.writeFile("README.md", readmeFileText, (err) => {
        err ? console.log(err) : console.log("Readme created!");
    });

}
