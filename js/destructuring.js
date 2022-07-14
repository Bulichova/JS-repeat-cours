console.log('destructuring')
const arr = ['Sandra', 'Dima', 'Tanya']
//             0         1       2
//             1         2       3
const [me, he, she] = arr
console.log('me', me)
console.log('he', he)
console.log('she', she)

const user = {
  name: 'Tanya',
  age: 18,
  isOnLine: true,
}
const { isOnLine, name: userName } = user
console.log('isOnLine', isOnLine)
console.log('name => userName', userName)
