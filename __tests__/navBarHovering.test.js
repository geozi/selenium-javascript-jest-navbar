const website = require("../src/navBarHovering");
const TIME_IN_SECONDS = 20 * 1000;
jest.setTimeout(TIME_IN_SECONDS);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

afterEach(async () => {
  await delay(2000); // 2 seconds delay
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

test("Testing hovering over 'About Us'", async () => {
  let action = website.hoverOverAboutUs();
  await expect(action).resolves.not.toThrow();
});

test("Testing hovering over 'Investor Relations'", async () => {
  let action = website.hoverOverInvestorRelations();
  await expect(action).resolves.not.toThrow();
});

test("Testing hovering over 'Media Center'", async () => {
  let action = website.hoverOverMediaCenter();
  await expect(action).resolves.not.toThrow();
});

test("Testing hovering over 'Careers", async () => {
  let action = website.hoverOverCareers();
  await expect(action).resolves.not.toThrow();
});

test("Testing hovering over 'Sustainability'", async () => {
  let action = website.hoverOverSustainability();
  await expect(action).resolves.not.toThrow();
});

test("Testing hovering over 'Economic Research'", async () => {
  let action = website.hoverOverEconomicResearch();
  await expect(action).resolves.not.toThrow();
});

test("Testing browser window closing", async () => {
  let action = website.closeBrowser();
  await expect(action).resolves.not.toThrow();
});
