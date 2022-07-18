console.log('create elements')
const body = document.querySelector('body')

// 1 element - object

const newElement = document.createElement('a')
console.dir(newElement)
console.log('newElement', newElement)
newElement.href = '#'
newElement.textContent = 'link'
newElement.style.fontSize = '30px'
newElement.style.color = 'red'
newElement.classList.add('link')
console.log(newElement.href)

body.insertAdjacentElement('afterbegin', newElement) // render 1 element
//                         'beforebegin'
//                         'afterend'
//                          'beforend'

const data = [{ text: 'hello' }, { text: 'world' }]

function createMarcup(array) {
  return array.map((elem) => {
    console.log('elem', elem)
    const item = document.createElement('p')
    item.textContent = elem.text
    return item
  })
}

const markup = createMarcup(data)
console.log('markup', markup)

newElement.after(...markup) // render many elements

const title = document.createElement('h1')
title.textContent = 'create DOM element'

newElement.before(title)
// beforebegin => before перед элементом
// afterend => after после елемента

//2 create markup

const path =
  'https://images.pexels.com/photos/4456985/pexels-photo-4456985.jpeg?auto=compress&cs=tinysrgb&w=800'

const image = `<img src = ${path} alt = 'image' width ='200'/>`
console.log('image', image)

title.insertAdjacentHTML('afterend', image)

const images = [{ path }, { path }, { path }, { path }]
function createImages(array) {
  return array
    .map((item) => {
      return `<img src = ${item.path} alt = 'image' width ='200'/>`
    })
    .join('')
}
const imagesMarkup = createImages(images)
console.log('imagesMarkup', imagesMarkup)

title.insertAdjacentHTML('beforebegin', imagesMarkup)

const sections = document.getElementsByClassName('section')
console.log('sections', sections)
Array.from(sections).forEach(section => section.innerHTML = '')
// [...sections] = Array.from(sections)