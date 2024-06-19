module.exports = function override(config, env) {
    if (env === 'development') {
        config.devServer = {
            ...config.devServer,
            allowedHosts: ['all'],
        };
    }
    return config;
};
