import './styles.css';
import { ALL_KEY_OBJS } from './js/_keysArray'
import { setKeys } from './js/_setKeys'
import { STATE } from './js/_state'
import { createDOM } from './js/_createDOM'
import { pressButton } from './js/_pressButton'
import { shiftSwitchByClick } from './js/_shiftSwitchByClick'
import { altSwitchByClick } from './js/_altSwitchByClick'
import { ctrlSwitchByClick } from './js/_ctrlSwitchByClick'

createDOM()
setKeys()

console.log(ALL_KEY_OBJS)

// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  pressButton(e.code)
})

// Набор текста мышью
window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.id === 'ShiftLeft' || e.target.id === 'ShiftRight'
      ? shiftSwitchByClick()
      : e.target.id === 'AltLeft' || e.target.id === 'AltRight'
        ? altSwitchByClick()
        : e.target.id === 'ControlLeft' || e.target.id === 'ControlRight'
          ? ctrlSwitchByClick()
          : pressButton(e.target.id)
  }
})

document.addEventListener('keydown', (e) => {
  if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
    STATE.shift = 'shiftOn'
    setKeys()
  } else if (e.code === 'CapsLock') {
    STATE.capsLock === 'upper' ? STATE.capsLock = 'lower' : STATE.capsLock = 'upper'
    setKeys()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.altKey)) {
    STATE.lang === 'en' ? STATE.lang = 'ru' : STATE.lang = 'en'
    setKeys()
  }
})
document.addEventListener('keyup', (e) => {
  if ((e.code === 'ShiftLeft') || (e.code === 'ShiftRight')) {
    STATE.shift = 'shiftOff'
    setKeys()
  }
})