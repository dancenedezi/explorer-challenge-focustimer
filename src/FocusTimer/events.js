import * as el from './elements.js'
import * as actions from './actions.js'

export function timerControls() {
  el.timerControls.addEventListener('click', (event) => {
   const action = event.target.dataset.action
   const operation = event.target.classList[2]
   
   if(operation != undefined) {
    actions[action](operation)
    return
   }
  
   if(typeof actions[action] != 'function'){
    return
   }

   actions[action]()
  })
}

export function soundControls() {
  el.soundControls.addEventListener('click', (event) => {
    const music = event.target
    const list = el.soundControls

    actions.selectSound(music, list)
  })
}
