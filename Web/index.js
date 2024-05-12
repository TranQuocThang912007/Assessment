let products = {
  data: [
    {
      name: "Coca Cola  330ml",
      price: "15.000đ",
      image: "../images/4.jpg",
    },

    {
      name: "S.Pellegrino 500ml",
      price: "50.000đ",
      image: "../images/5.jpg",
    },

    {
      name: "Perrier 750ml",
      price: "75.000đ",
      image: "../images/6.jpg",
    },

    {
      name: "Evian 750ml",
      price: "75.000đ",
      image: "../images/7.jpg",
    },

    {
      name: "Starbucks Cold Brew Black Unsweetened 325ml",
      price: "100.000đ",
      image: "../images/8.jpg",
    },

    {
      name: "Starbucks Frappuccino Vanilla 281ml",
      price: "50.000đ",
      image: "../images/9.jpg",
    },
  ],
};

for (let items of products.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  imgContainer.setAttribute("style", "text-align:center");
  let image = document.createElement("img");
  image.setAttribute("src", items.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = items.name.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerHTML = "<b>Price:</b> " + items.price;
  container.appendChild(price);

  let btn = document.createElement("button");
  btn.setAttribute("onclick", "addToCart()");
  btn.innerHTML = "Thêm vào giỏ hàng";
  container.appendChild(btn);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
