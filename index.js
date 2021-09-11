const core = require('@actions/core');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var isToday = require('dayjs/plugin/isToday')

var isNotToday = require('./isNotToday')


dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)

dayjs.tz.setDefault("America/New_York")



// most @actions toolkit packages have async methods
async function run() {
  try {
    var days = core.getInput('days', {required: true})
    var timezoneName = core.getInput('timezone')
    var listOfDays = days.split(",")
    var now = dayjs()

    core.setOutput('deploy', true)
    dayjs.tz.setDefault(timezoneName)
    core.info("Set timezone to " + timezoneName)

    var deploy = listOfDays.every(isNotToday(now))
    if (!deploy) {
      core.setOutput('deploy', false)
    }
    return
  } catch (error) {
    core.setFailed(error.message);
    core.setOutput('deploy', false)
  }
}

run();
