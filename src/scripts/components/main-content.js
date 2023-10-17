class MainContent extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
        <section class="restaurant" id="main"></section>
      `
    this.setAttribute('id', 'main-content')
  }
}

customElements.define('main-content', MainContent)
