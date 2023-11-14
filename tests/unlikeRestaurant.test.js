import FavRestaurantIdb from '../src/scripts/data/restaurant-idb'
import * as TestFactories from './helpers/testFactories'

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

describe('Unliking a Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavRestaurantIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavRestaurantIdb.deleteRestaurant(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavRestaurantIdb.getAllRestaurant()).toEqual([])
  })

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 })

    await FavRestaurantIdb.deleteRestaurant(1)

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
    expect(await FavRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})
