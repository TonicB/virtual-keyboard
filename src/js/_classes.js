export class Button {
  constructor(en, ru, keyCode) {
    this.class = `row__button-${en}`
    this.en = en
    this.enUpper = /[a-z]/.test(this.en) && this.en.length === 1 ? this.en.toUpperCase() : this.en
    this.ru = ru
    this.ruUpper = /[а-я]|ё/.test(this.ru) ? this.ru.toUpperCase() : this.ru
    this.keyCode = keyCode
  }
}