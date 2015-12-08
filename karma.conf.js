// Karma configuration
// Generated on Sun Jul 13 2014 09:06:13 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)

    basePath: './app/',

    // frameworks to use
    // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [
      'styles/**/*.less'
    ],

    plugins:[
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    //
    //proxies: {
    //  '/': 'http://localhost:8888/'
    //},

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'states/**/!(*.spec).js': ['coverage'],
      'directives/**/!(*.spec).js': ['coverage']
      //'**/*.html': ['ng-html2js']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'coverage'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    coverageReporter: {
      type: 'lcov',
      dir: '../../report/coverage'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
