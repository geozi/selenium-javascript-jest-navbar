const seleniumDriver = require("selenium-webdriver");
const driver = new seleniumDriver.Builder().forBrowser("chrome").build();

/**
 * Opens a website.
 * @param {String} websiteName
 */
async function openWebsite(websiteName) {
  try {
    console.log("Opening the website...");
    await driver.get(websiteName);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Maximizes the browser window.
 */
async function maximizeWebsite() {
  try {
    console.log("Maximizing the browser window...");
    await driver.manage().window().maximize();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Closes the pop-up window.
 */
async function closePopUpWindow() {
  try {
    console.log("Closing the pop-up window...");
    let element = await driver.findElement(
      seleniumDriver.By.className("onetrust-close-btn-ui")
    );
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks the 'About Us' navbar category.
 */
async function clickAboutUs() {
  try {
    console.log("Clicking the 'About Us' navbar category...");
    let element = await driver.findElement(seleniumDriver.By.id("about-us"));
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks the 'Investor Relations' navbar category.
 */
async function clickInvestorRelations() {
  try {
    console.log("Clicking the 'Investor Relations' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("investor_relations")
    );
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks the 'Media Center' navbar category.
 */
async function clickMediaCenter() {
  try {
    console.log("Clicking the 'Media Center' navbar category...");
    let element = await driver.findElement(seleniumDriver.By.id("press"));
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks the 'Sustainability' navbar category.
 */
async function clickSustainability() {
  try {
    console.log("Clicking the 'Sustainability' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("sustainability")
    );
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Clicks the 'Economic Research' navbar category.
 */
async function clickEconomicResearch() {
  try {
    console.log("Clicking the 'Economic Research' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("economic_research")
    );
    await element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Returns to main page.
 */
async function goBackToMainPage() {
  try {
    console.log("Navigating back to main page...");
    await driver.navigate().back();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Closes the browser window.
 */
async function closeBrowser() {
  try {
    console.log("Closing browser window...");
    await driver.close();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  openWebsite,
  maximizeWebsite,
  closePopUpWindow,
  clickAboutUs,
  clickInvestorRelations,
  clickMediaCenter,
  clickSustainability,
  clickEconomicResearch,
  goBackToMainPage,
  closeBrowser,
};
