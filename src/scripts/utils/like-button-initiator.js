import FavRestaurantIdb from '../data/restaurant-idb'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like-button'
import { initSwalError, initSwalSuccess } from './swal-initiator'

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = data.restaurant

    await this._renderButton()
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant

      if (await this._isRestaurantExist(id)) {
        this._renderLikedButtonTemplate()
      } else {
        this._renderLikeButtonTemplate()
      }
    } catch (error) {
      console.error(error)
      initSwalError(error.message)

      throw new Error(error)
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.putRestaurant(this._restaurant)
      initSwalSuccess('Restaurant added to Favorite!')
      this._renderButton()
    })
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      await FavRestaurantIdb.deleteRestaurant(this._restaurant.id)
      initSwalSuccess('Restaurant removed from Favorite!')
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
