import { defineConfig } from 'cypress';
import slackReporter = require('cypress-slack-reporter');

export default defineConfig({
  "reporter": "cypress-slack-reporter",
  "env": {
    "slackWebhookUrl": "https://hooks.slack.com/services/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"
  },
  e2e: {
    projectId: "6g81p2",
    baseUrl:"https://sparkling-malasada-58f412.netlify.app/"
  }
})