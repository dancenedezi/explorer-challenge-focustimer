import state from "./state.js";
import * as events from './events.js'
import * as timer from './timer.js'

export function start() {
  const minutes = state.minutes
  const seconds = state.seconds

  events.timerControls()
  events.soundControls()
  timer.updateDisplay(minutes, seconds)
}