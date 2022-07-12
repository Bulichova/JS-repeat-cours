console.log(`Logical Operators`)

// && || ! !!

// && -logical AND  (и)  last true if all true or lst false
// вернет последнее true значение если все true иначе первое ложное

// console.log(true && 1) //1
// console.log(true && 1 && 'user') // user
// console.log(true && 0 && 'user') //0
// console.log(true && 1 && '') //''
// console.log(false && 1 && 'user') // false

// || - logical OR (или) last false if all false or lst true
// вернет последнее ложное значение,если все ложные, иначе первое true значение

// console.log(true || 1) // true
// console.log(true || 1 || 'user') // true
// console.log(true || 1 || ' ') // true
// console.log(true || 1 || '') // true

// console.log(false || 1) // 1
// console.log(false || 1 || 'user') // 1
// console.log(false || 1 || ' ') // 1
// console.log(false || 1 || '') // 1

// console.log(false || 0 || 'user') // user
// console.log(false || 0 || ' ' || Nan) // ' '
// console.log(false || 0 || '' || NaN) // NaN

// && for diapasones18-65 years
// || for diferent values / one of some values

// ! - logical NOT

// console.log(!1) // false
// console.log(!' ') // false
// console.log(!'user') // false
// console.log(!true) // false
// console.log(!Infinity) // false

// console.log(!0) // true
// console.log(!'') // true
// console.log(!undefined) // true
// console.log(!null) // true
// console.log(!false) // true
// console.log(!NaN) // true

// !! 2 and  way transfer value to boolean type

// console.log(!!1) // true
// console.log(!!' ') // true
// console.log(!!'user') // true
// console.log(!!true) // true
// console.log(!!Infinity) // true

// console.log(!!0) //false
// console.log(!!'') // false
// console.log(!!undefined) // false
// console.log(!!null) // false
// console.log(!!false) // false
// console.log(!!NaN) // false

// ?? -оператор нулевого слияния (null || undefined)
console.log('user' ?? '')
console.log('' ?? 'user')

console.log('user' ?? 0)
console.log(0 ?? 'user')

console.log('user' ?? NaN)
console.log(NaN ?? 'user')

console.log('user' ?? false)
console.log(false ?? 'user')

//===========!!!================
console.log('user' ?? undefined)
console.log(undefined ?? 'user')

console.log('user' ?? null)
console.log(null ?? 'user')
//===========!!!================