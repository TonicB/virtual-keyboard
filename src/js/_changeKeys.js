import { state, keyRowArr, KEY_CONTAINER} from '../main'
import { ALL_KEYS } from './_keysArray'

export function changeKeys() {
  keyRowArr.forEach((x) => { x.innerHTML = '' })
  ALL_KEYS.forEach((x, i) => {
    KEY_CONTAINER.appendChild(keyRowArr[i])
    x.forEach((y) => {
      const el = document.createElement('button')
      if (state.capsLock === false) {
        el.innerHTML = y[state.lang]
      } else {
        const prop = `${state.lang}Upper`
        el.innerHTML = y[prop]
      }
      keyRowArr[i].appendChild(el)
    })
  })
}