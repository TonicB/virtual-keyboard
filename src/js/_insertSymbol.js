import { TEXT_AREA } from './_createDOM.js';

export function insertSymbol(oldvalue, insertedSymbol) {
  return `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${insertedSymbol}${oldvalue.slice(TEXT_AREA.selectionStart)}`
}