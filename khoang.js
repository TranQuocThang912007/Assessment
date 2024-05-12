let products = {
  data: [
    {
      name: "LaVie 450ml",
      price: "45.000đ",
      image: "",
    },

    {
      name: "Perrier 750ml",
      price: "75.000đ",
      image: "",
    },

    {
      name: "S.Pellegrino 500ml",
      price: "50.000đ",
      image: "",
    },

    {
      name: "Evian 750ml",
      price: "75.000đ",
      image: "",
    },

    {
      name: "TARO RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-5.jpg",
    },

    {
      name: "NEON RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-1.jpg",
    },

    {
      name: "ORANAGE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-2.jpg",
    },

    {
      name: "BLUE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-3.jpg",
    },

    {
      name: "WHITE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-4.jpg",
    },

    {
      name: "CUTIS MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cutis.jpg",
    },

    {
      name: "CAM VU MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cam-vu.jpg",
    },
  ],
};

for (let items of products.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

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
