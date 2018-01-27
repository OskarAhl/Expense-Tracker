// critical information:
// 1. Entry: src/app.js
// 2. Output
const path = require('path'); 

// __dirname contains path to current location
// path.join - best way to join paths - concatenating strings not viable because of edge cases.
// e.g. path.join(__dirname, 'public');

// expose object to another file (to webpack)
module.exports = {
    entry: './src/playground/hoc.js',
    output: {
        // path to project on our machine 
        path: path.join(__dirname, 'public'),
        // common name for webpack - but can name it whatever you want
        filename: 'bundle.js'
    },
    // module - set up rules for loader
    module: {
        // any file that ends with .js and is not in node_modules we will run babel-loader (configured in .babelrc)
        rules: [{
            loader: 'babel-loader',
            // test - what files do we want to run the loader on e.g. only js files
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            // allows .scss and .css
            test:/\.s?css$/,
            // in use can provide an array of loaders
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // stack trace w/o bundle.js - to see line of code in console with actual file name and line number
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        // to serve index.html for routing (i.e. for client side routing)
        historyApiFallback: true
    }
};

// loader - customize behavior of webpack when it loads a file (e.g. .ts)
