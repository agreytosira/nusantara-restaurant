import 'regenerator-runtime'
import '../styles/main.scss'
// css
// import '../styles/normalize.css';
// import '../styles/root.css';
// import '../styles/nav.css';
// import '../styles/header.css';
// import '../styles/main.css';
// import '../styles/footer.css';
// import '../styles/responsive.css';
// import '../styles/spinner.css';
// import '../styles/resto-detail.css'
// import '../styles/resto-fav.css'

// js
import App from './views/App'
import swRegister from './utils/sw-register'
// components
import './components/navbar'
import './components/hero'
import './components/custom-footer'

// init App
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
