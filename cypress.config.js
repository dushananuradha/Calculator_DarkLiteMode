const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "6g81p2",
    CYPRESS_RECORD_KEY : "bd2d68ab-bd16-4f23-9a80-bd5fc4cd14d3"
  },
});
