const links = document.querySelectorAll(".links");
links.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.classList[0]);
    links.forEach((li, index) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

const productList = document.querySelector(".product-list");

fetch("./data.json")
  .then((response) => {
    return response.json(); // ✅ use response.json(), NOT JSON.parse(response)
  })
  .then((res) => {
    console.log(res); // Do something with the parsed JSON data
    res.forEach((product) => {
      const card = document.createElement("product-card");
      card.img = product.img;
      card.item = product.item;
      card.price = product.price;
      productList.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
