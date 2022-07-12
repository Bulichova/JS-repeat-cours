console.log(`BOOLEAN`)

//Constructor Boolean()

console.log(Boolean(' ')) // true
console.log(Boolean('0'))// true
console.log(Boolean('1'))// true
console.log(Boolean('dfdfd'))// true
console.log(Boolean(1)) // true
console.log(Boolean(1000000)) // true
console.log(Boolean(Infinity)) // true
console.log(Boolean(true)) // true


//6 falsy value
console.log(Boolean('')) //false
console.log(Boolean(0)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(false)) //false
console.log(Boolean(null)) //false