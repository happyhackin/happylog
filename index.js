require('clear')()
const cj = require('color-json')

let log = (data) => {
  Object.keys(data).forEach(key => {
    let value = data[key]
    let constructor = ''
    if(typeof value === 'object' && value.constructor)
      constructor = '[' + value.constructor.name + ']'
    console.log(constructor, key, '\n' + cj(value) + '\n')
  })
}

module.exports = log
