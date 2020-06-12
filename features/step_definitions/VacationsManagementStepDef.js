const { Given, When, Then } = require('cucumber');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
var Page = require('../pages/LoginPage')

var page = new Page();
page.driver.manage().window().setPosition(0, -600);


Given('I want to login on tha vacations platform', function () {
    page.open('https://vacations-management.herokuapp.com/users/sign_in');
});

When('I enter my user {string} and password {string}', function (user, password) {

});


Then('I should see that {string}', function (string) {

});