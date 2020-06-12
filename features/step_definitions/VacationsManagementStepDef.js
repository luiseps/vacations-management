const { Given, When, Then, After } = require('cucumber');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var Page = require('../pages/LoginPage');
var HomePage = require('../pages/HomePage');

var page;

Given('I want to login on tha vacations platform', function() {
    page = new Page();
    page.openHomePage();

});

When('I enter my user {string} and password {string}', function(user, password) {
    page.usernameField(user);
    page.passwordField(password);
    page.submitBtn();
});

Then('I should see that {string}', function(expectedMessage) {
    // var homepage = new HomePage();
    //console.log(homepage.bannerUserLoggin());


});