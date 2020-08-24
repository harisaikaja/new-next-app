const path = require('path')
const { config } = require('process')

module.exports = {
    target: 'serverless',
    webpack: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, 'src/pages')
        return config
    },
    env: {},
}