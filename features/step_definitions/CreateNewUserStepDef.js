const assert = require('assert');
const { Given, When, Then, AfterAll } = require('cucumber');
const { By, until, Builder} = require('selenium-webdriver');
const { driver } = require('./VacationsManagementStepDef')
const { loginPageObjects } = require('../pages_objects/LoginPage');
const { homePageObjects } = require('../pages_objects/HomePage');
const { createUserPageObjects } = require('../pages_objects/CreateUserPage')
const { testData } = require('../utils/Constants')


Given('I am logged in the vacation platform', {timeout: 4 * 5000}, async function () {
    await driver.get(testData.homePageUrl);
    await driver.findElement(By.id(loginPageObjects.username)).sendKeys(testData.username);
    await driver.findElement(By.id(loginPageObjects.password)).sendKeys(testData.password);
    await driver.findElement(By.css(loginPageObjects.submitBtn)).click();
    
});


When('I fill the registration form', {timeout: 4 * 5000}, async function () {

    await driver.findElement(By.linkText(homePageObjects.formButton)).click(); 

    await driver.findElement(By.id(createUserPageObjects.firstName)).sendKeys(testData.name);
    await driver.findElement(By.id(createUserPageObjects.lastName)).sendKeys(testData.lastName);
    await driver.findElement(By.id(createUserPageObjects.email)).sendKeys(testData.email);
    await driver.findElement(By.id(createUserPageObjects.id)).sendKeys(testData.id);
    await driver.findElement(By.id(createUserPageObjects.leader)).sendKeys(testData.leader);
    await driver.findElement(By.id(createUserPageObjects.year)).sendKeys(testData.year);
    await driver.findElement(By.id(createUserPageObjects.month)).sendKeys(testData.month);
    await driver.findElement(By.id(createUserPageObjects.day)).sendKeys(testData.day);
    
    var sbmtBtn = await driver.wait(until.elementLocated(By.css(createUserPageObjects.createUserBtn)), 5000);
    await driver.wait(until.elementIsVisible(sbmtBtn, 5000)).click();

});

Then('I should see that a new user was created', async function () {

   
    var allRows = await driver.findElements(By.xpath("//div[@id='content']/table/tbody/tr"));
    var allColumns = await driver.findElements(By.xpath("//div[@id='content']/table//tbody/tr[1]/th"));
    
    console.log(allRows.length, allColumns.length);
    for(let i = 2; i<allRows.length; i++){

        for(let j = 1; j<=allColumns.length; j++){
            let value = await driver.findElement(By.css(`tr:nth-child(${i}) > td:nth-child(${j})`)).getText();  
            console.log(value);
            
        }
    }
});

When('I delete a registared user', function () {
   
});

Then('I should see that the user was deleted', function () {

});