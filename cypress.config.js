const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}",
      "cypress/e2e/**/*.feature",
    ],
    setupNodeEvents,
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});

