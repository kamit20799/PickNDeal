const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pickndeal.oidea.online/laravel_app/public/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
