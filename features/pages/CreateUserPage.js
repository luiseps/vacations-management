var Page = require('./Page');

Page.prototype.firstNameField = function(text) {
    this.writeById('employee_first_name', text);
}

Page.prototype.lastNameField = function(text) {
    this.writeById('employee_last_name', text);
}

Page.prototype.emailField = function(text) {
    this.writeById('employee_email', text);
}

Page.prototype.leaderField = function(text) {
    this.writeById('employee_leader_name', text);
}

Page.prototype.yearSelector = function(text) {
    this.writeById('employee_start_working_on_1i', text);
}

Page.prototype.monthSelector = function(text) {
    this.writeById('employee_start_working_on_2i', text);
}

Page.prototype.daySelector = function(text) {
    this.writeById('employee_start_working_on_3i', text);
}

Page.prototype.createButton = function(text) {
    tthis.findByCss('input:nth-child(1)').click();
}

module.exports = Page;