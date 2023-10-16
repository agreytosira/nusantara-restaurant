import FavRestoIdb from '../../data/resto-idb'
import restoCard from '../templates/resto-card'

const Favorite = {
  async render() {
    return `
      <div class="restaurant__header">
        <h2>Favorited Restaurants</h2>
        <p>Your favorite restaurant will be listed here</p>
      </div>
      <div class="restaurant__content"></div>
    `
  },

  async afterRender() {
    // get fav resto
    const data = await FavRestoIdb.getAllResto()
    const favRestoContainer = document.querySelector('.restaurant__content')
    document.querySelector('.hero').style.display = 'none'
    document.querySelector('.navbar__item').classList.remove('active')
    document.querySelectorAll('.navbar__item')[1].classList.add('active')

    // if data empty
    if (data.length === 0) {
      favRestoContainer.classList.add('empty')
      favRestoContainer.innerHTML = `
        <h4>Currently no restaurant added to favorites</h4>
      `
    }

    // display all fav resto
    data.forEach((resto) => {
      favRestoContainer.classList.remove('empty')
      favRestoContainer.innerHTML += restoCard(resto)
    })
  }
}

export default Favorite
