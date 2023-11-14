const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked food', ({ I }) => {
  I.seeElement('h4')
  I.see('Currently no restaurant added to favorites', 'h4')
})
