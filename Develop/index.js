//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, with links to their GitHub profiles. Also, list any third party assets and links to any tutuorials used.',
    },
    {
        type: 'checkbox',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'BSD-3', 'GNU-3', 'Mozilla', 'Perl', 'none'],
        name: 'license'
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
    err ? console.log(err) : console.log('Successfully created README.md!')
});
}

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        const fileName =  'README.md'
        const pageContent = generateMarkdown(data);
        writeToFile(fileName, pageContent); 
        });
}

init();
