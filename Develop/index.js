//Include packages needed for this application
const inquirer = require(inquirer);
const fs = require('fs');

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
function writeToFile(data) {
    `## ${data.title}
    ##Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credits}
    ## License
    ${data.license}
    ---`
}

inquirer
    .prompt(questions)
    .then((data) => {
        const READMEPageContent = writeToFile(data);
        fs.writeFile('index.html', READMEPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

function init() {
    console.log('node index.js')
}

// Function call to initialize app
init();
