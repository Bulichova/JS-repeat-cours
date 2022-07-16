console.log('constrouctor')

const user = {
  _name: 'user',
  login: 'login',
  password: 'ghjhg',
  _email: 'user@gmail.com',
  phone: '+12768686876',
  get name() {
    return this._name
  },
  set name(value) {
    return (this._name = value)
  },

  get email() {
    return this._email
  },
  set email(value) {
    return (this._email = value)
  },

  validateEmail(value) {
    return value.includes('@')
  },

  setValidEmail(value) {
    if (this.validateEmail(value)) {
      this.email = value
    }
    return
  },
}

function createUser(name, login, password, email, phone) {
  return { name, login, password, email, phone }
}

const newUser = createUser(
  'Sandra',
  'ghj123',
  '1111',
  'sandra@gmail.com',
  '+16575765765',
)
// console.log('newUser', newUser)

const getUserName = user.name
// console.log('getUserName', getUserName)
// console.log('user._name', user._name)

user.name = 'Tanya'
// console.log(user)

const validEmail = user.setValidEmail('tanya@gmail.com')
// console.log('user', user)

function User(name, age = 0) {
  this.name = name
  this.age = age
}
User.prototype.validateAge = function (ageValue) {
  const reg = RegExp('[^0=9]', 'g')
  return !ageValue.match('[^0=9]', 'g')
}
User.prototype.method1 = function () {
  // console.log('method1')
}
User.prototype.method2 = function () {
  // console.log('method2')
}
User.prototype.method3 = function () {
  // console.log('method3')
}
User.prototype.method4 = function () {
  console.log('method4')
}
// console.log('User.prototype', User.prototype)

const user1 = new User('Tanya')
// console.log('user1', user1)
// console.log('user1.name', user1.name)
// console.log(user1.validateAge('dfdf'))

const user2 = new User('Dima')
// console.log('user2', user2)

function UpdateUser(name, age) {
  //привязываем старый конструктор
  User.call(this, name, age)
  // добавляем новые свойстваб которых не было в старом
  this.skills = []
}
//в прототип  нового конструктора записываем прототип старого
UpdateUser.prototype = User.prototype
//перезаписываем конструктор назад на свой потому что выше чужой
UpdateUser.prototype.constructor = UpdateUser
// теперь можно и методы писать 
UpdateUser.prototype.newMehod = function(){
  // console.log("New Method");
}
const updateuser1 = new UpdateUser('Vasya', '17')
// console.log('updateuser1', updateuser1)
