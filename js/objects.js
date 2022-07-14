console.log('objects')

const obj = {
  'prop-1': 'hello',
}
// console.log(obj)
// console.log(obj.hasOwnProperty('name'))
obj.name = ''
// console.log(obj.hasOwnProperty('name'))
// console.log(obj.hasOwnProperty('age'))
obj['age'] = 32
// console.log(obj.hasOwnProperty('age'))
// console.log(obj['prop-1'])

const cat = {
  name: 'Pushok',
}
// console.log('cat', cat)

// const kitten = Object.create(null)
// console.log('kitten', kitten)
// console.log('kitten',kitten.hasOwnProperty('fff'))

// const kitten = Object.create({})
// console.log('kitten', kitten)
// console.log('kitten',kitten.hasOwnProperty('fff'))

const kitten = Object.create(cat)
// console.log('kitten', kitten)

const nextKitten = Object.create(kitten)
// console.log('nextKitten', nextKitten)
// console.log('nextKitten', nextKitten.hasOwnProperty('fff'))

//SPREAD

const settings = {
  prettier: true,
  eslint: true,
}
const upgradeSettings = { ...settings, liveServer: true }
// console.log('upgradeSetting', upgradeSettings)

const a = {
  a: 50,
}
const b = {
  b: 100,
  a: 50,
}
const c = { ...a, ...b }
// console.log(c)

const d = Object.create(a, {
  b: { writable: true, configurable: true, value: 1000 },
  c: { writable: true, configurable: true, value: 'hello' },
})
// console.log(d)

const user = {
  name: 'Sandra',
  toShowName(param1, param2) {
    console.log(this.name, param1, param2)
  },
}
user.toShowName('i love', 'JS')

const newUser = {
  name: 'Dima',
}

//call || apply ||bing - методы привязки контекста

user.toShowName.call(newUser, 'hello', 'world')
user.toShowName.apply(newUser, ['hello', 'world'])

function getData(callback) {
  callback()
}
getData(user.toShowName.bind(newUser, 'hello', 'world'))

// console.log('this', this)
// console.log('window', window)
