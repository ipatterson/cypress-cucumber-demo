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

import '@testing-library/cypress/add-commands';

//CSS Selectors
const searchBox = 'combobox'
const searchButton = 'input[value="Google Search"]'
const resultsLabel = '#result-stats'

Cypress.Commands.add('inputSearchText', (searchString) =>
  cy.findByRole(searchBox)
    .type(searchString)
)

Cypress.Commands.add('clickSearch', () =>
  cy.get(searchButton)
    .first() //Selector retrieves both buttons; need to specify
    .click()
)

Cypress.Commands.add('validateResultsVisible', () =>
  cy.get(resultsLabel).should('exist')
)
