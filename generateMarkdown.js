// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    // Here, you can define the URLs or image links for the badges based on the license type.
    // For example, for popular licenses like MIT, Apache 2.0, etc., you can use their official badge URLs.
    // Replace the URLs with the actual badge URLs as needed.
    const badges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      // Add more badges for other licenses as necessary.
    };
  
    return badges[license] || '';
  }
  
  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    // Here, you can define the URLs for the license details or full license text.
    // Replace the URLs with the actual license URLs as needed.
    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      Apache: 'https://opensource.org/licenses/Apache-2.0',
      // Add more license links for other licenses as necessary.
    };
  
    return licenseLinks[license] || '';
  }
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    // You can customize the license section format based on your needs.
    // For example, you can provide a brief description of the license along with a link to its full text.
    const licenseSection = `
  ## License
  
  This project is licensed under the ${license} License.  
  For more information, see the [License](LICENSE URL) file.
  `;
  
    return licenseSection.replace('LICENSE URL', renderLicenseLink(license));
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    // Using the provided data to generate the README content
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license) ? '- [License](#license)' : ''}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  `;
  }
  
module.exports = generateMarkdown;