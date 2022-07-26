const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1zb3vr',
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com",
    "reporter": "mochawesome",
    "reporterOptions": 
    {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss",
    },

  },
});