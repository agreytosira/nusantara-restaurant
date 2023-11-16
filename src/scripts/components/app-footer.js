class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
    <ul class="footer-social">
      <li>
        <a href="https://github.com/agreytosira" aria-label="Link to Our GitHub" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i></a>
      </li>
      <li>
        <a href="https://www.instagram.com/agtsra" aria-label="Link to Our Instagram" target="_blank" rel="noopener noreferrer"><i class="ri-instagram-line"></i></a>
      </li>
      <li>
        <a href="https://web.facebook.com/darknessdreamz" aria-label="Link to Our Facebook" target="_blank" rel="noopener noreferrer"><i class="ri-facebook-box-fill"></i></a>
      </li>
    </ul>
    <p>Copyright © 2023 - Nusantara</p>
    <p>Developed by <strong>Agrey Tosira</strong> for Dicoding Submission</p>
    </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)
