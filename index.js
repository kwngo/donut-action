const core = require('@actions/core');
const wait = require('./wait');
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var isToday = require('dayjs/plugin/isToday')


dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)

dayjs.tz.setDefault("America/New_York")


var daysToIndex = {
  'sunday': 0, 
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
}
// most @actions toolkit packages have async methods
async function run() {
  try {
    var days = core.getInput('days', {required: true})
    var timezoneName = core.getInput('timezone')
    var listOfDays = days.split(",")

    core.setOutput('deploy', true)
    dayjs.tz.setDefault(timezoneName)
    core.info("Set tinmezone to " + timezoneName)

    const isNotToday = (day) => now.day != daysToIndex[day];
    var deploy = listOfDays.every(isNotToday)
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
