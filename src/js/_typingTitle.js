import { HEADER_TITLE, P_LANG, P_OS } from './_createDOM'
import { playSound } from './_soundClick'

const title = 'RSS VIRTUAL KEYBOARD'
const os = 'OS Windows Pro 11'
const lang = 'En/Ru => CtrlLeft + AltLeft'

export function timeRND() {
  return [300, 350, 400, 450, 500, 550][Math.round(Math.random() * 5)]
}

export function typingTitle() {
  let timer = 0
  title.split('').forEach((x, i) => {
    timer += timeRND()
    setTimeout(() => {
      playSound('press')
      HEADER_TITLE.innerText = title.slice(0, i + 1)
    }, timer)
  })

  timer += timeRND()

  os.split('').forEach((x, i) => {
    timer += timeRND()
    setTimeout(() => {
      playSound('press')
      P_OS.innerText = os.slice(0, i + 1)
    }, timer)
  })

  setTimeout(() => {
    playSound('enter')
  }, timer)

  timer += 1000

  lang.split('').forEach((x, i) => {
    timer += timeRND()
    setTimeout(() => {
      playSound('press')
      P_LANG.innerText = lang.slice(0, i + 1)
    }, timer)
  })
}
