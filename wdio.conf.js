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
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080',
                '--user-data-dir=/tmp/chrome-user-data-dir'  // Directorio temporal para evitar conflictos
            ]
        }
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
};
