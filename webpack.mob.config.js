const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin;

const client = {
    mode: 'development',
    entry: {
        client: './src/mobile/client.tsx'
    },
    output: {
        path: path.join(__dirname, 'public/build-mob'),
        filename: '[name].js',
        publicPath: '/build-mob/',
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    },
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new ManifestPlugin()
    ],
    resolve: {
        alias:{
          React: path.resolve(__dirname, 'node_modules/react/'),
          ReactDOM: path.resolve(__dirname, 'node_modules/react-dom/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}

const server = {
    mode: 'development',
    entry: {
        client: './src/mobile/server.tsx'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'server/build-mob'),
        filename: 'server.js',
        library: 'MyLibrary',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    },
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}

module.exports = [client, server];