// next.config.js
module.exports = {
    images: {
        domains: [
            // 'https://miro.medium.com'  
        ],
        fallback: true,
        dangerouslyAllowAllDomains: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });
        return config;
    },
    webpackDevMiddleware: (config) => {
        return config;
    },
};
