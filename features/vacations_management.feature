Feature: As a user I want to manage employees vacations
  
  @login
  Scenario: Login successful
    Given I want to login on tha vacations platform
    When I enter my user and password
    Then I should see that "Signed in successfully."