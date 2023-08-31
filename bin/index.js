#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require("arg");
const chalk = require("chalk");
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start.js');
const meta = require('../src/commands/meta')
const dev = require('../src/utils/dev')
const os = require('os')

try {
    const args = arg({
    '--meta': Boolean,
    '--save': Boolean,
    '--help': Boolean,
    '--dev-setup': Boolean,
    });
    logger.debug("Received args: ", args);


    if (args["--meta"] && !args['--help']){

        let metaIndex = process.argv.indexOf('--meta')
        
        // const config = getConfig()
        // start(config)
        if (args['--save']){
            meta.getMeta(process.argv[metaIndex + 1], '--save')
        }
        else{
            meta.getMeta(process.argv[metaIndex + 1], NaN)
        }
        
        
    } 
    else if (args['--help'] && !args['--meta']){
        usage()
    }
    else if (args['--dev-setup']){
        dev.devSetup(os.platform)
    }
    else{
        throw(Error('\nInvalid command!\n'))
    }

}   catch (e) {
    logger.warning(e.message)
    usage();
}
function usage(){
    logger.warning(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--meta {filepath}')}\t Gets the metadata of file.
    ${chalk.greenBright('[CMD] --save')}\t Will save the output of the command to a file, except for --help.
    ${chalk.greenBright('--help')}\t Displays this message, must be the only one called.
    `);
}

module.exports = {usage}