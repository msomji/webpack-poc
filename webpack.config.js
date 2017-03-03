
let config = {
    entry: {
        index: ['./styles/index.scss'],
        trial: ['./styles/trial.scss']
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


