import 'regenerator-runtime'
import '../styles/main.scss'

import App from './views/App'
import swRegister from './utils/sw-register'
import './components/navbar'
import './components/hero'
import './components/custom-footer'

const app = new App({
  button: document.querySelector('.btn-toggle'),
  drawer: document.querySelector('.navbar__list'),
  content: document.querySelector('#main')
})

window.addEventListener('hashchange', () => {
  document.querySelector('.container')
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
