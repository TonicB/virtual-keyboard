import { setKeys } from './_setKeys';
import { STATE } from './_state';

export function shiftSwitchByClick() {
  STATE.shift === 'shiftOff'
    ? STATE.shift = 'shiftOn'
    : STATE.shift = 'shiftOff'
  setKeys()
  console.log(STATE.shift)
}