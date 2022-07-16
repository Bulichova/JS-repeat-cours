console.log('DOM') // Document object model

//
// alert('hello')
//addEventListener()

//GET HTML tags
// console.log(document) // window.document

//to 1 tags
const body = document.querySelector('body')
// console.log('body', body)

const x = document.querySelector('body li')
// console.log(x)

// const item = document.querySelector('.currentItem')// by class
// const item = document.querySelector('[data-atrr ='currentItem']') //by atrr
// const item = document.querySelector('#currentItem')// by id
const item = document.getElementById('currentItem')
// console.log('item', item)

//to group of tags

const items = document.querySelectorAll('li')
// console.log('items', items)

// const titles = document.querySelectorAll('.sectionTitle') // NodeList
const titles = document.getElementsByClassName('sectionTitle') // HTML Collection
// [...titles].forEach(elem =>{
//     console.log(elem);
// })
// console.log('titles', titles)

console.dir(body)
console.log('attributes', body.attributes)
console.log('children', body.children)

console.log('classList', body.classList)
//.add()
//.remove()
//.contains(className)
//.toggle(className)

console.log('dataset', body.dataset)
console.log('style', body.style)
body.style.backgroundColor = 'yellow'
