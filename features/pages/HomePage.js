var Page = require('./Page')


Page.prototype.bannerUserLoggin = function() {
    this.getMessage('p.flash_notice');
}

module.exports = Page;