const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    mode: 'development',

    entry: {
        page_login: './source/page_login/main/index.js',
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[contenthash].bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]',
        clean: true
    },


    module: {

        rules: [
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve("./build_configs/babel.config.json")
                        }
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_configs/postcss.config.js")
                            },
                        }
                    },
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    { 
                        loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_configs/postcss.config.js")
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },

        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [
        new CssMiniExtractPlugin({
            filename: "assets/css/[name].css" 
        }),
        new HtmlWebpackPlugin({ 
            template: 'source/page_login/html/login.html',
            filename: "[name].html" 
        })
    ],

}
