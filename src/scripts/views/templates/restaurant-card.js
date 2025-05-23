import CONFIG from '../../global/config'

const restaurantCard = (restaurant) => `
    <a href="#/restaurant/${restaurant.id}" class="restaurant-card">
        <div class="restaurant-card__thumbnail">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="Foto Restaurantran ${restaurant.name}" />
          <span class="restaurant-card__city"><i class="ri-map-pin-fill"></i>${restaurant.city}</span>
        </div>
        <div class="restaurant-card__body">
          <div class="restaurant-card__rating"><i class="ri-star-fill"></i> ${restaurant.rating}</div>
          <div class="restaurant-card__name"><h3>${restaurant.name}</h3></div>
          <div class="restaurant-card__desc">
            <p>${restaurant.description}</p>
          </div>
        </div>
      </a>
  `

export default restaurantCard
