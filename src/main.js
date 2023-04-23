import { ALL_KEYS_EN, ALL_KEYS_RU, ALL_KEYS, KEY_CODES, ALL_KEY_OBJS  } from "./js/_keysArray"
import { Button } from "./js/_classes"


const BODY = document.querySelector('body')
const TEXT_AREA = document.createElement('textarea')
TEXT_AREA.setAttribute('cols', '100')
TEXT_AREA.setAttribute('rows', '10')

const KEY_CONTAINER = document.createElement('div')
TEXT_AREA.id = 'textarea'
BODY.appendChild(TEXT_AREA)
BODY.appendChild(KEY_CONTAINER)

let keyRowArr = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div')
]

TEXT_AREA.focus()

let positionCursor
let state  = {
  lang: 'en',
  capsLock: false,
}




ALL_KEYS_EN.forEach((x1, i1) => {
  x1.forEach((x2, i2) =>{
    let obj = new Button(x2, ALL_KEYS_RU[i1][i2], KEY_CODES[i1][i2])
    ALL_KEYS[i1].push(obj) 
    ALL_KEY_OBJS[KEY_CODES[i1][i2]] = obj
  })
})

console.log(ALL_KEY_OBJS)

ALL_KEYS.forEach((x, i) => {
  KEY_CONTAINER.appendChild(keyRowArr[i])
  x.forEach(y => {
    let el = document.createElement('button')
    el.innerHTML = y.en
    keyRowArr[i].appendChild(el)
  })
})


// Switch language
document.addEventListener('keydown', function(event) {
  if (event.shiftKey && (event.altKey)) {
    state.lang === 'en' ?state.lang = 'ru' : state.lang = 'en'
    keyRowArr.forEach(x => x.innerHTML = '')
    ALL_KEYS.forEach((x, i) => {
      KEY_CONTAINER.appendChild(keyRowArr[i])
      x.forEach(y => {
        let el = document.createElement('button')
        el.innerHTML = y[state.lang]
        keyRowArr[i].appendChild(el)
      })
    })
  }
  
});

// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  positionCursor = TEXT_AREA.selectionStart
  let oldvalue = TEXT_AREA.value 
  e.preventDefault();

  if(state.lang === 'en') {
    console.log(ALL_KEY_OBJS[e.code].en)
  let newValue = `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${ALL_KEY_OBJS[e.code].en}${oldvalue.slice(TEXT_AREA.selectionStart)}`
  TEXT_AREA.value = newValue
    positionCursor++
    TEXT_AREA.setSelectionRange(positionCursor, positionCursor)
    TEXT_AREA.focus()
} else {
  console.log(ALL_KEY_OBJS[e.code].ru)
  let newValue = `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${ALL_KEY_OBJS[e.code].ru}${oldvalue.slice(TEXT_AREA.selectionStart)}`
  TEXT_AREA.value = newValue
    positionCursor++
    TEXT_AREA.setSelectionRange(positionCursor, positionCursor)
    TEXT_AREA.focus()
  }
})





// Набор текста мышью
window.addEventListener('click', (e) => {
  positionCursor = TEXT_AREA.selectionStart
  if(!e.target.closest('textarea')) {
    let oldvalue = TEXT_AREA.value 
    let newValue = `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${e.target.innerHTML}${oldvalue.slice(TEXT_AREA.selectionStart)}`
    TEXT_AREA.value = newValue
    positionCursor++
    TEXT_AREA.setSelectionRange(positionCursor, positionCursor)
    TEXT_AREA.focus()
  }
})  

TEXT_AREA.addEventListener('click', () => {
})

addEventListener('keydown', (e) => {

})

