/*


WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

TODO:
-already figured out how to do lists, start with the list of licenses
-Table of Contents, Tests, and Questions
-create a table of contents, tests and questions section
-figure out how to make the table of contents go to the corresponding sections
-figure out how to create links for GitHub username and email
*/

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
        type: 'input',
        name: 'license',
        message: 'Enter the license type (usually MIT)',
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
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
