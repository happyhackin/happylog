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

  let tempObject = {one: 1, two: 'two'}
  let expectedObjectString = '[Object] tempObject:\n' + colorify(tempObject) + '\n'
  t.equal(format({tempObject}), expectedObjectString, 'prop with object', )
  let tempArray  = ['one', 2, null]
  let expectedArrayString = '[Array] tempArray:\n' + colorify(tempArray) + '\n'
  t.equal(format({tempArray}), expectedArrayString, 'prop with array')

  t.equal(format({tempArray, tempObject}), expectedArrayString + expectedObjectString, 'prop with array')

  t.end()
})
