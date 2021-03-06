// critical information:
// 1. Entry: src/app.js
// 2. Output
const path = require('path');
const webpack = require('webpack');
// for extracting css and scss files (why? as to not include in bundle.js - make it faster) 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// __dirname contains path to current location
// path.join - best way to join paths - concatenating strings not viable because of edge cases.
// e.g. path.join(__dirname, 'public');

// expose object to another file (to webpack)
// export function depending on environment


// ENV for test setup in package.json - for production auto set by heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// ---> do environment specific setup

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'});
}


module.exports = (env) => {
    // change source map configuration based on environment
    const isProduction = (env === 'production');
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env', env);
    return  {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            // path to project on our machine 
            path: path.join(__dirname, 'public', 'dist'),
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ],
        // stack trace w/o bundle.js - to see line of code in console with actual file name and line number
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            // to serve index.html for routing (i.e. for client side routing)
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

// loader - customize behavior of webpack when it loads a file (e.g. .ts)