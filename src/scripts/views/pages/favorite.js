import FavRestaurantIdb from '../../data/restaurant-idb'
import restaurantCard from '../templates/restaurant-card'

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
    const data = await FavRestaurantIdb.getAllRestaurant()
    const favRestaurantContainer = document.querySelector('.restaurant__content')
    document.querySelector('.hero').style.display = 'none'
    document.querySelector('.navbar__item').classList.remove('active')
    document.querySelectorAll('.navbar__item')[1].classList.add('active')

    if (data.length === 0) {
      favRestaurantContainer.classList.add('empty')
      favRestaurantContainer.innerHTML = `
        <h4>Currently no restaurant added to favorites</h4>
      `
    }

    data.forEach((restaurant) => {
      favRestaurantContainer.classList.remove('empty')
      favRestaurantContainer.innerHTML += restaurantCard(restaurant)
    })
  }
}

export default Favorite
