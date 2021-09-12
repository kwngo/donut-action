var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
var isToday = require('dayjs/plugin/isToday')
dayjs.extend(isToday)

dayjs.extend(utc)
dayjs.extend(timezone)



const daysToIndex = {
  'sunday': 0, 
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
}

let isNotToday = (now) => {
  return (day) => {
    if (day in daysToIndex) {
      return now.day() != daysToIndex[day]
    } else {
      var [month, date] = day.split('-')
      return !(now.month() == parseInt(month, 10) && now.date() == parseInt(date, 10))
    }
  }
}

module.exports = isNotToday;