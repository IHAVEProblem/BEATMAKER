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