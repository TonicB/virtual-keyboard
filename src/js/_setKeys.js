import { keyRowArr, KEY_CONTAINER } from './_createDOM.js'
import { ALL_KEYS, KEY_CODES } from './_keysArray'
import { STATE } from './_state'

export function setKeys() {
  keyRowArr.forEach((x) => { x.innerHTML = '' })
  ALL_KEYS.forEach((x, i) => {
    KEY_CONTAINER.appendChild(keyRowArr[i])
    x.forEach((y, ind) => {
      const el = document.createElement('button')
      el.id = KEY_CODES[i][ind]
      el.classList.add(KEY_CODES[i][ind].toLowerCase())
      el.innerHTML = y[STATE.lang][STATE.capsLock][STATE.shift()]
      keyRowArr[i].appendChild(el)
    })
  })
  STATE.capsLock === 'upper'
    ? document.querySelector('.capslock').classList.add('paper-retro')
    : document.querySelector('.capslock').classList.remove('paper-retro')
  if (STATE.shiftLeft === true) {
    document.querySelector('.shiftleft').classList.add('paper-retro')
  } else {
    document.querySelector('.shiftleft').classList.remove('paper-retro')
  }
  if (STATE.shiftRight === true) {
    document.querySelector('.shiftright').classList.add('paper-retro')
  } else {
    document.querySelector('.shiftright').classList.remove('paper-retro')
  }
}