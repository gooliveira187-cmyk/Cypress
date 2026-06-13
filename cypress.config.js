const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter', // Corrigido para "Enabled"
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    // Adicionado o "s" em Options
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes', // O termo correto é reportPageTitle (singular)
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // Importante: O plugin do mochawesome deve ser inicializado aqui
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});