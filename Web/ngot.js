let products = {
  data: [
    {
      name: "Coca Cola  330ml",
      price: "15.000đ",
      image: "../images/4.jpg",
    },

    {
      name: "Pepsi 330ml",
      price: "15.000đ",
      image: "../images/10.jpg",
    },

    {
      name: "fanta 355ml",
      price: "20.000đ",
      image: "../images/11.jpg",
    },

    {
      name: "7up 150 ml",
      price: "10.000đ",
      image: "../images/12.jpg",
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
