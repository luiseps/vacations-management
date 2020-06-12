var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,
chrome = require('selenium-webdriver/chrome'),
options = new chrome.Options();
options.addArguments('disable-infobars');

var Page = function() {

    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(options).build();
    var driver = this.driver;

    this.open = function (url) {
        return driver.get(url);        
    }

    this.quit = function () {
        return driver.quit();        
    }

    this.find = function (element) {
        driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElement(By.css(element));        
    }

    this.findAll = function (element) {
        driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElements(By.css(element));        
    }

    this.write = function (element, text) {
        return this.find(element).sendKeys(text);        
    }
    
}
