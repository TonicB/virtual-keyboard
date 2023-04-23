export const ALL_KEYS_EN = [
  [...'`1234567890-='.split(''), 'Backspace'],
  ['TAB', ...'qwertyuiop[]'.split(''), '\\'],
  ['Caps Lock', ...'asdfghjkl;\'', 'Enter'],
  ['Shift', ...'zxcvbnm,./', '^', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '<', 'v', '>']
]
export const ALL_KEYS_RU = [
  [...'ё1234567890-='.split(''), 'Backspace'],
  ['TAB', ...'йцукенгшщзхъ'.split(''), '\\'],
  ['Caps Lock', ...'фывапролджэ', 'Enter'],
  ['Shift', ...'ячсмитьбю.', '^', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '<', 'v', '>']
]

export let ALL_KEYS = [[],[],[],[],[]]
export const ALL_KEY_OBJS = {}


export const KEY_CODES = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
   ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
   ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft',  'ArrowDown', 'ArrowRight']

]