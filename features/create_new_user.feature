Feature: As a user I want to create a new user
  
  Scenario: Create user successful
    Given I am logged in the vacation platform
    When  I fill the registration form
    Then I should see that a new user was created