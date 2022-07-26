
import path from "path";

const webpack = require("webpack");
const childProcess = require("child_process");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const devMode = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
    mode: 'development',
    entry: {
        main1: './src/app.tsx'
    },
    output: {
        path: path.resolve('./dist'), // 절대경로 입력
        filename: '[name].tsx',
        // assetModuleFilename: '[name][ext][hash][query]'
    },
    module: {
        rules: [
           {
                test:/\.(css|scss|sass)$/i,
                use: [
                    !devMode
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg)$/,
                type: 'asset/resource',
                
            },
            {
                test:/\.(png|jpg)$/,
                type: 'asset/inline',
            },
            {
                test:/\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Build Date: ${new Date().toLocaleString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
            `
        }),
        new webpack.DefinePlugin({ // 환경변수 추가 가능
            
        }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            minify: !devMode ? {
                collapseWhitespace: true, // 한줄로 만들기
                removeComments: true, // 주석 제거
            } : {}
        }),
        new CleanWebpackPlugin({}), // 빌드 시 dist 디렉토리 삭제 후 재생성
        ...(!devMode 
            ? [new MiniCssExtractPlugin({ filename: 'app.css' })]
            :[])
    ]
    
}