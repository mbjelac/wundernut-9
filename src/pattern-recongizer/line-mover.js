import { EMPTY } from "../cell-values";

export function moveLineLeft(line){
  return (line + EMPTY).substr(1);
}

export function moveLineRight(line){
  return (EMPTY + line).substr(0, line.length);
}
