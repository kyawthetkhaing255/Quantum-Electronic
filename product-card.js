const template = document.createElement("template");
template.innerHTML = `
<style>
      * {
        box-sizing: border-box;
      }

      body {
        font-family: "Segoe UI", sans-serif;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      .card {
        background: #fff;
        width: 300px;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease;
        outline:none;
        border:none;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .card img {
        width: 100%;
        height: 200px;
        // height:auto;
        object-fit: cover;
      }

      .card-content {
        padding: 20px;
      }

      .product-name {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
      }

      .price {
        font-size: 1rem;
        color: #4caf50;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .btn {
        display: inline-block;
        background: #4caf50;
        color: #fff;
        padding: 10px 16px;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.9rem;
        transition: background 0.3s ease;
      }

      .btn:hover {
        background: #45a049;
      }
    </style>
<div class="card">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.-qQjbwHJRYwnrx_vEhQZnwHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Product Image"
      />
      <div class="card-content">
        <div class="product-name">Elegant Watch</div>
        <div class="price">$79.99</div>
        <a href="#" class="btn">Buy Now</a>
      </div>
    </div>
`;

class ProductCard extends HTMLElement {
  constructor() {
    super();
    // const shadowRoot = this.attachShadow({ mode: "closed" });
    this.root = this.attachShadow({ mode: "closed" });
    const card = template.content.cloneNode(true);
    // shadowRoot.append(card);
    this.root.append(card);
  }
  //define allowed attributes
  static get observedAttributes() {
    return ["img", "item", "price"];
  }
  get img() {
    return this.getAttribute("img");
  }
  set img(value) {
    this.setAttribute("img", value);
  }

  get item() {
    return this.getAttribute("item");
  }
  set item(value) {
    this.setAttribute("item", value);
  }

  get price() {
    return this.getAttribute("price");
  }
  set price(value) {
    this.setAttribute("price", value);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(attrName);
    if (attrName.toLowerCase() === "img") {
      console.log("it Works");
      const image = this.root.querySelector(".card img");
      image.src = newVal;
    } else if (attrName.toLowerCase() === "item") {
      const productName = this.root.querySelector(".product-name");
      productName.textContent = newVal;
    } else if (attrName.toLowerCase() === "price") {
      const price = this.root.querySelector(".price");
      price.textContent = newVal;
    }
  }
}
window.customElements.define("product-card", ProductCard);
