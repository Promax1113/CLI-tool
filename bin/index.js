#!/usr/bin/env node
const arg = require("arg");
const chalk = require("chalk");
const path = require("path")
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start.js');

try {
    const args = arg({
    '--start': Boolean,
    '--build': Boolean,
    });

    if (args["--start"]){
        const config = getConfig()
        start(config);
    } 

}   catch (e) {
    console.log(chalk.yellow(e.message + "\n"));
    usage();
}
function usage(){
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app
    `);
}