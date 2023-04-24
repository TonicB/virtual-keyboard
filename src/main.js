/* eslint-disable object-curly-newline */
import { ALL_KEY_OBJS, FN_KEYS } from './js/_keysArray'
import { insertSymbol } from './js/_insertSymbol'
import { setKeys } from './js/_setKeys'
import { delSymbol } from './js/_delSymbol'
import { backSpace } from './js/_backSpace'
import { enter } from './js/_enter'

const BODY = document.querySelector('body')
export const TEXT_AREA = document.createElement('textarea')
TEXT_AREA.setAttribute('cols', '100')
TEXT_AREA.setAttribute('rows', '10')

export const KEY_CONTAINER = document.createElement('div')
TEXT_AREA.id = 'textarea'
BODY.appendChild(TEXT_AREA)
BODY.appendChild(KEY_CONTAINER)
TEXT_AREA.focus()

export const state = {
  positionCursor: undefined,
  lang: 'en',
  capsLock: 'lower',
  shift: 'shiftOff'
}

export const keyRowArr = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div')
]

setKeys()

console.log(ALL_KEY_OBJS)

// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  state.positionCursor = TEXT_AREA.selectionStart
  const oldvalue = TEXT_AREA.value
  let newValue
  if (FN_KEYS.includes(e.code)) {
    if (e.code === 'Delete') {
      newValue = delSymbol(oldvalue)
    } else if (e.code === 'Enter') {
      newValue = enter(oldvalue)
      state.positionCursor++
    } else if (e.code === 'Backspace') {
      newValue = backSpace(oldvalue)
      state.positionCursor--
    } else {
      return
    }
  } else if (e.code === 'Tab') {
    newValue = insertSymbol(oldvalue, '    ')
    state.positionCursor += 4
  } else {
    newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[e.code][state.lang][state.capsLock][state.shift])
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

document.addEventListener('keydown', (e) => {
  if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
    state.shift = 'shiftOn'
    setKeys()
  } else if (e.code === 'CapsLock') {
    state.capsLock === 'upper' ? state.capsLock = 'lower' : state.capsLock = 'upper'
    setKeys()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.altKey)) {
    state.lang === 'en' ? state.lang = 'ru' : state.lang = 'en'
    setKeys()
  }
})
document.addEventListener('keyup', (e) => {
  if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
    state.shift = 'shiftOff'
    setKeys()
  }
})