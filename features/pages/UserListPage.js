var Page = require('./Page');

Page.prototype.deleteButton = function(text) {
    this.findByCss('a:nth-child(1)').click();
}

module.exports = Page;

