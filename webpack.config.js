const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// let mode = "development"
/*if(process.env.NODE_ENV === "production"){
    mode = "production"
}*/
module.exports = {
    mode:"development",
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },
    module: {
        rules: [
            {
              test:/\.scss$/i,
                use : [MiniCssExtractPlugin.loader , "css-loader" , "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
}