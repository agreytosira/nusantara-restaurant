class MainContent extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
        <section class="restaurant" id="main"></section>
      `
  }
}

customElements.define('main-content', MainContent)
