import { TEXT_AREA } from '../main';

export function backSpace(oldvalue) {
  return `${oldvalue.slice(0, TEXT_AREA.selectionStart - 1)}${oldvalue.slice(TEXT_AREA.selectionStart)}`
}