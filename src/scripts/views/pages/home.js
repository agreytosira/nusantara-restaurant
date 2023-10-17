import Spinner from '../templates/spinner'
import RestaurantSource from '../../data/restaurant-source'
import restaurantCard from '../templates/restaurant-card'
import { initSwalError } from '../../utils/swal-initiator'

const Home = {
  async render() {
    return `
        <div class="restaurant__header">
          <h2>Featured Restaurants</h2>
          <p>Explore the best restaurants in Indonesia</p>
        </div>
        <div id="loading"></div>
        <div class="restaurant__content"></div>
    `
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const loading = document.querySelector('#loading')
    const mainContainer = document.querySelector('#main')
    const listContainer = document.querySelector('.restaurant__content')

    // change main display to spinner
    mainContainer.style.display = 'none'
    loading.innerHTML = Spinner()

    try {
      const data = await RestaurantSource.getRestaurantList() // fetch restaurant list

      // loop restaurants data
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantCard(restaurant)
      })

      // change spinner display to main
      loading.style.display = 'none'
      mainContainer.style.display = 'block'
    } catch (err) {
      console.error(err)

      mainContainer.style.display = 'block'
      loading.style.display = 'none'
      listContainer.innerHTML = `Error: ${err.message}`
      initSwalError(err.message)
    }
  }
}

export default Home
