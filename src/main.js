/* eslint-disable object-curly-newline */
import { ALL_KEYS_EN, ALL_KEYS_RU, ALL_KEYS, KEY_CODES, ALL_KEY_OBJS } from './js/_keysArray'
import { Button } from './js/_classes'
import { insertSymbol } from './js/_insertSymbol'
import { changeKeys } from './js/_changeKeys'

const BODY = document.querySelector('body')
export const TEXT_AREA = document.createElement('textarea')
TEXT_AREA.setAttribute('cols', '100')
TEXT_AREA.setAttribute('rows', '10')

export const KEY_CONTAINER = document.createElement('div')
TEXT_AREA.id = 'textarea'
BODY.appendChild(TEXT_AREA)
BODY.appendChild(KEY_CONTAINER)

export const keyRowArr = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div')
]

TEXT_AREA.focus()

export const state = {
  positionCursor: undefined,
  lang: 'en',
  capsLock: false,
}

ALL_KEYS_EN.forEach((x1, i1) => {
  x1.forEach((x2, i2) => {
    const obj = new Button(x2, ALL_KEYS_RU[i1][i2], KEY_CODES[i1][i2])
    ALL_KEYS[i1].push(obj)
    ALL_KEY_OBJS[KEY_CODES[i1][i2]] = obj
  })
})

console.log(ALL_KEY_OBJS)

ALL_KEYS.forEach((x, i) => {
  KEY_CONTAINER.appendChild(keyRowArr[i])
  x.forEach((y) => {
    const el = document.createElement('button')
    el.classList.add(y.keyCode)
    el.textContent = y.en
    keyRowArr[i].appendChild(el)
  })
})


// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  console.log(e)
  e.preventDefault();
  state.positionCursor = TEXT_AREA.selectionStart
  const oldvalue = TEXT_AREA.value
  let newValue

  if (e.shiftKey && (e.altKey)) {
    state.lang === 'en' ? state.lang = 'ru' : state.lang = 'en'
    changeKeys()
    newValue = oldvalue
  } else if (e.code === 'CapsLock') {
    state.capsLock === true ? state.capsLock = false : state.capsLock = true
    newValue = oldvalue
    changeKeys()
  } else if (e.code === 'Tab') {
    newValue = insertSymbol(oldvalue, '    ')
    state.positionCursor += 4
  } else if (state.lang === 'en') {
    if (state.capsLock === false) {
      newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[e.code].en.toLowerCase())
    } else {
      newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[e.code].enUpper.toUpperCase())
    }
    state.positionCursor++
  } else {
    if (state.capsLock === false) {
      newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[e.code].ru.toLowerCase())
    } else {
      newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[e.code].ruUpper.toUpperCase())
    }
    state.positionCursor++
  }

  TEXT_AREA.value = newValue
  TEXT_AREA.setSelectionRange(state.positionCursor, state.positionCursor)
  TEXT_AREA.focus()
})

// Набор текста мышью
window.addEventListener('click', (e) => {
  console.log(e.target)
  state.positionCursor = TEXT_AREA.selectionStart
  if (!e.target.closest('textarea')) {
    const oldvalue = TEXT_AREA.value
    const newValue = `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${e.target.textContent}${oldvalue.slice(TEXT_AREA.selectionStart)}`
    TEXT_AREA.value = newValue
    state.positionCursor++
    TEXT_AREA.setSelectionRange(state.positionCursor, state.positionCursor)
    TEXT_AREA.focus()
  }
})
