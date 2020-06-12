const { Given, When, Then, AfterAll } = require('cucumber');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Given('I want to login on tha vacations platform', function () {
    driver.get('https://vacations-management.herokuapp.com/users/sign_in');
    
});

When('I enter my user {string} and password {string}', function (user, password) {
    driver.findElement(By.id('user_email')).sendKeys(user);
    driver.findElement(By.id('user_password')).sendKeys(password);
    driver.findElement(By.css('input.submit')).click();
});

Then('I should see that {string}', function (expectedMessage) {
    
    //driver.wait(until.elementTextIs(driver.findElement(By.css('p.flash_notice')), expectedMessage), 10000);
    /*driver.wait(until.elementLocated(driver.findElement(By.css('p.flash_notice')), 10000))
      .getText().then(textValue => {
        assert.equal(expectedMessage, textValue);
      });*/
   
});

