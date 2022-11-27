document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name:"tile1",
      img:"images/tile1.png",
  },{
      name:"tile2",
      img:"images/tile2.png",
  },
  {
      name:"tile3",
      img:"images/tile3.png",
  },
  {
      name:"tile4",
      img:"images/tile4.png",
  },
  {
      name:"tile5",
      img:"images/tile5.png",
  },
  {
      name:"tile6",
      img:"images/tile6.png",
  },
  {
      name:"tile1",
      img:"images/tile1.png",
  },{
      name:"tile2",
      img:"images/tile2.png",
  },
  {
      name:"tile3",
      img:"images/tile3.png",
  },
  {
      name:"tile4",
      img:"images/tile4.png",
  },
  {
      name:"tile5",
      img:"images/tile5.png",
  },
  {
      name:"tile6",
      img:"images/tile6.png",
  },

  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


  createBoard()
})
