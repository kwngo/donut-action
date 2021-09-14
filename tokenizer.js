// Types
const DATE = 'DATE'
const DAY = 'DAY'
const TIME_RANGE = 'TIME_RANGE'

const daysToIndex = {
  'sunday': 0, 
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
}
const tokenizer = (token) => {
    if (token in daysToIndex) {
	return {type: DAY, value: token}
    }
    if (token)
}
module.exports = tokenizer;