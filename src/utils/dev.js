const shelljs = require('shelljs')
const logger = require('../logger')('utils:dev')
const usage = require('../../bin/index')

function devSetup(os){
    if (os != 'win32'){
        process.chdir('setup-utils/')
        shelljs.exec('setup.sh')
    }
    else if (os == 'win32') {
        process.chdir('setup-utils/')
        shelljs.exec('setup.bat')
    }
    else{
        logger.warning('\nInvalid OS for this command\n')
        usage.usage()
    }

}
module.exports = {devSetup}