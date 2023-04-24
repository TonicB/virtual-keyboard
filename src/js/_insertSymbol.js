import { TEXT_AREA } from '../main';

export function insertSymbol(oldvalue, insertedSymbol) {
  return `${oldvalue.slice(0, TEXT_AREA.selectionStart)}${insertedSymbol}${oldvalue.slice(TEXT_AREA.selectionStart)}`
}