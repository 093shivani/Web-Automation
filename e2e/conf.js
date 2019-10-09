var protractor = require("protractor");
var reporter = require("cucumber-html-reporter");

exports.config = {
    allSciptsTimeOut: 11000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs:[
        './features/*.feature'
    ],
    capabilities: {
        'browserName' : 'chrome'
    },
    baseUrl : 'https://www.goibibo.com/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts:{
        require: ['./steps/**/*.steps.ts','./hooks/**/*.ts'],
        format: 'json:./report/cucumber_report.json',
        tags: '@current'
    },
    onPrepare(){

        require('ts-node').register({
            project: require('path').join(__dirname,'../tsconfig.json')
        });
        protractor.browser.waitForAngularEnabled(false);
        protractor.browser.manage().window().maximize();
        protractor.browser.manage().timeouts().implicitlyWait(20000);

    },
    onComplete(){
        var options= {
            theme: 'bootstrap',
            jsonFile:'./report/cucumber_report.json',
            output:'./report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "Test Environment" : "DEV",
                "Browser": "Chrome 73.0.3603.103",
                "Pltform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};