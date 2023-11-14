const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('h4')
  I.see('Currently no restaurant added to favorites', 'h4')
})

Scenario('liking one restaurant', async ({ I }) => {
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

  pause()
})
