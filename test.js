const test = require('tape')
const {format} = require('./index.js')
const print  = require('./index.js')
const cj = require('color-json')

let colorify = (value) => cj(JSON.stringify(value))

test(t => {
  console.log('testing format with primatives')
  t.equal(format('hello'), cj(JSON.stringify('hello')) + '\n', 'strings')
  t.equal(format(123), cj(JSON.stringify(123)) + '\n', 'numbers')
  t.equal(format(false), cj(JSON.stringify(false)) + '\n', 'booleans')
  t.equal(format(null), cj(JSON.stringify(null)) + '\n', 'null')
  t.equal(format(), cj(JSON.stringify('undefined')) + '\n', 'undefined')
  console.log('testing format with objects')
  t.equal(format({name: 'abc'}), 'name: ' + colorify('abc') + '\n', 'prop with strings')
  t.equal(format({name: 123}), 'name: ' + colorify(123) + '\n', 'prop with numbers')
  t.equal(format({name: true}), 'name: ' + colorify(true) + '\n', 'prop with booleans')
  t.equal(format({name: null}), 'name: ' + colorify(null) + '\n', 'prop with null')
  t.equal(format({name: undefined}), 'name: ' + colorify('undefined') + '\n', 'prop with undefined')

  let temp = {one: 1, two: 'two'}
  let expectedString = '[Object] temp:\n' + colorify(temp) + '\n'
  t.equal(format({temp}), expectedString, 'prop with object', )
  temp = ['one', 2, null]
  expectedString = '[Array] temp:\n' + colorify(temp) + '\n'
  t.equal(format({temp}), expectedString, 'prop with array')

  t.end()
})
