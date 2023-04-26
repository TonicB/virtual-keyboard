import { DIGITS, FN_KEYS, MIX_KEYS, NOT_LETTERS } from './_keysArray'

export class Button {
  constructor(en, ru, code, shiftEn, shiftRu) {
    this.en = {
      lower: {
        shiftOff: en,
        shiftOn: FN_KEYS.includes(code)
          ? en
          : shiftEn
      },
      upper: {
        shiftOff: FN_KEYS.includes(code)
          ? en
          : en.toUpperCase(),
        shiftOn: DIGITS.includes(code) || MIX_KEYS.includes(code) || NOT_LETTERS.includes(code)
          ? shiftEn
          : en
      }
    }
    this.ru = {
      lower: {
        shiftOff: ru,
        shiftOn: FN_KEYS.includes(code)
          ? ru
          : DIGITS.includes(code) || NOT_LETTERS.includes(code)
            ? shiftRu
            : ru.toUpperCase()
      },
      upper: {
        shiftOff: FN_KEYS.includes(code)
          ? ru
          : ru.toUpperCase(),
        shiftOn: DIGITS.includes(code) || NOT_LETTERS.includes(code)
          ? shiftRu
          : ru
      }
    }
  }
}