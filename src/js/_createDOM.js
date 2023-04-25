export const BODY = document.querySelector('body')
export const HEADER = document.createElement('header')
export const HEADER_TITLE = document.createElement('h1')
export const MAIN = document.createElement('main')
export const SECTION_TEXT_AREA = document.createElement('section')
export const SECTION_TEXT_AREA_WRAPPER = document.createElement('div')
export const TEXT_AREA = document.createElement('textarea')
export const SECTION_KEYBOARD = document.createElement('section')
export const SECTION_KEYBOARD_WRAPPER = document.createElement('div')
export const KEY_CONTAINER = document.createElement('div')
export const FOOTER = document.createElement('footer')
export const keyRowArr = [
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div')
]
keyRowArr.map((x) => x.classList.add('key-row'))
export function createDOM() {
  TEXT_AREA.setAttribute('cols', '45')
  TEXT_AREA.setAttribute('rows', '15')
  TEXT_AREA.id = 'textarea'
  BODY.classList.add('body')
  HEADER.classList.add('header')
  BODY.appendChild(HEADER)
  HEADER_TITLE.classList.add('header__title')
  HEADER_TITLE.innerText = 'RSS Виртуальная клавиатура'
  HEADER.appendChild(HEADER_TITLE)
  MAIN.classList.add('main')
  BODY.appendChild(MAIN)
  SECTION_TEXT_AREA.classList.add('text-area')
  MAIN.appendChild(SECTION_TEXT_AREA)
  SECTION_TEXT_AREA_WRAPPER.classList.add('wrapper')
  SECTION_TEXT_AREA.appendChild(SECTION_TEXT_AREA_WRAPPER)
  TEXT_AREA.classList.add('text-area__text-area')
  SECTION_TEXT_AREA_WRAPPER.appendChild(TEXT_AREA)
  SECTION_KEYBOARD.classList.add('keyboard')
  MAIN.appendChild(SECTION_KEYBOARD)
  SECTION_KEYBOARD_WRAPPER.classList.add('wrapper')
  SECTION_KEYBOARD.appendChild(SECTION_KEYBOARD_WRAPPER)
  KEY_CONTAINER.classList.add('key-container')
  SECTION_KEYBOARD_WRAPPER.appendChild(KEY_CONTAINER)
  FOOTER.classList.add('footer')
  BODY.appendChild(FOOTER)
  TEXT_AREA.focus()
}