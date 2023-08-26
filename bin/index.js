#!/usr/bin/env node
const logger = require('../src/logger');
const arg = require("arg");
const chalk = require("chalk");
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start.js');

try {
    const args = arg({
    '--start': Boolean,
    '--build': Boolean,
    });
    logger.debug("Received args: ", args);

    if (args["--start"]){
        const config = getConfig()
        start(config);
    } 

}   catch (e) {
    logger.debug(chalk.yellow(e.message + "\n"));
    usage();
}
function usage(){
    logger.warning(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app
    `);
}