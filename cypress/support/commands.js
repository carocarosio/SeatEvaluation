// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("setDefaultCar", () => {  //aca se puede parametrizar y enviar el modelo a elegit
  //Select the first car of the list
  cy.get(
    ":nth-child(1) > seat-car-selector-list-item > .vertical > .text"
  ).click();
  //Select the second car model available and click on configúralo
  cy.get(
    ":nth-child(2) > .second-column > .seat-button-text > main > b"
  ).click();
  //Motor page is displayed
  cy.contains("Elegir motor");
  cy.get("footer seat-button ").click(); //next
  //Color page is displayed
  cy.contains("Elegir color");
  cy.get("footer seat-button ").click(); //next
  //Tapiceria page is displayed
  cy.contains("Elegir tapicerías");
  cy.get("footer seat-button ").click(); //next
  //Opcionales page is displayed
  cy.contains("Añadir paquetes");
  cy.get("footer seat-button ").click();
  //validate that the car was configured as expected
  cy.contains("descarga tu configuración aquí"); //is in the correct page
});
