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
    name: 'fl',
    publisher: 'AbletonAbletons',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: 'Line',
    publisher: 'Ableton',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    img: 'plugin-img/ableton 1.svg',
    name: '11',
    publisher: 'lfssfsfle',
    version: '11.2.6',
    source:
      'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'raws',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'plugins',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'synths',
  },
  {
    // img: 'plugin-img/ableton 1.svg',
    name: 'Net',
    publisher: 'eeeeett',
    // version: '11.2.6',
    // source:
    //   'source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent',
    category: 'raws',
  },
]

// append cards

const cardsList = document.getElementById('card-list')
const rawList = document.getElementById('raw-list')
const synthList = document.getElementById('synth-list')
const btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', () => {
  initCardsDisplay(plugins)
  displayBtns(plugins)
})

const initCardsDisplay = (arr) => {
  const initCategory = 'plugins'
  const pluginCategory = arr.filter((item) => {
    if (item.category === initCategory) {
      return item
    }
  })
  displayCards(pluginCategory)
}

const displayCards = (arr) => {
  cardsList.innerHTML = ''
  arr.map(
    ({
      img = 'plugin-img/not-found.png',
      source = 'not found',
      name = 'not found',
      publisher = 'not found',
      version = 'not found',
      category = 'plugins',
    }) => {
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
  )
  // add text animation if the text is too long for one line
  const cardName = document.querySelectorAll('.card_name'),
    cardVersion = document.querySelectorAll('.card_version'),
    cardPublisher = document.querySelectorAll('.card_subname')

  function addAnimation(target) {
    target.forEach((text) => {
      if (text.innerText.length > 13) {
        text.classList.add('text-animation')
      }
    })
  }
  addAnimation(cardName)
  addAnimation(cardVersion)
  addAnimation(cardPublisher)
}

function displayBtns(arr) {
  const categories = arr.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, [])

  const displayCategory = categories
    .map((item) => {
      return `<button class="filter-btn" data-id="${item}">
          ${item}
        </button>`
    })
    .join('')
  btnContainer.innerHTML = displayCategory

  const filterBtns = document.querySelectorAll('.filter-btn')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id
      const pluginCategory = arr.filter((item) => {
        if (item.category === category) {
          return item
        }
      })

      displayCards(pluginCategory)
    })
  })
}

// new Search

const searchBar = document.getElementById('search-item')

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase()

  const filteredCards = plugins.filter((card) => {
    const searchValue =
      card.name.toLowerCase() + ' ' + card.publisher.toLowerCase()
    return searchValue.includes(searchString)
  })
  if (filteredCards.length === plugins.length) {
    initCardsDisplay(plugins)
  } else {
    displayCards(filteredCards)
  }
})

//copyright date

const copyrightDate = document.getElementById('date')

copyrightDate.innerHTML = new Date().getFullYear()
