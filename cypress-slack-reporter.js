const slackReporter = require('cypress-slack-reporter/reporter');

module.exports = (on, config) => {
    on('after:run', (results) => {
        return slackReporter(results, config);
    });
};
