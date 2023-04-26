import { STATE } from './_state';

export function altSwitchByClick() {
  STATE.alt === 'altOff'
    ? STATE.alt = 'altOn'
    : STATE.alt = 'altOff'
  console.log(STATE)
}