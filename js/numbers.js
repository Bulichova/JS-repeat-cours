console.log('NUMBERS')
//Constructor Number()
console.log(Number('tanya')) // NaN
console.log(Number('100')) //100
console.log(Number('100p')) //NaN
console.log(Number('')) // 0
console.log(Number(' ')) // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.dir(Number)

//Methods

let value = 3.14159
console.log(`length`, value.length) // undefined
console.log(`value`, typeof value, value)
value = value.toFixed(2)
console.log(`value`, typeof value, value)
console.log(`toFixed():`, (4.24).toFixed()) // возвращает строку

let num = '5.567px'
console.log(`parseFloat():`, parseFloat(num)) // string=>number
console.log(`parseInt():`, parseInt(num)) // string=>number

console.log(`isNaN():`, isNaN(num)) // 5.567px is Not A Number => true
console.log(`isNaN():`, isNaN(value)) // 3.14159 is Not A Number => false
console.log(`isNaN():`, isNaN(undefined)) //is Not A Number => true
console.log(`isNaN():`, isNaN(null)) //s Not A Number => false


