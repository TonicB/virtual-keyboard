import { changeKeys } from './_setKeys';
import { STATE } from './_state';

export function shiftLeftSwitchByClick() {
  STATE.shiftLeft === false
    ? STATE.shiftLeft = true
    : STATE.shiftLeft = false
  changeKeys()
}

export function shiftRightSwitchByClick() {
  STATE.shiftRight === false
    ? STATE.shiftRight = true
    : STATE.shiftRight = false
  changeKeys()
}