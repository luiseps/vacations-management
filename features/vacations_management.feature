Feature: As a user I want to manage employees vacations
  
  Scenario: Login successful
    Given I want to login on tha vacations platform
    When I enter my user "gap-automation-test@mailinator.com" and password "12345678"
    Then I should see that "Signed in successfully."