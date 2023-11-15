Feature('Review Restaurant')

Scenario('post review for a restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.seeElement('.restaurant-card')
  const restaurantCard = locate('.restaurant-card').first()
  I.click(restaurantCard)

  I.seeElement('#input__name')
  I.seeElement('#input__review')
  I.seeElement('#submit__review')

  I.fillField('#input__name', 'Code Blu')
  I.fillField('#input__review', 'Restoran ini luar biasa!')
  I.click('#submit__review')

  I.see('Code Blu', '.review__name')
  I.see('Restoran ini luar biasa!', '.review__body')
})
