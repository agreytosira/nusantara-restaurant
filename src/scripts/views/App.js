import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage() {
    this._drawer.classList.remove('active')
    document.querySelector('.btn-toggle i').className = 'ri-menu-line'
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
    const skipLinkElem = document.querySelector('.btn-skiptocontent')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#main').focus()
    })
  }
}

export default App
