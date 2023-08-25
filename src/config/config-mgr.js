const chalk = require('chalk');
const {cosmiconfigSync} = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');
const schema = require("./schema.json");
const Ajv = require('ajv').default
const ajv = new Ajv();

module.exports = function getConfig() {
    const result = configLoader.search(process.cwd());
    if (!result) {
      console.log(chalk.yellow('Could not find configuration, using default'));
      return { port: 1234 };
    } else {
      const isValid = ajv.validate(schema, result.config);
      console.log(isValid)
      if (!isValid) {
      console.log(chalk.yellow('Invalid configuration was supplied'));
      console.log(ajv.errors);
      process.exit(1);
      }
      console.log('Found configuration', result.config);
      return result.config;
    }
}