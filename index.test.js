var shouldDeploy = require('./deploy')
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("America/New_York")

test('test shoul deploy if monday false', async () => {
    var now = dayjs().day(6)
    var listOfDays = ['monday']
    expect(shouldDeploy(listOfDays, now)).toEqual(true)
});


test('test should deploy if friday,saturday false', async () => {
    var now = dayjs().day(6)
    var listOfDays = ['friday', 'saturday']
    expect(shouldDeploy(listOfDays, now)).toEqual(false)
});

test('test should deploy if friday,sunday true', async () => {
    var now = dayjs().day(6)
    console.log(now.toString())
    var listOfDays = ['friday', 'sunday']
    expect(shouldDeploy(listOfDays, now)).toEqual(true)
});

test('test should deploy if 06-15 false', async () => {
    var now = dayjs().set('month', 6).set('date', 15)
    var listOfDays = ['06-15']
    expect(shouldDeploy(listOfDays, now)).toEqual(false)
});

test('test should deploy if 06-16 true', async () => {
    var now = dayjs().set('month', 6).set('date', 16)
    var listOfDays = ['06-15']
    expect(shouldDeploy(listOfDays, now)).toEqual(true)
});
