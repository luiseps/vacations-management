Feature: As a user I want to manage users
  
  Background:
   Given I am logged in the vacation platform
   
  @createUser
  Scenario: Create user successful    
    When  I fill the registration form
    Then I should see that a new user was created

  @deleteUser
  Scenario: Delete user successful
    When  I delete a registared user
    Then I should see that the user was deleted