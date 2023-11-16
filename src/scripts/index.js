import 'regenerator-runtime'
import '../styles/main.scss'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/App'
import swRegister from './utils/sw-register'
import './components/app-header'
import './components/app-hero'
import './components/main-content'
import './components/app-footer'

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
