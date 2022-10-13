const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kevinufkes.ca',
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 90000,
    viewportWidth: 2560,
    viewportHeight: 1440,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});


