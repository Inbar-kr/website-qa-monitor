# Website QA Monitor

[![Playwright Tests CI](https://github.com/Inbar-kr/website-qa-monitor/actions/workflows/ci.yml/badge.svg)](https://github.com/Inbar-kr/website-qa-monitor/actions/workflows/ci.yml)


## Project Overview
qa-monitor is an end-to-end automated testing suite built with Playwright designed to monitor the functionality, performance, and responsiveness of the Demoblaze e-commerce website. It runs cross-browser tests simulating real user interactions, validating UI elements, checking for console errors, and measuring page performance.

The project supports multiple browsers and device emulations to ensure consistent user experience across platforms. It integrates with GitHub Actions for continuous integration (CI) and generates detailed HTML reports for test results.

## Key Features
- **Homepage Tests:** Verify homepage availability, page title, navigation bar, and featured product listings.
- **Performance Testing:** Measure page load times and performance metrics.
- **Console Error Detection:** Capture and fail tests if browser console logs contain errors or warnings.
- **Responsiveness Checks:** Validate the site’s layout and elements at various screen sizes and device emulations.
- **Cross-Browser Testing:** Runs tests on Chromium, Firefox, Microsoft Edge, and mobile device emulations.
- **CI/CD Integration:** Automated tests run on GitHub Actions with a matrix strategy across browsers.
- **Detailed Reporting:** Generates HTML reports and screenshots on test failures.

## Tech Stack
- **Testing Framework:** Playwright Test  
- **Languages:** TypeScript / JavaScript  
- **CI:** GitHub Actions  
- **Browsers Supported:** Chromium, Firefox, WebKit (Safari)  
- **Reporting:** Playwright HTML Reporter  

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)

## Installation
1. Install dependencies:
    ```bash
   npm install
3. (Optional) To install Playwright browsers::
    ```bash
   npx playwright install
## Running Tests Locally
- Run all tests:
    ```bash
   npx playwright test
- Run tests for a specific project (browser/device):
    ```bash
   npx playwright test --project="Chromium Desktop"
- View test report after running tests:
    ```bash
   npx playwright show-report
## GitHub Actions CI
- The CI workflow defined in .github/workflows/ci.yml runs tests on ubuntu-latest with a matrix strategy covering multiple browsers and devices.
- Test reports and screenshots of failures are saved in the results/ folder.
## Reporting
- **HTML Reports:** Playwright automatically generates HTML reports saved in `results/html-report`

##### Note: This project is a personal and educational portfolio project. It is not intended for redistribution or external use.