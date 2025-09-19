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
//require('cypress-plugin-retries');
require('@4tw/cypress-drag-drop');
import 'cypress-file-upload';
require('cypress-xpath');

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from
  // failing the test
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false
  }
})


Cypress.Commands.add('getIframe',(iFrame)=>{
  return cy.get('#mce_0_ifr')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);

});

// cypress/support/commands.js

Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).click({ force: true });
});



const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}
