var path = require('path');

// resolve: {
// 	fallback: {
// 		path: require.resolve( 'path-browserify' ),
// 	},
// },

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" 
            }, {
                loader: "sass-loader"
            }],
            test: /\.(png|jpg)$/, 
            use: [{
                loader: 'file-loader'
            }],
        }]
       
    }
}