import { TEXT_AREA } from './_createDOM';
import { STATE } from './_state';
import { FN_KEYS, ALL_KEY_OBJS } from './_keysArray';
import { delSymbol } from './_delSymbol';
import { enter } from './_enter';
import { backSpace } from './_backSpace';
import { insertSymbol } from './_insertSymbol';

export function pressButton(code) {
  STATE.positionCursor = TEXT_AREA.selectionStart
  const oldvalue = TEXT_AREA.value
  let newValue
  if (FN_KEYS.includes(code)) {
    if (code === 'Delete') {
      newValue = delSymbol(oldvalue)
    } else if (code === 'Enter') {
      newValue = enter(oldvalue)
      STATE.positionCursor++
    } else if (code === 'Backspace') {
      newValue = backSpace(oldvalue)
      STATE.positionCursor--
    } else {
      return
    }
  } else if (code === 'Tab') {
    newValue = insertSymbol(oldvalue, '    ')
    STATE.positionCursor += 4
  } else {
    newValue = insertSymbol(oldvalue, ALL_KEY_OBJS[code][STATE.lang][STATE.capsLock][STATE.shift])
    STATE.positionCursor++
  }
  TEXT_AREA.value = newValue
  TEXT_AREA.setSelectionRange(STATE.positionCursor, STATE.positionCursor)
  TEXT_AREA.focus()
}