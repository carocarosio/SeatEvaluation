# SeatEvaluation
Technical interview from SEAT
Make sure you have all the system requirements: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
## Pre requisistes
* Download and Install NodeJS 
* Download and install Visual Studio Code.
*Note*: Visual Studio Code is the most used IDE. However, testers can use any IDE.
* Clone this repo into a local directory
## Installation
* Open the cloned project in Visual Studio Code
* In Visual Studio Code go to terminal tab or open a new terminal and install Cypress via npm:
```bash
npm install cypress --save-dev
```
This will install Cypress locally as a dev dependency for your project.
Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.
## Running tests with Cypress
* Option 1: Run tests in Cypress Window/UI
```bash
npx cypress open
```
* Option 2: In the Visual Studio Code Terminal
```bash
npx cypress run
```
