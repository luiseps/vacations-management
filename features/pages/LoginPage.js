var Page = require('./Page');

Page.prototype.openHomePage = function() {
    this.open('https://vacations-management.herokuapp.com/users/sign_in');
}
Page.prototype.usernameField = function(text) {
    this.writeById('user_email', text);
}

Page.prototype.passwordField = function(text) {
    this.writeById('user_password', text);
}

Page.prototype.submitBtn = function() {
    this.findByCss('input.submit').click();
}

Page.prototype.bannerUserLoggin = function() {
    this.getMessage('p.flash_notice');
}


module.exports = Page;