import { join } from 'path';

export const config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: [
    'spec',
    ['html', {
      debug: false,
      outputDir: './reports/html-reports',
      filename: 'report.html',
      reportTitle: 'WebDriverIO Test Report',
      showInBrowser: false
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
