import { Button } from './_classes'

export const ALL_KEYS_EN = [
  [...'`1234567890-=', 'Backspace'],
  ['TAB', ...'qwertyuiop[]', '\\', 'Del'],
  ['Caps Lock', ...'asdfghjkl;\'', 'Enter'],
  ['Shift', ...'zxcvbnm,./', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨']
]
export const ALL_KEYS_RU = [
  [...'ё1234567890-=', 'Backspace'],
  ['TAB', ...'йцукенгшщзхъ', '\\', 'Del'],
  ['Caps Lock', ...'фывапролджэ', 'Enter'],
  ['Shift', ...'ячсмитьбю.', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨']
]

export const SHIFT_VALUES_EN = [
  [...'~!@#$%^&*()_+', 'Backspace'],
  ['TAB', ...'QWERTYUIOP{}|', 'DEL'],
  ['Caps Lock', ...'ASDFGHJKL:"', 'Enter'],
  ['Shift', ...'ZXCVBNM<>?', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨']
]

export const SHIFT_VALUES_RU = [
  [...'Ё!"№;%:?*()_+', 'Backspace'],
  ['TAB', ...'ЙЦУКЕНГШЩЗХЪ/', 'DEL'],
  ['Caps Lock', ...'ФЫВАПРОЛДЖЭ', 'Enter'],
  ['Shift', ...'ЯЧСМИТЬБЮ,', '⇧', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '⇦', '⇩', '⇨']
]

export const KEY_CODES = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
]

export const FN_KEYS = ['Backspace', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight']
export const DIGITS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0']
export const MIX_KEYS = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period']
export const NOT_LETTERS = ['Minus', 'Equal', 'Backslash', 'Slash']

export const ALL_KEYS = [[], [], [], [], []]
export const ALL_KEY_OBJS = {}

ALL_KEYS_EN.forEach((x1, i1) => {
  x1.forEach((x2, i2) => {
    const obj = new Button(x2, ALL_KEYS_RU[i1][i2], KEY_CODES[i1][i2], SHIFT_VALUES_EN[i1][i2], SHIFT_VALUES_RU[i1][i2])
    ALL_KEYS[i1].push(obj)
    ALL_KEY_OBJS[KEY_CODES[i1][i2]] = obj
  })
})