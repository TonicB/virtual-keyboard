import './styles.css';
import { ALL_KEY_OBJS } from './js/_keysArray'
import { setKeys } from './js/_setKeys'
import { STATE } from './js/_state'
import { createDOM } from './js/_createDOM'
import { pressButton } from './js/_pressButton'
import { shiftLeftSwitchByClick, shiftRightSwitchByClick } from './js/_shiftSwitchByClick'
import { altSwitchByClick } from './js/_altSwitchByClick'
import { ctrlSwitchByClick } from './js/_ctrlSwitchByClick'
import { enterSound, playSound, pressSound } from './js/_soundClick';

createDOM()
setKeys()
enterSound()
pressSound()

console.log(ALL_KEY_OBJS)

// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    playSound('enter')
  } else {
    playSound('press')
  }
  e.preventDefault();
  pressButton(e.code)
})

// Набор текста мышью
window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.id === 'CapsLock') {
      STATE.capsLock === 'upper' ? STATE.capsLock = 'lower' : STATE.capsLock = 'upper'
      setKeys()
    } else {
      e.target.id === 'ShiftLeft'
        ? shiftLeftSwitchByClick()
        : e.target.id === 'ShiftRight'
          ? shiftRightSwitchByClick()
          : e.target.id === 'AltLeft' || e.target.id === 'AltRight'
            ? altSwitchByClick()
            : e.target.id === 'ControlLeft' || e.target.id === 'ControlRight'
              ? ctrlSwitchByClick()
              : pressButton(e.target.id)
    }
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'ShiftLeft') {
    STATE.shiftLeft = true
    setKeys()
  } else if (e.code === 'ShiftRight') {
    STATE.shiftRight = true
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
  if (e.code === 'ShiftLeft') {
    STATE.shiftLeft = false
    setKeys()
  } else if (e.code === 'ShiftRight') {
    STATE.shiftRight = false
    setKeys()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code !== 'CapsLock') {
    document.querySelector(`.${e.code.toLowerCase()}`).classList.add('paper-retro')
  }
})

document.addEventListener('keyup', (e) => {
  if (e.code !== 'CapsLock') {
    document.querySelector(`.${e.code.toLowerCase()}`).classList.remove('paper-retro')
  }
})