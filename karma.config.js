module.exports = function (config) {
    config.set({
      frameworks: ['jasmine'],
      files: ['*.js', '*.spec.js'],
      plugins: ['karma-jasmine'],
      reporters: ['dots'],
      colors: true,
      singleRun: false,
    });
  };