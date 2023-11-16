const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('Currently no restaurant added to favorites', '.empty h4')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restaurant-card')
  const restaurantCard = locate('.restaurant-card').first()
  const restaurantCardName = await I.grabTextFrom(locate('.restaurant-card h3').first())
  I.click(restaurantCard)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.wait(1)

  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant-card')
  const likedRestaurantName = await I.grabTextFrom(locate('.restaurant-card h3').first())

  assert.strictEqual(restaurantCardName, likedRestaurantName)
})

Scenario('liking three restaurant', async ({ I }) => {
  for (let i = 1; i < 4; i++) {
    I.amOnPage('/')

    I.seeElement('.restaurant-card')
    const restaurantCard = locate('.restaurant-card').at(i)
    const restaurantCardName = await I.grabTextFrom(locate('.restaurant-card h3').at(i))
    I.click(restaurantCard)

    I.seeElement('#likeButton')
    I.click('#likeButton')
    I.wait(1)

    I.amOnPage('/#/favorite')
    I.seeElement('.restaurant-card')

    const likedRestaurantName = await I.grabTextFrom(locate('.restaurant-card h3').at(i))
    assert.strictEqual(restaurantCardName, likedRestaurantName)
  }
})
