import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPress.play()
  timer.countdown()
 
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  sounds.buttonPress.play()
  timer.updateDisplay()
}

export function timeSetting(operation) {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
  if(operation == 'add'){
    minutes = minutes == 60 ? 60 : minutes + 5

    timer.updateDisplay(minutes, seconds)
    return
  }
    
  minutes = Number(el.minutes.textContent)

  minutes = minutes == 0 ? 0 : minutes - 5

  timer.updateDisplay(minutes, seconds)  
}

export function selectSound(music, list) {
  state.isMusicOn = music.classList.contains('active')
  const song = music.dataset.sound
  
  list.querySelectorAll('.active').forEach(element => {
    element.classList.remove('active')
    
    sounds[element.dataset.sound].pause()
  })

  if(!state.isMusicOn){
    music.classList.add('active')
    sounds[song].play()
  }
}