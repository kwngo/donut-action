var isNotToday = require('./isNotToday')

const shouldDeploy = (listOfDays, now) => {
    var deploy = listOfDays.every(isNotToday(now))
    return deploy
}
module.exports = shouldDeploy;