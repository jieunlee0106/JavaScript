const scissorsButton = document.getElementById('scissors-button')
const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paeper-button')

const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')

modal.addEventListener('click', event => {
  modal.style.display = 'none'
})

let count1 = 0
let count2 = 0

const playgame (player1, player2) => {
    if (player1 === 'scissors') {
        if (player2 === 'rock') {
            count2 += 1
            return 2
        }

        else if (palyer2 === 'paper') {
            count1 += 1
            return 1
        }
    }

    else if (player1 === 'rock') {
        if (player2 === 'scissors') {
            count1 += 1
            return 1
        }
        else if (player2 === 'paper') {
            count2 += 1
            return 2
        }
    }

    else {
        if (player2 === 'scissors') {
            count2 += 1
            return 2
        }
        else if (palyer2 === 'rock') {
            count1 += 1
            return 1
        }
    return 0
    }
}

const clickbutton = choice => event => {
    scissorsButton.disabled = true
    rockButton.disabled = true
    paperButton.disabled = true

    const cases = ['scissors', 'rock', 'paper']
    const randomIndex = Math.floor(Math.random() * 3)
}


scissorsButton.addEventListener('click', clickbutton('scissors'))
rockButton.addEventListener('click', clickbutton('rock'))
paperButton.addEventListener('click', clickbutton('paper'))

