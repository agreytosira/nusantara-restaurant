import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'
import FavRestaurantIdb from '../../src/scripts/data/restaurant-idb'

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestaurantIdb: FavRestaurantIdb,
    data: {
      restaurant
    }
  })
}

export { createLikeButtonInitiatorWithRestaurant }
