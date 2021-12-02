const puppeteer = require("puppeteer");
let page;
const browserOpenpromise = puppeteer.launch({
	headless: false,
	slowMo: true,
	defaultViewport: null,
	args: ["--start-maximized"],
});
browserOpenpromise
	.then(function (browser) {
		//currently opened tab
		const pagesArrpromise = browser.pages();
		return pagesArrpromise;
	})
	.then(function (browserPages) {
		page = browserPages[0];
		let gotoPromise = page.goto("https://www.google.com/");
		return gotoPromise;
	})
	.then(function () {
		// waiting for the element to appear on the page
		let elementWaitPromise = page.waitForSelector("input[type='text']", {
			visible: true,
		});
		return elementWaitPromise;
	})
	.then(function () {
		//type any element on that page -> selector
		let keyWillBeSendPromise = page.type("input[type='text']", "Youtube");
		return keyWillBeSendPromise;
	})
	.then(function () {
		// page.keyboard is used to type special charactar
		let enterWillBePressed = page.keyboard.press("Enter");
		return enterWillBePressed;
	})
	.then(function () {
		let elementWaitpromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
			visible: true,
		});
		return elementWaitpromise;
	})
	.then(function () {
		// mouse
		let clickWillNeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
		return clickWillNeSendPromise;
	})
	.catch(function (err) {
		console.log(err);
	});
