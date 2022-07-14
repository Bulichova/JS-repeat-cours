console.log('FUNCTIONS')

// FUNCTION DECLARATION

getData('argument1', 'argument2')
getData('argument10', 'argument23')

function getData(
  param1 = 'default-1',
  param2 = 'default-2',
  param3 = 'default-3',
) {
//   console.log('param1', param1)
//   console.log('param2', param2)
//   console.log('param3', param3)
}

//Rest
'use strrict'

function getParams(...params) {
  console.log('DECLARATION', this)

//   console.log('params:', params)
  params.forEach((param) => console.log('param', param))
}
// getParams(1, 2, 3)

//FUNCTION EXPRESSION

const getParamsExpression = function (...params) {
  console.log('EXPRESSION', this)
//   console.log('params:', params)
  params.forEach((param) => console.log('param', param))
}
getParams(1, 2, 3)

// console.dir(getParamsExpression)

//Arrow function
const getParamsArrow = (...params) => {
  console.log('Arrow', this)
//   console.log('params:', params)
  params.forEach((param) => console.log('param', param))
}
getParamsArrow(1, 2, 3)

//THIS IS FUNCTION

console.log(this)
