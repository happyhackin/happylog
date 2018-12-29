require('clear')()
const cj = require('color-json')


let log = (data) => {
  if (typeof data != 'object')
    return console.log(cj(JSON.stringify(data)) + '\n')
  Object.keys(data).forEach(key => {
    let value = data[key]
    if (value === undefined)
      value = 'undefined'
    if(value && typeof value == 'object'){
      let constructor = ''
      if(value.constructor)
        constructor = '[' + value.constructor.name + '] '
      console.log( constructor + key + ':', '\n' + cj(JSON.stringify(value)).split('\n').join('\n') + '\n')
    } else {
      console.log( key + ':', cj(JSON.stringify(value)) + '\n')
    }
  })
}

module.exports = log

