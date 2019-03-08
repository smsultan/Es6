webpack.config.js
-----------------
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = config;

.babelrc
{
    "presets": [
        "babel-preset-env"
    ]
}

package.json
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-env": "^1.6.1",
    "webpack": "^4.0.1",
    "webpack-cli": "^2.0.10"
  }
