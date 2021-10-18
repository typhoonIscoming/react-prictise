const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const { name } = require('./package.json');

const replaceConfig = () => (config) => {
    config.entry = config.entry.filter(
        (e) => !e.includes('webpackHotDevClient')
    );
  
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
}
module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'red' },
        }),
        replaceConfig(), // 配置微应用，必须要配置output
    ),
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);
            config.open = false;
            config.hot = false;
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            // Return your customised Webpack Development Server config.
            return config;
        }
    }
};