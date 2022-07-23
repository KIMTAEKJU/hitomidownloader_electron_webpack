import path from "path";

module.exports = {
    mode: 'development',
    entry: {
        main1: './src/app.tsx'
    },
    output: {
        path: path.resolve('./dist'), // 절대경로 입력
        filename: '[name].tsx',
        assetModuleFilename: '[name][ext][hash][query]'
    },
    module: {
        rules: [
           {
                test:/\.css$/i,
                use: ['style-loader', {
                    loader:'css-loader',
                    
                }]
            },
            {
                test:/\.(png|jpg)$/,
                type: 'asset/resource',
                
            },
            {
                test:/\.(png|jpg)$/,
                type: 'asset/inline',
            }
        ]
    }
}