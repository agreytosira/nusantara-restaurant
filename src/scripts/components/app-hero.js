class AppHero extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <section class="hero">
    <div class="hero__content">
      <h1>Explore Various Restaurants in Indonesia</h1>
      <p>Explore diverse restaurants from all over Indonesia with <strong>Nusantara</strong>. Discover the Delights from Sabang to Merauke!</p>
      <a href="#main" class="btn-primary">View Restaurant Catalog <i class="ri-arrow-right-up-line"></i></a>
    </div>
    </section>
    `
  }
}

customElements.define('app-hero', AppHero)
