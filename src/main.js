import './styles.css';
import { ALL_KEY_OBJS } from './js/_keysArray'
import { changeKeys, setKeys } from './js/_setKeys'
import { STATE } from './js/_state'
import { TEXT_AREA, createDOM } from './js/_createDOM'
import { pressButton } from './js/_pressButton'
import { shiftLeftSwitchByClick, shiftRightSwitchByClick } from './js/_shiftSwitchByClick'
import { altSwitchByClick } from './js/_altSwitchByClick'
import { ctrlSwitchByClick } from './js/_ctrlSwitchByClick'
import { enterSound, playSound, pressSound } from './js/_soundClick';

if (localStorage.getItem('capsLock')) {
  STATE.capsLock = localStorage.getItem('capsLock')
}

createDOM()
setKeys()
// enterSound()
// pressSound()

console.log(ALL_KEY_OBJS)

// Набор текста с клавиатуры
document.addEventListener('keydown', (e) => {
  // if (e.code === 'Enter') {
  //   playSound('enter')
  // } else {
  //   playSound('press')
  // }
  e.preventDefault();
  pressButton(e.code)
})

// Набор текста мышью
window.addEventListener('click', (e) => {
  console.log(TEXT_AREA.selectionStart)
  if (e.target.tagName === 'BUTTON') {
    if (e.target.id === 'CapsLock') {
      STATE.capsLock === 'upper' ? STATE.capsLock = 'lower' : STATE.capsLock = 'upper'
      changeKeys()
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
    changeKeys()
  } else if (e.code === 'ShiftRight') {
    STATE.shiftRight = true
    changeKeys()
  } else if (e.code === 'CapsLock') {
    STATE.capsLock === 'upper' ? STATE.capsLock = 'lower' : STATE.capsLock = 'upper'
    changeKeys()
  } else if (e.code === 'ControlLeft') {
    STATE.ctrl = true
    console.log(STATE)
  } else if (e.code === 'AltLeft') {
    STATE.alt = true
    console.log(STATE)
  }
})

document.addEventListener('keydown', () => {
  if (STATE.ctrl && STATE.alt) {
    STATE.lang === 'en' ? STATE.lang = 'ru' : STATE.lang = 'en'
    changeKeys()
  }
})

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft') {
    STATE.shiftLeft = false
    changeKeys()
  } else if (e.code === 'ShiftRight') {
    STATE.shiftRight = false
    changeKeys()
  } else if (e.code === 'ControlLeft') {
    STATE.ctrl = false
    console.log(STATE)
  } else if (e.code === 'AltLeft') {
    STATE.alt = false
    console.log(STATE)
  }
})

document.addEventListener('keydown', (e) => {
  document.querySelector(`.${e.code.toLowerCase()}`).classList.add('paper-retro')
})

document.addEventListener('keyup', (e) => {
  if (e.code !== 'CapsLock') {
    document.querySelector(`.${e.code.toLowerCase()}`).classList.remove('paper-retro')
  } else if (STATE.capsLock === 'lower') {
    document.querySelector(`.${e.code.toLowerCase()}`).classList.remove('paper-retro')
  }
})

window.onbeforeunload = () => {
  localStorage.setItem('capsLock', STATE.capsLock)
}