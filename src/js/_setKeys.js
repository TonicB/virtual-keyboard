import { state, keyRowArr, KEY_CONTAINER } from '../main'
import { ALL_KEYS } from './_keysArray'

export function setKeys() {
  keyRowArr.forEach((x) => { x.innerHTML = '' })
  ALL_KEYS.forEach((x, i) => {
    KEY_CONTAINER.appendChild(keyRowArr[i])
    x.forEach((y) => {
      const el = document.createElement('button')
      el.innerHTML = y[state.lang][state.capsLock][state.shift]
      keyRowArr[i].appendChild(el)
    })
  })
}