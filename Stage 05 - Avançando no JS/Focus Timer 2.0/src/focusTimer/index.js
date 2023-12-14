import state from './state.js'
import * as timeractions from './timeractions.js'
import * as events from './events.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timeractions.updateDisplay() //preciso dessa função?

    events.registerControls()
}