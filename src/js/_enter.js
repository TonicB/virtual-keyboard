import { TEXT_AREA } from '../main';

export function enter(oldvalue) {
  return `${oldvalue.slice(0, TEXT_AREA.selectionStart)}\n${oldvalue.slice(TEXT_AREA.selectionStart)}`
}