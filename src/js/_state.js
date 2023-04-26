export const STATE = {
  positionCursor: undefined,
  lang: 'en',
  capsLock: 'lower',
  shiftLeft: false,
  shiftRight: false,
  shift: () => !STATE.shiftLeft && !STATE.shiftRight ? 'shiftOff' : 'shiftOn',
  alt: 'altOff',
  ctrl: 'ctrlOff'
}