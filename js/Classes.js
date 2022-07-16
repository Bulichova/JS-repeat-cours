console.log('classes')

class User {
  constructor(name, age = 0) {
    this.name = name
    this.age = age
  }
  validateAge(ageValue) {
    return !ageValue.match('[^0=9]', 'g')
  }

  method1() {
    console.log('method1')
  }
  method2() {
    console.log('method2')
  }
  method3() {
    console.log('method3')
  }
  method4() {
    console.log('method4')
  }
}

const classUser1 = new User('Tanya')
// console.log('classUser1', classUser1)
const classUser2 = new User('Dima')
// console.log('classUser2', classUser2)

class UpdateUser extends User {
  static className = 'не доступно новым обЪектам'
  static classOwnMethod() {
    'меня нет в объектах'
  }
  constructor(name, age, skills) {
    super(name, age)
    this.skills = skills
  }
  newClassMethod() {
    console.log('my new class method')
  }
}
const classUpdateuser1 = new UpdateUser('Vasya', '17', ['moto'])
console.log('classUpdateuser1', classUpdateuser1)
console.log('classUpdateuser1', classUpdateuser1.className)
// classUpdateuser1.classOwnMethod() //error

classUpdateuser1.method1()
console.log('class UpdateUser', UpdateUser.className)
UpdateUser.classOwnMethod()
