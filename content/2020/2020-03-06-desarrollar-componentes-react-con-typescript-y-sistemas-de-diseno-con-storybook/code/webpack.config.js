module.exports = {
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: 'ts-loader' },
      { test: /\.less$/, use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ]}
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};