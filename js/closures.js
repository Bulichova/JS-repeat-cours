console.log('closures')
//lexical environment setClosure
let globalValue = 'global value'
function setClosure() {
  //lexical environment getValue
  let initValue = 'inner value'
  function getValue(value) {
    // console.log(value)
    return initValue
  }
  return { getValue }
  //lexical environment getValue
}
//lexical environment setClosure

// console.log('initValue', initValue) // error
const closure = setClosure()
console.log('closure', closure)
const initValue = closure.getValue('Oh my value')
console.log('initValue', initValue)

//Example -counter

const counter = function () {
  let countValue = 0
  function decrementValue() {
    countValue -= 1
    // document
    //   .querySelector('body')
    //   .insertAdjacentHTML('afterbegin', '<h1>${countValue}</h1>')
  }
  function incrementValue() {
    countValue += 1
    // document
    //   .querySelector('body')
    //   .insertAdjacentHTML('afterbegin', '<h1>${countValue}</h1>')
  }
  return { decrementValue, incrementValue }
}
const newCounter = counter()
console.log('newCounter', newCounter)
let result = newCounter.decrementValue()
console.log('result', result)
document
  .querySelector('body')
  .insertAdjacentHTML('afterbegin', '<h1>${result}</h1>')
