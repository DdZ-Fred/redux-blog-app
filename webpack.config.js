module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    // web server root directory
    contentBase: './',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-1',
        ],
      },
    ],
  },
};
