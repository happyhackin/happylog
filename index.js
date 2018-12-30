if(process.env.CLEAR) require('clear')()
const cj = require('color-json')

let colorify = (value) => cj(JSON.stringify(value))

let format = (data) => {
  if (typeof data !== 'object' || data === null){
    if (data === undefined) data = 'undefined'
    return colorify(data) + '\n'
  }
  let result = ''
  Object.keys(data).forEach(key => {
    let value = data[key]
    if (value === undefined) value = 'undefined'
    if(value && typeof value == 'object') {
      let constructor = ''
      if(value.constructor) constructor = '[' + value.constructor.name + '] '
      result += constructor + key + ':\n' + colorify(value) + '\n'
    } else {
      result += key + ': ' +  colorify(value) + '\n'
    }
  })
  return result
}

module.exports = (...args) => console.log(format(...args))
module.exports.format = format

