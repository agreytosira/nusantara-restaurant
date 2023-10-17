import CONFIG from '../../global/config'

const restaurantCard = (restaurant) => `
    <a href="#/restaurant/${restaurant.id}" class="restaurant-card">
        <div class="restaurant-card__thumbnail">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto Restaurantran ${restaurant.name}" />
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

export default restaurantCard
