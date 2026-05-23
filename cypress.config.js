const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnable: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },  
    cypressMochawesomeReporterReporterOption: {
      charts: true,
      reporterPageTitles: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
