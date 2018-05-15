var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve('./assets/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ["url-loader?limit=10000", "img-loader"]
            }
        ]
    }
}
