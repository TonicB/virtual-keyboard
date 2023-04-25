import { TEXT_AREA } from './_createDOM.js';

export function delSymbol(oldvalue) {
  return `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${oldvalue.slice(TEXT_AREA.selectionStart + 1)}`
}