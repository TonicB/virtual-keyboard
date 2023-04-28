import { BODY } from './_createDOM'

export function pressSound() {
  var audio = new Audio()
  audio.src = './press.mp3'
  audio.id = 'press'
  BODY.appendChild(audio)
}
export function enterSound() {
  var audio = new Audio()
  audio.src = './enter.mp3'
  audio.id = 'enter'
  BODY.appendChild(audio)
}

export function playSound(sound) {
  var song = document.getElementById(sound);
  song.volume = 1;
  song.play();
}