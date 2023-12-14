import * as sounds from './sounds.js'
import state from './state.js'

export function toggleMusicTree() {
    state.IsMute = document.documentElement.classList.toggle('music-on') 

    const treeButton = document.querySelector('.ph-tree')

    if(state.IsMute) {
        sounds.tree.play()
        treeButton.classList.toggle('tree')
        return
    }
    sounds.tree.pause()
    treeButton.classList.toggle('tree')
}

export function toggleMusicRain() {
    state.IsMute = document.documentElement.classList.toggle('music-on') 

    const rainButton = document.querySelector('.ph-cloud-rain')

    if(state.IsMute) {
        sounds.rain.play()
        rainButton.classList.toggle('rain')
        return
    }
    sounds.rain.pause()
    rainButton.classList.toggle('rain')
}

export function toggleMusicMarket() {
    state.IsMute = document.documentElement.classList.toggle('music-on') 

    const marketButton = document.querySelector('.ph-storefront')

    if(state.IsMute) {
        sounds.market.play()
        marketButton.classList.toggle('market')
        return
    }
    sounds.market.pause()
    marketButton.classList.toggle('market')
}

export function toggleMusicFire() {
    state.IsMute = document.documentElement.classList.toggle('music-on') 

    const fireButton = document.querySelector('.ph-campfire')

    if(state.IsMute) {
        sounds.fire.play()
        fireButton.classList.toggle('fire')
        return
    }
    sounds.fire.pause()
    fireButton.classList.toggle('fire')
}