var Page = require('./Page')


Page.prototype.bannerUserLoggin = function() {
    this.wait('p.flash_notice');
}

module.exports = Page;