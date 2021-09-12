const core = require('@actions/core');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var isToday = require('dayjs/plugin/isToday')

var isNotToday = require('./isNotToday')


dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)

// most @actions toolkit packages have async methods
async function run() {
  try {
    var days = core.getInput('days', {required: true})
    var timezoneName = core.getInput('timezone')
    if (!timezoneName) {
      timezoneName = "America/New_York"
    }
    core.info("Set timezone to " + timezoneName)
    dayjs.tz.setDefault(timezoneName)

    var listOfDays = days.split(",")
    var now = dayjs()

    core.info("Days to not deploy: " + listOfDays)
    core.setOutput('deploy', true)

    var deploy = listOfDays.every(isNotToday(now))
    if (!deploy) {
      core.info("Setting deploy to false")
      core.setOutput('deploy', false)
    }
    return
  } catch (error) {
    core.setFailed(error.message);
    core.setOutput('deploy', false)
  }
}

run();
