const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    mode: 'development',

    watch: true,

    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },

    entry: {
        page_login: './source/page_login/main/index.js',
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].bundle.js',
        assetModuleFilename: 'assets/fonts/[name][ext]',
        clean: false
    },


    module: {

        rules: [
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/media/[name][ext]"
                }
            },

            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
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
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
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
