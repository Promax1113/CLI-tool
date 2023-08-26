const logger = require('../logger')('commands:start');


module.exports = function start_tool(config) {
    logger.highlight('  Starting the app  ')
    logger.debug('Received configuration in start -', config)
}
