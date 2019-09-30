module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js', // Nome do arquivo
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: { // Propriedade
        rules: [ // Regras
            {
                test: /\.js$/, // Buscar arquivos JavaScript
                exclude: /node_modules/, // Excluir a pasta node_modules
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};