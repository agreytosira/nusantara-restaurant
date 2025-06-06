import FavRestaurantIdb from '../src/scripts/data/restaurant-idb'
import * as TestFactories from './helpers/testFactories'

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Liking a Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavRestaurantIdb.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    await FavRestaurantIdb.putRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const allRestaurant = await FavRestaurantIdb.getAllRestaurant()
    expect(allRestaurant).toEqual([{ id: 1 }])

    await FavRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const allRestaurant = await FavRestaurantIdb.getAllRestaurant()
    expect(allRestaurant).toEqual([])
  })
})
