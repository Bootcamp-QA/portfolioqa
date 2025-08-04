exports.config = {
    runner: 'local',
    specs: [
        './tests/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://bootcamp-qa.github.io/portfolioqa/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],

    framework: 'mocha',
    reporters: [
        'spec',
        ['html-nice', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'WDIO Test Report',
            showInBrowser: false,
            useOnAfterCommandForScreenshot: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
