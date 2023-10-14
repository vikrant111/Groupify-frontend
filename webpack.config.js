module.exports = (env) => {
    const webpackConfigFile = `./webpack.${env.env}.config.js`;
    return  require(webpackConfigFile);
}