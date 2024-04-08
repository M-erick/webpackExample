const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js', // Name of the generated bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
  },
};
