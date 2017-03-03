
let config = {
    entry: {
        index: ['./javascript/index.js'],
        trial: ['./javascript/trial.js']
    },
    output: {
        path: __dirname + '/build/',
        publicPath: "/assets/",
        filename: 'javascript/[name].js'
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
        ]
    }
};


module.exports = config;


