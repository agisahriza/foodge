class FooterFoodge extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          <li>Copyright © 2022 - Foodge</li>
          <li>handcrafted with <i class="fa-solid fa-heart"></i> by Agisahriza</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-foodge', FooterFoodge);
