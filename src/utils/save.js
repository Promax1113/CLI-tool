const logger = require("../logger")('utils:save')
const fs = require('fs')


function saveOutput(meta){
    if (!fs.existsSync(`${process.cwd()}/logs/`)){
        fs.mkdirSync(`${process.cwd()}/logs/`)
    }
    date = new Date()
    filename = `${meta['filename']}-${date.getFullYear()}.${date.getMonth()}.${date.getDate()}-${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}.txt` 
    fs.writeFileSync(`${process.cwd()}\\logs\\${filename}`, JSON.stringify(meta))
    logger.highlight("Saved to: ", `${process.cwd()}\\logs\\${filename}`)
}   
module.exports = {saveOutput}