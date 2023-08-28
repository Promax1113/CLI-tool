#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require("arg");
const chalk = require("chalk");
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start.js');
const meta = require('../src/commands/meta')

try {
    const args = arg({
    '--meta': Boolean,
    '--save': Boolean,
    '--build': Boolean,
    });
    logger.debug("Received args: ", args);


    if (args["--meta"]){
        // const config = getConfig()
        // start(config)
        if (args['--save']){
            meta.getMeta(process.argv[3], '--save')
        }
        else{
            meta.getMeta(process.argv[3], NaN)
        }
        
        
    } 

}   catch (e) {
    logger.debug(e.message + "\n");
    usage();
}
function usage(){
    logger.warning(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--meta {filepath}')}\tGets the metadata of file
    ${chalk.greenBright('--save')}\tWill save the output of the command to a file
    ${chalk.greenBright('--build')}\tBuilds the app
    `);
}