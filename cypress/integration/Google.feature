Feature: Google Main Page

  I want to open a search engine
#
#  @focus
#  Scenario: Opening a search engine page
#    Given I open Google page
#    Then I see "Google" in the title

  @focus
  Scenario: Searching
    Given I open Google page
    When I search for "Cypress.io"
    And I click Google Search
    Then I see search results
