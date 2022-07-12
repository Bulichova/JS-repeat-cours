console.log(`branches`)

// if(condition){
//     statemets
// }

// if(condition_1){
//     statemets_1
// }else if(condition_2){
//     stattements_2
// }else if(condition_3){
//     stattements_3
// }else{
//     statemetnts
// }

// if(condition){
//     statemets
// }else {
//     statemets_else
// }

//(condition)?statemets_if :statemets_else
let cond = true
let result
if (cond) {
  result = 'Hello'
}
console.log(`result`, result)

let value = null
// if (value || typeof value === 'number') {
//   console.log(`OK`)
// } else {
//   console.log(`not OK`)
// }
value || typeof value === 'number' ? console.log(`OK`) : console.log(`not OK`)

let age = 19
// if (age >= 18 && age <= 65) {
//   console.log(`age ok`)
// } else {
//   console.log(`age ne ok`)
// }
age >= 18 && age <= 65 ? console.log(`age ok`) : console.log(`age ne ok`)

let user = {}
console.log(typeof user) // {}=>object
console.log(Boolean(user)) //{}=> true
if (typeof user === 'object' && !user) {
  console.log(`user ok`)
} else {
  console.log(`user ne ok`)
}

let data = {}
if (data === null) {
  console.log(`data null`)
} else {
  console.log(`data available`)
}

// const arr = [1, 2, 3, 4, 5]
const arr = null
// if(arr && arr.length>0)
if (arr?.length > 0) {
  console.log(`i have numbers`)
} else {
  console.log(`error`)
}

let num = undefined
if (!isNaN(num) && num !== null) {
  if ((num >= 0) & 7 & (num < 3)) {
    console.log(`num>=0 num<3`)
  }
  if (num >= 3) {
    console.log(`num>=3`)
  }
} else {
  console.log(`who knows`)
}

let number = '1'
switch (number) {
  case '1':
    console.log(`number>=0`)
    break
  default:
    console.log(`default`)
}
