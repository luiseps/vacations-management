const assert = require('assert');
const { Given, When, Then, AfterAll } = require('cucumber');
const { By, until, Builder, Alert} = require('selenium-webdriver');
const { driver } = require('./VacationsManagementStepDef')
const { loginPageObjects } = require('../pages_objects/LoginPage');
const { homePageObjects } = require('../pages_objects/HomePage');
const { createUserPageObjects } = require('../pages_objects/CreateUserPage')
const { testData } = require('../utils/Constants');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { table } = require('console');


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

    await driver.findElement(By.linkText(createUserPageObjects.backButton)).click(); 
    
    let allRows = await driver.findElements(By.xpath("//div[@id='content']/table/tbody/tr"));
  
    let value;
    let i = 2;
    let rowId = 0;
    while(i<=allRows.length){
        value = await driver.findElement(By.css(`tr:nth-child(${i}) > td:nth-child(4)`)).getText();
        
        if(value == testData.leader){
            rowId = i;
        }
        i++;
    }    
   
    let name = await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(1)`)).getText();
    assert.equal(name, testData.name);    

    let lastName = await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(2)`)).getText();
    assert.equal(lastName, testData.lastName); 

    let id = await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(3)`)).getText();
    assert.equal(id, testData.id); 

    let leader = await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(4)`)).getText();
    assert.equal(leader, testData.leader); 

    let date = `${testData.monthNumber}/${testData.day}/${testData.year}`
    let startedWorking = await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(5)`)).getText();
    assert.equal(startedWorking, date); 

});


When('I delete a registared user', async function () {

    let allRows = await driver.findElements(By.xpath("//div[@id='content']/table/tbody/tr"));
    let value;
    let i = 2;
    let rowId = 0;
    while(i<=allRows.length){
        value = await driver.findElement(By.css(`tr:nth-child(${i}) > td:nth-child(4)`)).getText(); 
        if(value == testData.leader){
            rowId = i;
        }
        i++;
    }  

    await driver.findElement(By.css(`tr:nth-child(${rowId}) > td:nth-child(9)`)).click(); 
    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.accept();
    await driver.sleep(2000);
 
});


Then('I should see that the user was deleted', async function () {

    let allRows = await driver.findElements(By.xpath("//div[@id='content']/table/tbody/tr")); 
    let i = 2;
    let rowId = 0;
    while(i<=allRows.length){
        value = await driver.findElement(By.css(`tr:nth-child(${i}) > td:nth-child(4)`)).getText();
        if(value == testData.leader){
            rowId = i;
        }
        i++;
    }    
    assert.equal(rowId,0);
});