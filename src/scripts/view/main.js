import data from '../../public/data/DATA.json'

const main = () => {
  function renderRestaurants(restaurants) {
    const restaurantContent = document.querySelector('.restaurant__content')
    restaurantContent.innerHTML = ''

    restaurants.forEach((restaurant) => {
      restaurantContent.innerHTML += `
      <a href="#" class="restaurant-card">
        <div class="restaurant-card__thumbnail">
          <img src="${restaurant.pictureId}" alt="Foto Restoran ${restaurant.name}" />
          <span class="restaurant-card__city">${restaurant.city}</span>
        </div>
        <div class="restaurant-card__body">
          <div class="restaurant-card__rating"><i class="ri-star-fill"></i> ${restaurant.rating}</div>
          <div class="restaurant-card__name"><h5>${restaurant.name}</h5></div>
          <div class="restaurant-card__desc">
            <p>${restaurant.description}</p>
          </div>
        </div>
      </a>
    `
    })
  }

  renderRestaurants(data.restaurants)

  const btnToggle = document.querySelector('.btn-toggle')
  const navbarList = document.querySelector('.navbar__list')

  btnToggle.addEventListener('click', function () {
    navbarList.classList.toggle('active')
    navbarList.classList.contains('active') ? this.querySelector('i').classList.replace('ri-menu-line', 'ri-close-line') : this.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line')
  })
}

export default main
