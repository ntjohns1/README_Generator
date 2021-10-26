// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseStr;
  switch (license[0]) {
    case 'MIT':
      licenseStr = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      licenseStr = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

      break;
    case 'BSD-3':
      licenseStr = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

      break;
    case 'GNU-3':
      licenseStr = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

      break;

    case 'Mozilla':
      licenseStr = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

      break;

    case 'Perl':
      licenseStr = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';

      break;

    default:
      licenseStr = ''
      break;
  }
  return licenseStr
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSectionStr;
  switch (license) {
    case 'MIT':
      licenseSectionStr = `

      Copyright ${date} ${username}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
      `
      break;
    case 'Apache':
      licenseSectionStr = ''
      break;
    case 'BSD-3':
      licenseSectionStr = ''
      break;
    case 'GNU-3':
      licenseSectionStr = ''
      break;

    default:
      licenseSectionStr = ''
      break;
  }
  return licenseSectionStr
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseStr = renderLicenseBadge(data.license);
  return `# ${data.title}
## Description
${data.description}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License  
${licenseStr}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, please open an issue in the GitHub repo: [https://github.com/${data.username}]`;



}

module.exports = generateMarkdown;

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

