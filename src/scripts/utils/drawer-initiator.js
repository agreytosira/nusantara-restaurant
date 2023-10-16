const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button)
    })
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation()
    drawer.classList.toggle('active')
    drawer.classList.contains('active') ? button.querySelector('i').classList.replace('ri-menu-line', 'ri-close-line') : button.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line')
  }
}

export default DrawerInitiator
