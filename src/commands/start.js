const logger = require('../logger');


module.exports = function start_tool(config) {
    logger.highlight(chalk.bgCyanBright('  Starting the app  '))
    logger.debug(chalk.gray('Received configuration in start -'), config)
}
