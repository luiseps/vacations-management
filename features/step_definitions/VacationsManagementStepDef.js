const assert = require('assert');
const { Given, When, Then, AfterAll, BeforeAll } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { loginPageObjects } = require('../pages_objects/LoginPage');
const { homePageObjects } = require('../pages_objects/HomePage');
const { testData } = require('../utils/Constants')

let driver = new Builder().forBrowser('chrome').build();

BeforeAll(async function(){
    await driver.manage().window().maximize();
})

Given('I want to login on tha vacations platform', async function() {
    await driver.get(testData.homePageUrl);

});

When('I enter my user and password', async function() {
    await driver.findElement(By.id(loginPageObjects.username)).sendKeys(testData.username);
    await driver.findElement(By.id(loginPageObjects.password)).sendKeys(testData.password);
    await driver.findElement(By.css(loginPageObjects.submitBtn)).click();    
});

Then('I should see that {string}', async function(expectedMessage) {

  let messageFieldObject = await driver.findElement(By.css(homePageObjects.bannerLoginSuccessful));
  await driver.wait(until.elementIsVisible(messageFieldObject),5000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, expectedMessage);
    
});

AfterAll( async function(){
    await driver.quit();
});