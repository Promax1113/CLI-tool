const fs = require('fs')
const logger = require('../logger')('commands:meta')
const save = require('../utils/save')

function getMeta(filename, args){
    
    try{
    
        meta = fs.statSync(filename)
        formattedMeta = {'filename': filename,'size': meta['size'], 'creation-date': meta['birthtime']}
        logger.warning(JSON.stringify(formattedMeta))
        if (args == '--save'){
            save.saveOutput(formattedMeta)
        }
        
            
        
    }
    catch (e){
        console.log(e)
        console.log("File not found!")
    }

}

module.exports = { getMeta }