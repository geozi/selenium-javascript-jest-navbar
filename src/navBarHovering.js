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
    element.click();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the "About Us" navbar category.
 */
async function hoverOverAboutUs() {
  try {
    console.log("Hovering over the 'About Us' navbar category...");
    let element = await driver.findElement(seleniumDriver.By.id("about-us"));
    await driver.actions().move({ origin: element }).perform();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the "Investor Relations" navbar category.
 */
async function hoverOverInvestorRelations() {
  try {
    console.log("Hovering over the 'Investor Relations' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("investor_relations")
    );
    await driver.actions().move({ origin: element }).perform();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the "Media Center" navbar category.
 */
async function hoverOverMediaCenter() {
  try {
    console.log("Hovering over the 'Media Center' navbar category...");
    let element = await driver.findElement(seleniumDriver.By.id("press"));
    await driver.actions().move({ origin: element }).perform();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the "Careers" navbar category.
 */
async function hoverOverCareers() {
  try {
    console.log("Hovering over the 'Careers' navbar category...");
    let element = await driver.findElement(seleniumDriver.By.id("careers"));
    await driver.actions().move({ origin: element }).perform();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the 'Sustainability' navbar category.
 */
async function hoverOverSustainability() {
  try {
    console.log("Hovering over the 'Sustainability' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("sustainability")
    );
    await driver.actions().move({ origin: element }).perform();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hovers over the 'Economic Research' navbar category.
 */
async function hoverOverEconomicResearch() {
  try {
    console.log("Hovering over the 'Economic Research' navbar category...");
    let element = await driver.findElement(
      seleniumDriver.By.id("economic_research")
    );
    await driver.actions().move({ origin: element }).perform();
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
  hoverOverAboutUs,
  hoverOverInvestorRelations,
  hoverOverMediaCenter,
  hoverOverCareers,
  hoverOverSustainability,
  hoverOverEconomicResearch,
  closePopUpWindow,
  closeBrowser,
};
