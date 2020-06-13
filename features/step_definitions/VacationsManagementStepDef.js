const { Given, When, Then, After, AfterAll } = require('cucumber');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var Page = require('../pages/LoginPage');
var page;

Given('I want to login on tha vacations platform', async function() {
    page = new Page();
    await page.openHomePage();

});

When('I enter my user {string} and password {string}', async function(user, password) {
    await page.usernameField(user);
    await page.passwordField(password);
    await page.submitBtn();
});

Then('I should see that {string}', async function(expectedMessage) {
    var messageFieldObject = await  page.findByCss('p.flash_notice');
    let actualResult = await messageFieldObject.getText();
    assert.equal(actualResult, expectedMessage);
});
