const Reporter = require("jasmine-terminal-reporter");
const  reporter = new Reporter({
  // includeStackTrace: true,
  isVerbose: true,
});

jasmine.getEnv().addReporter(reporter);

