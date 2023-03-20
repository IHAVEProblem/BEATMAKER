// light/dark mode

let lightMode = localStorage.getItem('lightMode')

const lightModeToggle = document.querySelector('#light-mode-toggle')

const enableLightMode = () => {
  document.body.classList.add('lightmode')
  localStorage.setItem('lightMode', 'enabled')
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightMode', null)
}

if (lightMode === 'enabled') {
  enableLightMode()
}

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')

  if (lightMode !== 'enabled') {
    enableLightMode()
  } else {
    disableLightMode()
  }
})

// append cards

const cards = [
  {
    img: 'img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
  },
  {
    img: 'img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
  },
  {
    img: 'img/ableton 1.svg',
    name: '11',
    publisher: 'lfssfsfle',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
  },
  {
    img: 'img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
  },
]

const cardsList = document.getElementById('card-list')

const displayCards = (cardList) => {
  const htmlString = cardList
    .map((cardList) => {
      return `
          <a class="card" href="${cardList.source}" download>
          <img class="card_image" src="${cardList.img}" alt="">
            <div class="card-info">
              <p class='card_name card_text'>${cardList.name}</p>
              <p class='card_subname card_text'>${cardList.publisher}</p>
              <p class='card_version card_text'>${cardList.version}</p>
            </div>
          </a>
        `
    })
    .join('')
  cardsList.innerHTML = htmlString
}

displayCards(cards)

// new Search

const searchBar = document.getElementById('search-item')

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase()

  const filteredCards = cards.filter((card) => {
    return (
      card.name.toLowerCase().includes(searchString) ||
      card.publisher.toLowerCase().includes(searchString)
    )
  })
  displayCards(filteredCards)
})
