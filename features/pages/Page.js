var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chromedriver = require('chromedriver');
chrome = require('selenium-webdriver/chrome'),
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build()),
    options = new chrome.Options('webdriver-manager start --standalone');
options.addArguments('disable-infobars');

var Page = function() {

    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(options).build();
    var driver = this.driver;

    this.open = function(url) {
        return driver.get(url);
    }

    this.quit = function() {
        return driver.quit();
    }

    this.findByCss = function(element) {
        driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElement(By.css(element));
    }
    this.findId = function(element) {
        driver.wait(until.elementLocated(By.id(element)), 5000);
        return driver.findElement(By.id(element));
    }

    this.findAll = function(element) {
        driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElements(By.css(element));
    }

    this.write = function(element, text) {
        return this.find(element).sendKeys(text);
    }

    this.writeById = function(element, text) {
        return this.findId(element).sendKeys(text);
    }

    this.getMessage = function(element) {
        return driver.wait(until.elementLocated(this.findByCss(element), 10000))
            .getText();

    }
    this.quit = function() {
        return driver.quit();
    }

}

module.exports = Page;