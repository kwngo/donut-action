var isNotToday = require('./isNotToday')
var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("America/New_York")

test('test check if saturday false', async () => {
    var now = dayjs().day(6)
    var check = isNotToday(now)
    expect(check('saturday')).toEqual(false)
});

test('test check if sunday false', async () => {
    var now = dayjs().day(0)
    var check = isNotToday(now)
    expect(check('sunday')).toEqual(false)
});

test('test check if sunday true', async () => {
    var now = dayjs().day(0)
    var check = isNotToday(now)
    expect(check('monday')).toEqual(true)
});