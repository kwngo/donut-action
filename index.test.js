var shouldDeploy = require('./deploy')
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("America/New_York")

test('test check if friday,saturday false', async () => {
    var now = dayjs().day(6)
    var listOfDays = ['monday']
    expect(shouldDeploy(listOfDays, now)).toEqual(true)
});


test('test check if friday,saturday false', async () => {
    var now = dayjs().day(6)
    var listOfDays = ['friday', 'saturday']
    expect(shouldDeploy(listOfDays, now)).toEqual(false)
});

test('test check if friday,sunday false', async () => {
    var now = dayjs().day(6)
    console.log(now.toString())
    var listOfDays = ['friday', 'sunday']
    expect(shouldDeploy(listOfDays, now)).toEqual(true)
});