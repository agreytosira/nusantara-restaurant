const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('Currently no restaurant added to favorites', 'h4')
})

Scenario('liking one restaurant', async ({ I }) => {
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
})

Scenario('menambahkan tiga restaurant ke daftar favorit', async ({ I }) => {
  for (let i = 1; i < 4; i++) {
    // Mengakses halaman utama
    I.amOnPage('/')

    // Mengklik restaurant-card dengan indeks i
    I.seeElement('.restaurant-card')
    const restaurantCard = locate('.restaurant-card').at(i)
    const restaurantCardName = await I.grabTextFrom(locate('.restaurant-card h5').at(i))
    I.click(restaurantCard)

    // Menunggu dan mengklik tombol 'like'
    I.seeElement('#likeButton')
    I.click('#likeButton')
    I.wait(1)

    // Pindah ke halaman favorit
    I.amOnPage('/#/favorite')
    I.seeElement('.restaurant-card')

    // Memeriksa apakah restaurant-card ditambahkan ke daftar favorit dengan benar
    const likedRestaurantName = await I.grabTextFrom(locate('.restaurant-card h5').at(i))
    assert.strictEqual(restaurantCardName, likedRestaurantName)
  }
})
