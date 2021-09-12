var isNotToday = require('./isNotToday')

const shouldDeploy = (listOfDays, now) => {
    return listOfDays.every(isNotToday(now))
}
module.exports = shouldDeploy;