const assert = require('assert')

Feature('Unliking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('menghilangkan restaurant dari daftar favorit', async ({ I }) => {
  I.see('Currently no restaurant added to favorites', 'h4')

  I.amOnPage('/')
  I.seeElement('.restaurant-card')
  const restaurantCard = locate('.restaurant-card').first()
  const restaurantCardName = await I.grabTextFrom('h5')
  I.click(restaurantCard)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(1)

  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant-card')
  const likedRestaurantName = await I.grabTextFrom('h5')
  assert.strictEqual(restaurantCardName, likedRestaurantName)

  I.click('.restaurant-card')
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(1)

  I.amOnPage('/#/favorite')
  I.see('Currently no restaurant added to favorites', 'h4')
})
