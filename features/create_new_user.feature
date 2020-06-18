Feature: As a user I want to manage users
  
  @createUser
  Scenario: Create user successful
    Given I am logged in the vacation platform
    When  I fill the registration form
    Then I should see that a new user was created

  @deleteUser
  Scenario: Delete user successful
    Given I am logged in the vacation platform
    When  I delete a registared user
    Then I should see that the user was deleted