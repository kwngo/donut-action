const core = require('@actions/core');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var isToday = require('dayjs/plugin/isToday')
var shouldDeploy = require('./deploy')

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)

// most @actions toolkit packages have async methods
function run() {
  var days = core.getInput('days', {required: true})
  var timezoneName = core.getInput('timezone')
  if (!timezoneName) {
    timezoneName = "America/New_York"
  }
  core.info("Set timezone to " + timezoneName)
  dayjs.tz.setDefault(timezoneName)

  var listOfDays = days.split(",")
  var now = dayjs()

  core.info("Today is: " + now.toString())
  core.info("Days to not deploy: " + listOfDays)
  var deploy = shouldDeploy(listOfDays, now)
  core.info("Setting deploy to: " + deploy)
  core.setOutput('deploy', deploy)
}

run();
