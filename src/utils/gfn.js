const logger = require("../logger")('utils:gfn')

module.exports = function getETA(peopleNow, peopleStart, timeElapsed){
    
    let vel = (parseInt(peopleStart) - parseInt(peopleNow))/parseInt(timeElapsed)
    logger.warning(`About ${Math.round(vel)} people/minute`)
    let timeRemaining = vel * parseInt(peopleNow)
    let formattedTime = `${Math.floor(timeRemaining)} minutes and ${Math.round((timeRemaining - Math.floor(timeRemaining)) * 60)} seconds`
    logger.highlight(`ETA: ${formattedTime} remaining approximately.`)

}
