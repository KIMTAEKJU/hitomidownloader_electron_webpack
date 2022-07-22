import path from "path";

const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        main1: './src/app.tsx'
    },
    output: {
        path: path.resolve('./dist'), // 절대경로 입력
        filename: '[name].tsx?[hash]'
    },
    module: {
        rules: [
           {
                test:/\.css$/i,
                use: ['style-loader','css-loader']
           } 
        ]

        
    }
}