const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { By, until, Builder} = require('selenium-webdriver');
//const { driver } =  require('./VacationsManagementStepDef');
const { loginPageObjects } = require('../pages_objects/LoginPage');
const { testData } = require('../utils/Constants')

let driver = new Builder().forBrowser('chrome').build();

Given('I am logged in the vacation platform', {timeout: 2 * 5000}, async function () {
    await driver.get(testData.homePageUrl);
    await driver.findElement(By.id(loginPageObjects.username)).sendKeys(testData.username);
    await driver.findElement(By.id(loginPageObjects.password)).sendKeys(testData.password);
    await driver.findElement(By.css(loginPageObjects.submitBtn)).click();      
});


When('I fill the registration form', async function () {

});

Then('I should see that a new user was created', async function () {

});