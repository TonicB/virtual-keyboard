import { STATE } from './_state';

export function ctrlSwitchByClick() {
  STATE.ctrl === 'ctrlOff'
    ? STATE.ctrl = 'ctrlOn'
    : STATE.alt = 'ctrlOff'
  console.log(STATE)
}