const logger = require("../logger")('utils:save')
const fs = require('fs')


function saveOutput(meta, __filename){
    if (!fs.existsSync(`${process.cwd()}/logs/`)){
        fs.mkdirSync(`${process.cwd()}/logs/`)
    }
    date = new Date()

    let filename = `${__filename}-${date.getFullYear()}.${date.getMonth()}.${date.getDate()}-${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}.txt` 

    fs.writeFileSync(`${process.cwd()}\\logs\\${filename}`, meta)
    logger.highlight("Saved to: ", `${process.cwd()}\\logs\\${filename}`)
}   
module.exports = {saveOutput}