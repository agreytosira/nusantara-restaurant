class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="navbar">
      <a class="navbar__brand" href="/">
        <img class="lazyload" data-src="./images/logo-nusantara.svg" alt="Logo Nusantara" />
      </a>
      <button class="btn-toggle" aria-label="Mobile Menu Button"><i class="ri-menu-line"></i></button>
      <ul class="navbar__list">
        <li class="navbar__item active"><a href="/">Home</a></li>
        <li class="navbar__item"><a href="#/favorite">Favorite</a></li>
        <li class="navbar__item"><a href="https://www.agreytosira.my.id/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
      </ul>
    </nav>
    </header>
    `
  }
}

customElements.define('app-header', AppHeader)
