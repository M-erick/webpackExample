const path = require('path');
const webpack  = require('webpack');
module.exports = {
  // Entry point for your application
  entry: './src/index.js',
  devServer:{
    hot:true,
    port:9000,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),

  ],

  // Output configuration
  output: {
    filename: 'bundle.js', // Name of the generated bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
  },
  mode:"development"
};
