#!/usr/bin/env node
const logger = require("../src/logger")("bin");
const arg = require("arg");
const chalk = require("chalk");
const getConfig = require("../src/config/config-mgr");
const start = require("../src/commands/start.js");
const gfn = require("../src/utils/gfn")
const meta = require("../src/commands/meta");
const dev = require("../src/utils/dev");
const os = require("os");
const gitConfig = require("../src/commands/git-config");

try {
  const args = arg({
    "--meta": Boolean,
    "--save": Boolean,
    "--help": Boolean,
    "--dev-setup": Boolean,
    "--gitcfg": Boolean,
    "--gfneta": Boolean,
  });
  logger.debug("Received args: ", args);

  if (args["--meta"] && !args["--help"]) {
    let metaIndex = process.argv.indexOf("--meta");

    // const config = getConfig()
    // start(config)
    if (args["--save"]) {
      meta.getMeta(process.argv[metaIndex + 1], "--save");
    } else {
      meta.getMeta(process.argv[metaIndex + 1], NaN);
    }
  } else if (args["--help"] && !args["--meta"]) {
    usage();
  } else if (args["--dev-setup"]) {
    dev.devSetup(os.platform);
  } else if (args["--gitcfg"] && !args["--meta" && !args["--help"]]) {
    let configIndex = process.argv.indexOf("--gitcfg");
    gitConfig.gitConfigurer(
      process.argv[configIndex + 1],
      process.argv[configIndex + 2],
      true
    );
  
  }else if (args['--gfneta']){
    cmdIndex = process.argv.indexOf("--gfneta");
    gfn(process.argv[cmdIndex + 1], process.argv[cmdIndex + 2], process.argv[cmdIndex + 3]);
  } else if (!args) {
    usage();
  } else {
    throw Error("\nInvalid command!\n");
  }
} catch (e) {
  logger.warning(e);
  usage();
}

function usage(){
    logger.warning(`${chalk.whiteBright('sysnutils [CMD]')}
    ${chalk.greenBright('--meta {filepath}')}\t Gets the metadata of file.
    ${chalk.greenBright('--gfneta <currentPeople> <startingPeople> <timeElapsedInMinutes>')}\t Returns ETA and velocity of the Geforce Now queue.
    ${chalk.greenBright('<CMD> --save')}\t Will save the output of the command to a file, except for --help.
    ${chalk.greenBright('--help')}\t Displays this message, must be the only one called though.
    ${chalk.greenBright('--gitcfg {parameter} {value} ')}\t Lets you change the git config.
    `);
}

module.exports = { usage };
