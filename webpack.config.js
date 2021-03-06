module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./webpack/entry.js",
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      path: '/home/nikita/Documents/examined/assets/javascripts/',
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
        },
      
        { test: /\.css$/, use: 'css-loader' },
      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
