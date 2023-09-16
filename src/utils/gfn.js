const logger = require("../logger")('utils:gfn')

module.exports = function gfnETR(peopleNow, peopleStart, timeElapsed){
    
    let vel = (parseInt(peopleStart) - parseInt(peopleNow))/parseInt(timeElapsed)
    logger.warning(`About ${Math.round(vel)} people/minute`)
    let timeRemaining = parseInt(peopleNow) / vel
    let formattedTime = `${Math.floor(timeRemaining)} minutes and ${Math.round((timeRemaining - Math.floor(timeRemaining)) * 60)} seconds`
    logger.highlight(`ETR: ${formattedTime} remaining approximately.`)

}
