import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I open Google page', () => {
  cy.visit(url)
})

When(`I search for {string}`, (searchText) => {
  cy.inputSearchText(searchText)
})

And('I click Google Search', () => {
  cy.clickSearch()
})

Then('I see search results', () => {
  cy.validateResultsVisible()
})
