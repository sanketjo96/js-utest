module.exports = function (config) {
    config.set({
      frameworks: ['jasmine'],
      files: ['*.js', '*.spec.js'],
      plugins: ['karma-jasmine', 'karma-chrome-launcher'],
      reporters: ['dots'],
      colors: true,
      singleRun: false,
      browser: ['Chrome']
    });
  };