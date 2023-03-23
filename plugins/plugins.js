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

// arrays

const plugins = [
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    isSynth: true,
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: '11',
    publisher: 'lfssfsfle',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    isRaw: true,
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    // name: 'Net',
    // publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    isRaw: true,
  },
]

// append cards

const cardsList = document.getElementById('card-list')
const rawList = document.getElementById('raw-list')
const synthList = document.getElementById('synth-list')

const displayCards = (arr) => {
  arr.map(
    ({
      img = 'plugin-img/not-found.png',
      source = 'not found',
      name = 'not found',
      publisher = 'not found',
      version = 'not found',
      isRaw = false,
      isSynth = false,
    }) => {
      if (isRaw) {
        rawList.innerHTML += `
            <a class="card" href="${source}" download>
            <img class="card_image" src="${img}" alt="">
              <div class="card-info">
                <p class='card_name card_text'>${name}</p>
                <p class='card_subname card_text'>${publisher}</p>
                <p class='card_version card_text'>${version}</p>
              </div>
            </a>
          `
      } else if (isSynth) {
        synthList.innerHTML += `
            <a class="card" href="${source}" download>
            <img class="card_image" src="${img}" alt="">
              <div class="card-info">
                <p class='card_name card_text'>${name}</p>
                <p class='card_subname card_text'>${publisher}</p>
                <p class='card_version card_text'>${version}</p>
              </div>
            </a>
          `
      } else {
        cardsList.innerHTML += `
            <a class="card" href="${source}" download>
            <img class="card_image" src="${img}" alt="">
              <div class="card-info">
                <p class='card_name card_text'>${name}</p>
                <p class='card_subname card_text'>${publisher}</p>
                <p class='card_version card_text'>${version}</p>
              </div>
            </a>
          `
      }
    }
  )
}

displayCards(plugins)

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
