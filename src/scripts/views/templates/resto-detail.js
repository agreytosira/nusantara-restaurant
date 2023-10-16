/* eslint-disable indent */
import CONFIG from '../../global/config'

const restoDetail = (resto) => `
  <div class="detail__content">
    <div class="detail__header">
      <h2>${resto.name}</h2>
      <p>Details of ${resto.name} Restaurant</p>  
    </div>
    <div class="detail__thumbnail">
        <img alt="Foto ${resto.name}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
    </div>
    <ul class="detail__info">
      <li class="detail__category">${resto.categories
        .map(
          (category) => `
            <span class="detail__category-item">${category.name}</span>
          `
        )
        .join('')}
      </li>
      <div class="detail__attribute">
          <li class="detail__address">
            <i class="ri-map-pin-fill"></i> 
            <p >${resto.address}, ${resto.city}</p> 
          </li>
          <li class="detail__rating">
            <i class="ri-star-fill"></i>
            <p >${resto.rating}</p>
          </li>
      </div>

      <li><p class="detail__description">${resto.description}</p></li>

    </ul>

    <h3>Menu List</h3>

    <div class="detail__menu">
      <div class="detail__food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
            .map(
              (food, i) => `
                <li class="detail__food-list"><p>${i + 1}) ${food.name}</p></li>
              `
            )
            .join('')}
        <ul>
      </div>

      <div class="detail__drink">
        <h4>Beverages</h4>
        <ul>
          ${resto.menus.drinks
            .map(
              (drink, i) => `
                <li class="detail__drink-list"><p>${i + 1}) ${drink.name}</p></li>
              `
            )
            .join('')}
        <ul>
      </div>
    </div>

    <h3>Reviews</h3>

    <div class="detail__review">
    ${resto.customerReviews
      .map(
        (review) => `
          <div class="detail__review-item">
            <div class="review__header">
              <p class="review__name">${review.name}</p>

              <p class="review__date">${review.date}</p>
            </div>

            <div class="review__body">
              ${review.review}
            </div>
          </div>
        `
      )
      .join('')}
    </div>
  </div>
`

export default restoDetail
