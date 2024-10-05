const website = require("../src/navBarClicking");
const TIME_IN_SECONDS = 20 * 1000;
jest.setTimeout(TIME_IN_SECONDS);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

afterEach(async () => {
  await delay(5000); // 5 seconds delay
});

test("Testing website opening", async () => {
  let action = website.openWebsite("https://www.allianz.com/en.html");
  await expect(action).resolves.not.toThrow();
});

test("Testing browser window maximization", async () => {
  let action = website.maximizeWebsite();
  await expect(action).resolves.not.toThrow();
});

test("Testing popUpWindow closing", async () => {
  let action = website.closePopUpWindow();
  await expect(action).resolves.not.toThrow();
});

test("Testing clicking the 'About Us'", async () => {
  let action = website.clickAboutUs();
  await expect(action).resolves.not.toThrow();
});

test("Testing returning to main page", async () => {
  let action = website.goBackToMainPage();
  await expect(action).resolves.not.toThrow();
});

test("Testing clicking the 'Investor Relations'", async () => {
  let action = website.clickInvestorRelations();
  await expect(action).resolves.not.toThrow();
});

test("Testing returning to main page", async () => {
  let action = website.goBackToMainPage();
  await expect(action).resolves.not.toThrow();
});

test("Testing clicking the 'Media Center'", async () => {
  let action = website.clickMediaCenter();
  await expect(action).resolves.not.toThrow();
});

test("Testing returning to main page", async () => {
  let action = website.goBackToMainPage();
  await expect(action).resolves.not.toThrow();
});

test("Testing clicking the 'Sustainability'", async () => {
  let action = website.clickSustainability();
  await expect(action).resolves.not.toThrow();
});

test("Testing returning to main page", async () => {
  let action = website.goBackToMainPage();
  await expect(action).resolves.not.toThrow();
});

test("Testing clicking the 'Economic Research'", async () => {
  let action = website.clickEconomicResearch();
  await expect(action).resolves.not.toThrow();
});

test("Testing returning to main page", async () => {
  let action = website.goBackToMainPage();
  await expect(action).resolves.not.toThrow();
});

test("Testing browser window closing", async () => {
  let action = website.closeBrowser();
  await expect(action).resolves.not.toThrow();
});
