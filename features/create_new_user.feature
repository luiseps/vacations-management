Feature: As a user I want to create a new user
  
  @test1
  Scenario: Create user successful
    Given I am logged in the vacation platform
    When  I fill the registration form
    Then I should see that a new user was created

  @test2
  Scenario: Delete user successful
    Given I am logged in the vacation platform
    When  I delete a registared user
    Then I should see that the user was deleted