const shell = require('shelljs')
const logger = require('../logger')('commands:git-config')


function gitConfigurer(command, value, global){
    try{
        if (command  == undefined && value == undefined){
            shell.exec('git config -l')
        }
        else{
            logger.warning('Take in mind that this command uses the --global flag!')
            if (value == undefined && command != undefined){
                shell.exec(`git config --global ${command}`)
            }
            else{
                shell.exec(`git config --global ${command} ${value}`)
            }
            
        }
        return 200
    } catch (e){
        logger.warning('Error changing that config!')
        let gitStatus = shell.exec('git --version', { silent: true })
        if (!gitStatus['stdout'].includes('git version')){
            logger.warning("You don't have git installed!!")
        }
        return 406
    }
    
    
    
}
module.exports = {gitConfigurer}