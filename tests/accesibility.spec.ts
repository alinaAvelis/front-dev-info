import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // 1

const main_url = "http://localhost:3000";
// "https://www.front-dev-info.com";

test.describe("homepage", () => {
	// 2
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}, testInfo) => {
		await page.goto(`${main_url}`); // 3

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		await testInfo.attach("accessibility-scan-results", {
			body: JSON.stringify(accessibilityScanResults, null, 2),
			contentType: "application/json",
		});

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

test.describe("postspage", () => {
	// 2
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}, testInfo) => {
		await page.goto(`${main_url}/posts`); // 3

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		await testInfo.attach("accessibility-scan-results", {
			body: JSON.stringify(accessibilityScanResults, null, 2),
			contentType: "application/json",
		});

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

test.describe("postpage", () => {
	// 2
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}, testInfo) => {
		await page.goto(`${main_url}/posts/testing-with-cypress`); // 3

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		await testInfo.attach("accessibility-scan-results", {
			body: JSON.stringify(accessibilityScanResults, null, 2),
			contentType: "application/json",
		});

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

test.describe("resourcespage", () => {
	// 2
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}, testInfo) => {
		await page.goto(`${main_url}/resourses`); // 3

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		await testInfo.attach("accessibility-scan-results", {
			body: JSON.stringify(accessibilityScanResults, null, 2),
			contentType: "application/json",
		});

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

