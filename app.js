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
  enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')

  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
})




// append cards

const cards = [
  {
    img: "img/ableton 1.svg",
    name: "Line",
    publisher: "Ableton",
    version: "11.2.6",
    source: "source/Image_Line_FL_Studio_Producer_Edition_20_8_4_2576_RePack_by_Zom.torrent"
  },
  {
    img: "img/flstudio 1.svg",
    name: "FL studio",
    version: "14.14.14"
  }
]
const cardsContainer = document.getElementById("card-list")

for(let i = 0; i < cards.length; i++){
  cardsContainer.innerHTML += `
  <a class="card" href="${cards[i].source}" download>
  <img class="card_image" src="${cards[i].img}" alt="">
    <div class="card-info">
      <p class='card_name card_text'>${cards[i].name}</p>
      <p class='card_subname card_text'>${cards[i].publisher}</p>
      <p class='card_version card_text'>${cards[i].version}</p>
    </div>
  </a>`
}

// search

const search = () => {
  const searchBox = document.getElementById('search-item').value.toUpperCase();
  const storeItems = document.getElementById('card-list')
  const card = document.querySelectorAll('.card')
  const cardName = storeItems.getElementsByTagName("p")

  for (let i = 0; i < cardName.length; i++) {
    const match = card[i].getElementsByTagName("p")[0]

    if (match){
      let textValue = match.textContent || match.innerHTML
      if (textValue.toUpperCase().indexOf(searchBox) > -1){
        card[i].style.display = '';
      } else {
        card[i].style.display = 'none';
      }
    }
  }
}
