const fs = require('fs');
const inquirer = require('inquirer');

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
        choices: ['MIT','APACHE 2.0', 'GNU', 'Public Domain'],
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
]).then((response)=>{
    console.log(response);
})
