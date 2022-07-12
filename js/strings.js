console.log('strings')
// length     12345
const name = 'Tanya'
// index      01234
const lastName = 'Boyko'
// const fullName = name + ' ' + lastName // ES5
const fullName = `${name} ${lastName}` //    ES6
console.log(fullName)

//Constructor String()
let num = 12
console.log(typeof num, num)
num = String(num)
console.log(typeof num, num)

//PROPERTIES (свойства)
console.log(`length name`, name.length)
console.log(`length fullName`, fullName.length)

//METHODS for string only
console.dir(String)
let str = 'VaLuE'
console.log('toLowerCase():', str.toLowerCase())
console.log(`BoYKo`.toLowerCase())
console.log(`toUpperCase():`, str.toUpperCase())
console.log(`BoYKo`.toUpperCase())
let inputValue = '     value     '
console.log(`value length:`, inputValue.length)
inputValue = inputValue.trim()
console.log(`inputValue.trim()`, inputValue.length)
console.log(`fullName.trim():`, fullName.length)

//METHODS for string and array
console.log(`concat:`, name.concat(' ', lastName))
console.log(`indexOf:`, name.indexOf('s')) //-1
console.log(`indexOf:`, name.indexOf('T')) // 0
console.log(`indexOf:`, name.indexOf('ny')) //-возвращает индекс первого символа совпадающего элементв

console.log(`includes:`, name.includes('s')) // false
console.log(`includes:`, name.includes('T')) // true
console.log(`includes:`, name.includes('ny')) //true
