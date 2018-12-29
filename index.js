require('clear')()
const cj = require('color-json')

let logId = 0

let log = (data) => {
  if (typeof data != 'object')
    return console.log('\nLOG_# [', logId++, ']', cj(JSON.stringify(data)) + '\n')
  console.log('\nLOG_# [', logId++, ']')
  Object.keys(data).forEach(key => {
    let value = data[key]
    if(typeof value == 'object'){
      let constructor = ''
      if(value.constructor)
        constructor = '[' + value.constructor.name + '] '
      console.log('   ', constructor + key + ':', '\n    ' + cj(JSON.stringify(value)).split('\n').join('\n    ') + '\n')
    } else {
      console.log('   ', key + ':', cj(JSON.stringify(value)) + '\n')
    }
  })
}

module.exports = log
